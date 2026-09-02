export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      © {year} Onkar Jadhav. Built with React &amp; Vite.
    </footer>
  )
}
