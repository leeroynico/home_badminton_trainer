import styles from './page.module.css'
import Link from 'next/link'
import SliderComponent from "@/component/SliderComponent";
import SelectComponent from '@/component/SelectComponent';

export default function Home() {
  return (
      <main className={styles.main}>
          <div >
              <Link href="/config">config</Link>
              <SliderComponent/>
              <SelectComponent/>
          </div>
      </main>
  )
}
