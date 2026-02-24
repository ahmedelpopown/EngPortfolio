import "../index.css"
export default function LoadingPage({ hide }) {
  return (
    <div className={`loader-wrapper ${hide ? "fade-out" : ""}`}>
      <div className="spinner" />
    </div>
  );
}