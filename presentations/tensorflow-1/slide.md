## MNISTの学習結果を実際に手書きして試す ##

TensorFlow研究会 - Dec. 11, 2015

@sugyan

---

## 自己紹介 ##

- ID: sugyan (すぎゃーん)
- 33歳独身ドルヲタ
- Web系 サーバサイドエンジニア
 - PerlとかJavaとか
- 機械学習ほぼ**ド素人**

---

### TensorFlow ###

---

「なんか面白そうなのが出たぞ」

「とりあえず触ってみるか」

---

「まずはTutorialから」

「MNISTってのから入るのが定番なのね」

---

「サンプルコードを動かして…」

「なんか学習できたっぽい！」

---

「91%の認識率、多層畳み込みだと99.2%」

「ディープラーニングすごい」

---

### すごいんだけど実感が… ###

---

せっかくなんだから結果を試したい

自分で書いた数字も識別してみたい

---

https://tensorflow-mnist.herokuapp.com/

![](https://cloud.githubusercontent.com/assets/80381/11339453/f04f885e-923c-11e5-8845-33c16978c54d.gif)

---

- Tutorialの各モデルで学習結果を保存
 - Softmax回帰 (91%)
 - 多層畳み込みネットワーク (99.2%)
- それらを使った入出力をPythonのWebアプリでAPI化
- canvasで描画したものを入力に変換しAjaxリクエスト

---

https://github.com/sugyan/tensorflow-mnist
