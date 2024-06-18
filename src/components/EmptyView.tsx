export default function EmptyView({ text }: { text: string }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> Your {text} is Empty </div>
  )
}
