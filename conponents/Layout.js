import styles from "@/styles/Layout.module.css";
import { Header, Nav,Table,Pagination,Footer,Modal } from "@/conponents";



export function Layout({ children }){
  return (<div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Table/>
        <Pagination/>
        <Modal/>    
        </div>
  );
}
