import React from 'react';

export default function Home() {
  return (
    <>
      <h2 className="font-mono my-2 text-3xl font-bold">Welcome to nok.blog!</h2>
      <section className="mt-8 mb-4">
        <h3 className="my-2 text-2xl font-bold">このブログについて</h3>
        <p>主に技術メモをまとめるためのブログです。</p>
        <p>いろいろ勉強中の素人なのでなにとぞ。間違いや助言があればTwitterで教えてください。</p>
        <p>サイトにあるコードは自己責任でご自由にお使いください。</p>
      </section>
      <section className="mt-8 mb-4">
        <h3 className="my-2 text-2xl font-bold">わたしについて</h3>
        <p>
          普段は都内でネットワークエンジニアをしています。
          これまでは趣味でプログラムを書いていましたが、社内システムの開発をしたいと思い、本格的に勉強を始めました。
          主にTypescriptとGoを書いていますが、Rustにも挑戦したいと思います。XRに興味があります。
        </p>
      </section>
    </>
  );
}
