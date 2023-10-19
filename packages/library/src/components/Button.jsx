export function Button({ children, ...rest }) {
  return (
    <button
      {...rest}
      style={{ color: 'white', background: 'blue', border: 'none', borderRadius: '4px', padding: '4px 8px' }}
    >
      {children}
    </button>
  );
}
