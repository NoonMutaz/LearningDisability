import { createClient } from '@liveblocks/client';

const liveblocks = createClient({
  publicApiKey: 'YOUR_PUBLIC_API_KEY',
  appId: 'YOUR_APP_ID',
});

export default liveblocks;