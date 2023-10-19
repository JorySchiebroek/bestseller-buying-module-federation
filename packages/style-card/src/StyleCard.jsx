import { Button } from '@buying/library/components/Button';

const HeaderText = ({ children }) => (
  <p style={{ fontSize: 12, fontWeight: 900, color: 'rgba(0,0,0,0.5)' }}>
    {children}
  </p>
);

const DataText = ({ children }) => (
  <p style={{ fontSize: 16, fontWeight: 100, color: 'rgba(0,0,0,1)' }}>
    {children}
  </p>
);

const StyleCard = ({ src, styleNumber, onClose }) => {
  return (
    <div style={{ margin: 4, padding: 8, border: '1px solid grey' }}>
      <h1>Style Card</h1>
      <HeaderText>
        Opened from:
      </HeaderText>
      <DataText>
        {src}
      </DataText>
      <br />
      <HeaderText>
        Style number:
      </HeaderText>
      <DataText>
        {String(styleNumber)}
      </DataText>
      <Button onClick={() => onClose?.()}>Close me</Button>
    </div>
  );
}

export default StyleCard;
