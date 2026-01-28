const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const background_image = "https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_medium.jpg";

export const useravatar = "";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OThjZjhjZTNkNjEyMzNhMzZlODFiN2E1NjM3NDU3YyIsIm5iZiI6MTc0MTI3NTIyMS4yNzEwMDAxLCJzdWIiOiI2N2M5YzA1NWUyMjA0ZmM5YzAwY2U3N2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.E0WKGfAEOF1Y71Opm2l9ACy1-T3UJR40K_YIXlPQ4zk'
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "english" },
  { identifier: "hindi", name: "hindi" },
  { identifier: "spanish", name: "spanish" },
]



// API keys are securely stored in .env
export const GEMINI_API_KEY = apiKey;