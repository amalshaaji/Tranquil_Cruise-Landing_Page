const tagManagerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export default function GoogleTagManagerNoscript() {
  if (!tagManagerId) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${tagManagerId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
