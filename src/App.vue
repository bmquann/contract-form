<template>
  <div id="app">
    <ContractForm1Main
      v-if="currentForm === 1"
      :forms="form1"
      :header="formStep[currentForm - 1]"
      :currentForm="currentForm"
    ></ContractForm1Main>
    <ContractForm2Main
      v-if="currentForm === 2"
      :currentForm="currentForm"
      :header="formStep[currentForm - 1]"
    ></ContractForm2Main>
    <ContractForm2Main
      v-if="currentForm === 3"
      :currentForm="currentForm"
      :header="formStep[currentForm - 1]"
    ></ContractForm2Main>
    <ContractForm4Main
      v-if="currentForm === 4"
      :header="formStep[currentForm - 1]"
      :currentForm="currentForm"
    ></ContractForm4Main>
    <ContractForm5Main
      v-if="currentForm === 5"
      :header="formStep[currentForm - 1]"
      :currentForm="currentForm"
    ></ContractForm5Main>
  </div>
</template>

<script>
import ContractForm1Main from "./components/Form1/ContractForm1Main.vue";
import ContractForm2Main from "./components/Form2/ContractForm2Main.vue";
import { mapState } from "vuex";
import ContractForm4Main from "./components/Form4/ContractForm4Main.vue";
import ContractForm5Main from "./components/Form5/ContractForm5.vue";

export default {
  name: "App",
  components: {
    ContractForm1Main,
    ContractForm2Main,
    ContractForm4Main,
    ContractForm5Main,
  },
  data() {
    // eslint-disable-next-line no-unused-labels
    return {
      form1: [
        {
          id: 1,
          main: [
            {
              header: "雇用契約期間の定め",
              content: [
                {
                  title: "",
                  body: ["契約期間の定め：なし"],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          main: [
            {
              header: "勤務地",
              content: [
                {
                  title: "事業所名",
                  body: ["テキストテキストテキストテキストテキストテキスト"],
                },
                {
                  title: "事業所在地",
                  body: ["テキストテキストテキストテキストテキストテキスト"],
                },
                {
                  title: "仕事内容",
                  body: ["テキストテキストテキストテキストテキストテキスト"],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          main: [
            {
              header: "勤務条件",
              content: [
                {
                  title: "",
                  body: ["固定勤務", "勤務区分"],
                },
                {
                  title: "",
                  body: [
                    "1週間の勤務日数（1ヶ月平均）：5日　休日：土日祝日、年末年始",
                    "勤務開始時間：09:00　勤務終了時間:18:00　休憩時間：120分",
                  ],
                },
                {
                  title: "",
                  body: [
                    "所定労働時間（1日）：8時間　所定労働時間（1週間平均）：40時間",
                    "労働時間選択区分：40時間",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          main: [
            {
              header: "報酬条件",
              content: [
                {
                  title: "等級",
                  body: ["1等級"],
                },
                {
                  title: "",
                  body: [
                    "基本給：200,000円　年齢給：200,000円　職能給：200,000円",
                  ],
                },
                {
                  title: "",
                  body: [
                    "調整給：200,000円　調整給1：200,000円　調整給2：200,000円",
                  ],
                },
              ],
            },
            {
              header: "手当",
              content: [
                {
                  title: "",
                  body: ["ライフプラン手当：200,000円"],
                },
                {
                  title: "",
                  body: [
                    "役職手当：200,000円　役職手当2：200,000円　役職手当3：200,000円",
                  ],
                },
                {
                  title: "",
                  body: [
                    "資格手当：200,000円　住宅地域手当：200,000円　管理薬剤師手当：200,000円",
                  ],
                },
                {
                  title: "",
                  body: [
                    "職務手当：200,000円　職務手当2：200,000円　職務手当3：200,000円",
                  ],
                },
                {
                  title: "",
                  body: [
                    "ブロック手当：200,000円　フィールドマネジャー手当：200,000円　",
                  ],
                },
                {
                  title: "",
                  body: ["単身赴任手当：200,000円　社員区分手当：200,000円　"],
                },
                {
                  title: "",
                  body: ["合計支給額", "200,000円"],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          main: [
            {
              header: "勤務地",
              content: [
                {
                  title: "事業所名",
                  body: ["テキストテキストテキストテキストテキストテキスト"],
                },
                {
                  title: "事業所在地",
                  body: ["テキストテキストテキストテキストテキストテキスト"],
                },
                {
                  title: "仕事内容",
                  body: ["テキストテキストテキストテキストテキストテキスト"],
                },
              ],
            },
          ],
        },
        {
          id: 6,
          main: [
            {
              header: "誓約書",
              content: [
                {
                  title: "",
                  body: [
                    "１　私は アイングループ（以下 「 会社 」 という。）の就業規則等の諸規則・諸規定を遵守し、誠実に職務に従事いたします。",
                    "２　履歴書およびその他の提出書類の記載事項は事実に相違ありません。",
                    "３　貴社の社員としての体面を汚すような行為はいたしません。",
                    "４　会社 の業務 に関連して知りえた個人情報、企業情報（取引先・患者様・お客様 に関する情報、人事・財務・関連会社・紛争に関する情報、その他会社が秘密として指定する情報を含む。）、については、在職中はもとよりのこと、会社退職後であっても会社の許可なくして自ら使用し、又は第三者に       　　開示するなど漏洩いたしません。",
                    "５　会社在職中、私が保管・作成・従事を命じられた会社の個人情報・諸文書・資料・帳簿等（フロッピー、ＭＯその他記録媒体の如何を問わない。）は、　　情報管理者の監督のもと、責任をもって保管し、第三者に譲渡・漏洩せず、　　会社退職時には、これら総てを会社に返還いたします。",
                    "６　職務中に知り得た第三者の個人情報につき、その情報管理者の承諾なくして　　自ら使用し、又は第三者に開示・漏洩いたしません。",
                    "７　故意または重大な過失により貴社に損害を及ぼしたときは、その損害につい　　て賠償の責任を負います。",
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: mapState(["currentForm", "formStep"]),
  methods: {
    handlePrev: function () {
      if (this.currentForm > 1) {
        this.$store.commit("HANLEPREV");
      }
    },
    handleNext: function () {
      if (this.currentForm === 1) {
        this.$store.commit("UPDATE_PAGEACTIVE", 1);
      } else if (this.currentForm === 2) {
        this.$store.commit("UPDATE_PAGEACTIVE", 1);
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&display=swap");
#app {
  width: 560px;
  margin: 50px auto;
  font-family: "Noto Sans", sans-serif;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
body {
  line-height: 1;
  color: #555;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
:focus {
  outline: 0;
}
ins {
  text-decoration: none;
}
del {
  text-decoration: line-through;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
}

.clearfix:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}

.clearfix {
  clear: both;
  display: block;
}

html[xmlns] .clearfix {
  display: block;
}

* html .clearfix {
  height: 1%;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
/*Add your css into here*/
.fl_left {
  float: left;
}
.fl_right {
  float: right;
}
.hidden {
  display: none;
}
</style>
