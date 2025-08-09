import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";

const Feedback = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://featurable.com/assets/bundle.js";
    script.defer = true;
    script.charset = "UTF-8";
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
          id="featurable-58353cf0-81f2-4230-869f-e1c8f76ace44"
          data-featurable-async
        ></div>
      </Box>
    </Box>
  );
};

export default Feedback;
