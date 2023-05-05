export default function Layout({ children }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
    >
      {children}
    </main>
  )
}