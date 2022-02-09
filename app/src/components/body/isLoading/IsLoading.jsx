import React from "react";
import { Skeleton, Stack, Box } from "@mui/material";

const Isloading = () => {
  const getSize = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 1, 2, 3, 4, , 5, 6, 7, 8, 9];

  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        width: "100%",
      }}
    >
      {getSize.map((e) => (
        <Stack spacing={1}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
      ))}
    </Box>
  );
};

export default Isloading;
