import React from "react";
import Layout from "../../components/Layout";
import styles from "./Coin.module.css";

export default function Coin({ coin }) {
  return (
    <Layout>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img src={coin.image.large} className={styles.coin_image} />
          <h1 classNames={styles.coin_name}>{coin.name}</h1>
          <p classNames={styles.coin_ticker}>{coin.symbol.toUpperCase()}</p>
          <p classNames={styles.coin_current}>
            ${coin.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
