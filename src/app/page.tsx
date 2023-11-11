import styles from './page.module.css'
import Link from 'next/link'
import Select from "@/component/Select";


export default function Home() {
  return (
      <main className={styles.main}>
          <div >
              <Link href="/config">config</Link>
              <Select/>
          </div>
      </main>
  )
}
