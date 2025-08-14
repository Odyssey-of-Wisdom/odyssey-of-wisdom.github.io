import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";

const Feedback = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embedsocial.com/cdn/aht.js";
    script.async = true;
    script.id = "EmbedSocialWidgetScript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box id="feedback" sx={{ py: 10, px: 4 }}>
      <Typography variant="h3" textAlign="center" mb={4} color="#17313E">
        What Youth Say
      </Typography>

      <Box sx={{ mb: 8, textAlign: "center" }}>
        <div
          className="embedsocial-widget"
          data-ref="1c2901332f2d3eaeb842c3e2fde65a6a"
        >
          <a
            href="https://embedsocial.com/google-reviews-widget/"
            title="Add Google reviews on a website"
            target="_blank"
            className="powered-by-es es-feed es-feed-no-pagination"
          >
            <img
              src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
              alt="EmbedSocial"
            />
            <span> Google reviews widget </span>
          </a>
        </div>
      </Box>
    </Box>
  );
};

export default Feedback;
