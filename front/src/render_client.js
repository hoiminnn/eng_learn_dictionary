import React from "react";
import { hydrateRoot } from 'react-dom/client';
import { Hello } from ".";

hydrateRoot(
    document.getElementById('root'),
    <Hello />
);