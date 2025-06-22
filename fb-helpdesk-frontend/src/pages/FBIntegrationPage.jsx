import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

export default function FBIntegrationPage() {
  const [connected, setConnected] = useState(false);
  const navigate = useNavigate();

  // Load Facebook SDK
  useEffect(() => {
    if (window.FB) return;

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1205258161334063",
        cookie: true,
        xfbml: true,
        version: "v17.0",
      });
    };

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Check Firestore if already connected
  useEffect(() => {
    const checkConnection = async () => {
      const user = auth.currentUser;
      if (!user) return;
      const ref = doc(db, "fbConnections", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists() && snap.data().connected) {
        setConnected(true);
      }
    };
    checkConnection();
  }, []);

 const handleConnect = () => {
  window.FB.login(
    async (response) => {
      if (response.authResponse) {
        // Get Pages managed by user
        window.FB.api("/me/accounts", async (res) => {
          if (res.data && res.data.length > 0) {
            const page = res.data[0];
            const user = auth.currentUser;
            if (!user) return;

            await setDoc(doc(db, "fbConnections", user.uid), {
              connected: true,
              timestamp: new Date(),
              page: {
                id: page.id,
                name: page.name,
                accessToken: page.access_token,
              },
            });

            setConnected(true);
          }
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    },
    {
      scope:
        "pages_show_list,pages_messaging,pages_read_engagement,pages_manage_metadata,pages_manage_posts",
    }
  );
};


  const handleDisconnect = async () => {
    const user = auth.currentUser;
    if (!user) return;
    await updateDoc(doc(db, "fbConnections", user.uid), {
      connected: false,
    });
    setConnected(false);
  };

  const handleReplyToMessages = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full text-center">
        {!connected ? (
          <>
            <h2 className="text-xl font-bold mb-6">Connect your Facebook Page</h2>
            <button
              onClick={handleConnect}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Connect with Facebook
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-6 text-green-600">
              Facebook Page Connected ✅
            </h2>
            <button
              onClick={handleDisconnect}
              className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 mb-4"
            >
              Disconnect Page
            </button>
            <br />
            <button
              onClick={handleReplyToMessages}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Reply to Messages
            </button>
          </>
        )}
      </div>
    </div>
  );
}
