function SocialButton({ icon: Icon, link, color }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
      style={{ color }}
    >
      <Icon />
    </a>
  );
}

export default SocialButton;
