export const data = [
    {
        id: 1,
        title: "顔写真の登録",
        desc: "システムの本人アイコンに使用します。あなたの顔が分かる写真を登録してください。未登録の場合、姓名の頭文字が表示されます。顔写真見本のように撮影してください。また、背景は白、スーツ着用、身だしなみルールに沿って撮影をお願いいたします。",
        form: [
            {
                isRequired: false,
                label: "",
                type: "file",
                name: "avatar",
                accept: "image/*",
                placeHolder: "",
            },
        ],
    },
    {
        id: 2,
        title: "本人確認書類",
        desc: "",
        form: [
            {
                isRequired: true,
                label: "運転免許証両面もしくは住民票を添付してください",
                type: "file",
                name: "verification",
                accept: "image/*",
                placeHolder: "",
            },
        ],
    },
    {
        id: 3,
        title: "基本情報登録",
        desc: "外国式氏名が戸籍に記載されている場合、国際結婚により戸籍上の姓が外国式の姓となっている、もしくは重国籍で戸籍上の氏名が外国式の氏名となっている場合、戸籍上の綴りで入力してください。",
        form: [
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "姓",
                type: "text",
                name: "firstName",
                placeHolder: "入力してください",
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "名",
                type: "text",
                name: "middleName",
                placeHolder: "入力してください",
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "セイ",
                type: "text",
                name: "lastName",
                placeHolder: "入力してください",
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "メイ",
                type: "text",
                name: "surName",
                placeHolder: "入力してください",
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "名（ローマ字）",
                type: "text",
                name: "familyName",
                placeHolder: "入力してください",
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                name: "gender",
                label: "性別",
                data: ["男性", "女性"],
                type: "radio",
            },
            {
                isRequired: true,
                isInteger: true,
                isEmail: false,
                title: "生年月日",
                name: "dob",
                type: "dob",
                event: "validateDateOfBirth",
                data: [
                    {
                        id: 1,
                        name: "year",
                        placeholder: "西暦（半角）",
                        label: "年",
                        isRequired: true,
                        isInteger: true,
                        isEmail: false,
                    },
                    {
                        id: 2,
                        name: "month",
                        placeholder: "半角",
                        label: "月",
                        isRequired: true,
                        isInteger: true,
                        isEmail: false,
                    },
                    {
                        id: 3,
                        name: "day",
                        placeholder: "半角",
                        label: "日",
                        isRequired: true,
                        isInteger: true,
                        isEmail: false,
                    },
                ],
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                name: "age",
                label: "生年月日",
                type: "display",
                text: "生年月日を入力すると表示されます",
            },
            {
                isRequired: false,
                isInteger: false,
                isEmail: false,
                label: "ビジネスネーム",
                type: "text",
                name: "oldSurName",
                placeHolder: "i入力してください",
                description: "旧姓を利用する等の場合に入力をしてください。"
            },
        ],
    },
    {
        id: 4,
        name: "education",
        title: "最終学歴",
        desc: "最終学歴が大学院の方は、大学を登録後に「＋学歴を追加する」から大学院を登録してください。",
        form: [
            {
                header: "学歴1"
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "入学年月日",
                type: "date",
                name: "admission",
                placeHolder: "",
                description: ""
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "卒業年月日",
                type: "date",
                name: "graduation",
                placeHolder: "",
                description: ""
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "学部名",
                type: "select",
                name: "classification",
                placeHolder: "選択してください",
                description: "",
                options: [
                    {
                        id: 1,
                        name: "Primary School",
                    },
                    {
                        id: 2,
                        name: "Junior High School",
                    },
                    {
                        id: 3,
                        name: "High School",
                    },
                    {
                        id: 4,
                        name: "University",
                    },
                    {
                        id: 5,
                        name: "College",
                    },
                    {
                        id: 6,
                        name: "Master's degree",
                    },
                ],
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "学校名",
                type: "search",
                name: "schoolName",
                placeHolder: "フリーワードで検索できます",
                description: "",
                data: [
                    {
                        name: "University of Economics and Business (Trường Đại học Kinh tế)",
                        value: "UEB",
                    },
                    {
                        name: "University of Education (Trường Đại Học Giáo Dục)",
                        value: "UED",
                    },
                    {
                        name: "University of Languages and International Studies (Trường Đại học Ngoại ngữ)",
                        value: "ULIS",
                    },
                    {
                        name: "Hanoi University of Science (Trường Đại học Khoa học Tự nhiên)",
                        value: "HUS",
                    },
                    {
                        name: "University of Social Science and Humanity (Trường Đại học Khoa học Xã hội và Nhân văn)",
                        value: "USSH",
                    },
                    {
                        name: "University of Engineering and Technology (Trường Đại học Công nghệ)",
                        value: "UET",
                    },
                    { name: "School of Law (Khoa Luật)", value: "USL" },
                    { name: "School of Medicine and Pharmacy (Khoa Y Dược)", value: "UMP" },
                    {
                        name: "School of International Studies (Khoa Quốc tế)",
                        value: "UIS",
                    },
                    {
                        name: "School of Interdisciplinary Studies (Khoa các Khoa học liên ngành)",
                        value: "UIS",
                    },
                ],
            },
            {
                isRequired: false,
                isInteger: false,
                isEmail: false,
                label: "学部名",
                type: "text",
                name: "faculty",
                placeHolder: "入力してください",
                description: ""
            },
        ],
        function: "学歴を追加する"
    },
    {
        id: 5,
        title: "保険年金",
        desc: "",
        form: [
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "基礎年金番号",
                type: "text",
                name: "基礎年金番号",
                placeHolder: "テキストテキス",
            },
            {
                isRequired: false,
                isInteger: false,
                isEmail: false,
                label: "雇用保険被保険者番号",
                type: "text",
                name: "雇用保険被保険者番号",
                placeHolder: "テキストテキス",
                description: "番号をお持ちの方は必ず入力してください",
            },
            {
                isRequired: false,
                isInteger: false,
                isEmail: false,
                label: "前職会社名",
                type: "text",
                name: "前職会社名",
                placeHolder: "テキストテキス",
                description: "雇用保険番号が不明の場合は入力をしてください",
            },
            {
                isRequired: false,
                label: "資格証明書類（年金手帳）",
                type: "file",
                name: "資格証明書類（年金手帳）",
                accept: "image/*",
                placeHolder: "年金手帳の写真を添付してください  ",
            },
            {
                isRequired: false,
                label: "資格署名書類（雇用保険被保険者証）",
                type: "file",
                name: "資格署名書類（雇用保険被保険者証）",
                accept: "image/*",
                placeHolder: "雇用保険被保険者証の写真を添付してください   ",
            },
            {
                isRequired: false,
                isInteger: false,
                isEmail: false,
                name: "確定拠出年金の利用希望",
                label: "確定拠出年金の利用希望",
                data: ["希望する", "利用しない"],
                type: "radio",
            },
        ]
    },
    {
        id: 6,
        title: "給与振込口座",
        desc: "",
        form: [
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "金融機関をフリーワードで検索",
                type: "search",
                name: "financial",
                disabled: false,
                placeHolder: "テキストテキス",
                description: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
                data: [
                    {
                        name: "University of Economics and Business (Trường Đại học Kinh tế)",
                        value: "UEB",
                    },
                    {
                        name: "University of Education (Trường Đại Học Giáo Dục)",
                        value: "UED",
                    },
                    {
                        name: "University of Languages and International Studies (Trường Đại học Ngoại ngữ)",
                        value: "ULIS",
                    },
                    {
                        name: "Hanoi University of Science (Trường Đại học Khoa học Tự nhiên)",
                        value: "HUS",
                    },
                    {
                        name: "University of Social Science and Humanity (Trường Đại học Khoa học Xã hội và Nhân văn)",
                        value: "USSH",
                    },
                    {
                        name: "University of Engineering and Technology (Trường Đại học Công nghệ)",
                        value: "UET",
                    },
                    { name: "School of Law (Khoa Luật)", value: "USL" },
                    { name: "School of Medicine and Pharmacy (Khoa Y Dược)", value: "UMP" },
                    {
                        name: "School of International Studies (Khoa Quốc tế)",
                        value: "UIS",
                    },
                    {
                        name: "School of Interdisciplinary Studies (Khoa các Khoa học liên ngành)",
                        value: "UIS",
                    },
                ],
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "支店名をフリーワードで検索",
                type: "search",
                disabled: true,
                name: "financialLocation",
                placeHolder: "フリーワードで検索できます",
                description: "｢しんじゅく｣や｢しぶや｣などの一単語のみで検索できます",
                data: [
                    {
                        name: "University of Economics and Business (Trường Đại học Kinh tế)",
                        value: "UEB",
                    },
                    {
                        name: "University of Education (Trường Đại Học Giáo Dục)",
                        value: "UED",
                    },
                    {
                        name: "University of Languages and International Studies (Trường Đại học Ngoại ngữ)",
                        value: "ULIS",
                    },
                    {
                        name: "Hanoi University of Science (Trường Đại học Khoa học Tự nhiên)",
                        value: "HUS",
                    },
                    {
                        name: "University of Social Science and Humanity (Trường Đại học Khoa học Xã hội và Nhân văn)",
                        value: "USSH",
                    },
                    {
                        name: "University of Engineering and Technology (Trường Đại học Công nghệ)",
                        value: "UET",
                    },
                    { name: "School of Law (Khoa Luật)", value: "USL" },
                    { name: "School of Medicine and Pharmacy (Khoa Y Dược)", value: "UMP" },
                    {
                        name: "School of International Studies (Khoa Quốc tế)",
                        value: "UIS",
                    },
                    {
                        name: "School of Interdisciplinary Studies (Khoa các Khoa học liên ngành)",
                        value: "UIS",
                    },
                ],
            },
            {
                isRequired: false,
                isInteger: false,
                isEmail: false,
                name: "口座預金科目",
                label: "口座預金科目",
                type: "display",
                text: "普通",
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "口座番号（半角）",
                type: "text",
                name: "口座番号（半角）",
                placeHolder: "テキストテキス",
                description: "",
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "口座名義（カタカナ）",
                type: "text",
                name: "口座名義（カタカナ）",
                placeHolder: "テキストテキス    ",
                description: "本人名義に限ります",
            },
        ]
    }, {
        id: 7,
        title: "在留カード（外国籍の方はご記入ください）",
        desc: "",
        disabled: true,
        form: [
            {
                isRequired: false,
                isInteger: false,
                isEmail: false,
                label: "",
                type: "checkbox",
                name: "foreign",
                placeHolder: "  ",
                description: "",
                value: "外国籍の方はチェックを入れてください"
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "姓（ローマ字）",
                type: "text",
                name: "姓（ローマ字）",
                placeHolder: "入力してください",
                disabled: true
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "名（ローマ字）",
                type: "text",
                name: "名（ローマ字）",
                placeHolder: "入力してください",
                disabled: true
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "姓（カナ）",
                type: "text",
                name: "姓（カナ）",
                placeHolder: "入力してください",
                disabled: true
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "名（カナ）",
                type: "text",
                name: "名（カナ）",
                placeHolder: "入力してください",
                disabled: true
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "姓",
                type: "text",
                name: "姓",
                placeHolder: "入力してください",
                disabled: true
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "国籍",
                type: "select",
                name: "国籍",
                placeHolder: "選択してください",
                description: "",
                disabled: true,
                options: [
                    {
                        id: 1,
                        name: "Viet Nam",
                    },
                    {
                        id: 2,
                        name: "US",
                    },
                    {
                        id: 3,
                        name: "UK",
                    },
                    {
                        id: 4,
                        name: "Canada",
                    },
                ],
            },
            {
                isRequired: false,
                isInteger: false,
                isEmail: false,
                label: "在留資格",
                type: "select",
                name: "在留資格",
                placeHolder: "選択してください",
                description: "",
                disabled: true,
                options: [
                    {
                        id: 1,
                        name: "Option 1",
                    },
                    {
                        id: 2,
                        name: "Option 2",
                    },
                    {
                        id: 3,
                        name: "Option 3",
                    },
                    {
                        id: 4,
                        name: "Option 4",
                    },
                ],
            },
            {
                isRequired: false,
                isInteger: false,
                isEmail: false,
                label: "在留期間（満了日）",
                type: "date",
                name: "在留期間（満了日）",
                placeHolder: "",
                description: "",
                disabled: true
            },
            {
                isRequired: false,
                isInteger: false,
                isEmail: false,
                label: "資格外活動許可",
                type: "select",
                name: "資格外活動許可",
                placeHolder: "選択してください",
                description: "",
                disabled: true,
                options: [
                    {
                        id: 1,
                        name: "Option 1",
                    },
                    {
                        id: 2,
                        name: "Option 2",
                    },
                    {
                        id: 3,
                        name: "Option 3",
                    },
                    {
                        id: 4,
                        name: "Option 4",
                    },
                ],
            },
            {
                isRequired: false,
                isInteger: false,
                isEmail: false,
                label: "就労区分",
                type: "select",
                name: "就労区分",
                placeHolder: "選択してください",
                description: "",
                disabled: true,
                options: [
                    {
                        id: 1,
                        name: "Option 1",
                    },
                    {
                        id: 2,
                        name: "Option 2",
                    },
                    {
                        id: 3,
                        name: "Option 3",
                    },
                    {
                        id: 4,
                        name: "Option 4",
                    },
                ],
            },
            {
                isRequired: true,
                isInteger: false,
                isEmail: false,
                label: "在留カード番号（半角）",
                type: "text",
                name: "在留カード番号（半角）",
                placeHolder: "入力してください",
                disabled: true
            },
            {
                isRequired: false,
                label: "在留カードの写真（表）",
                type: "file",
                name: "在留カードの写真（表）",
                accept: "image/*",
                placeHolder: "",
                description: "カードの表の写真を添付してください。 ",
                disabled: true
            },
            {
                isRequired: false,
                label: "在留カードの写真（裏）",
                type: "file",
                name: "在留カードの写真（裏）",
                accept: "image/*",
                placeHolder: "",
                description: "カードの裏の写真を添付してください。 ",
                disabled: true
            },
        ]
    }
]

export const addEducation = () => {
    data.forEach(element => {
        if (element.name == "education") {
            element.form.push(
                {
                    header: `学歴 ${element.form.length / 6 + 1} `
                },
                {
                    isRequired: true,
                    isInteger: false,
                    isEmail: false,
                    label: "入学年月日",
                    type: "date",
                    name: `admission${element.form.length / 6 + 1}`,
                    placeHolder: "",
                    description: ""
                },
                {
                    isRequired: true,
                    isInteger: false,
                    isEmail: false,
                    label: "卒業年月日",
                    type: "date",
                    name: `graduation${element.form.length / 6 + 1} `,
                    placeHolder: "",
                    description: ""
                },
                {
                    isRequired: true,
                    isInteger: false,
                    isEmail: false,
                    label: "学部名",
                    type: "select",
                    name: `classification${element.form.length / 6 + 1} `,
                    placeHolder: "選択してください",
                    description: "",
                    options: [
                        {
                            id: 1,
                            name: "Primary School",
                        },
                        {
                            id: 2,
                            name: "Junior High School",
                        },
                        {
                            id: 3,
                            name: "High School",
                        },
                        {
                            id: 4,
                            name: "University",
                        },
                        {
                            id: 5,
                            name: "College",
                        },
                        {
                            id: 6,
                            name: "Master's degree",
                        },
                    ],
                },
                {
                    isRequired: true,
                    isInteger: false,
                    isEmail: false,
                    label: "学校名",
                    type: "search",
                    name: `schoolName${element.form.length / 6 + 1} `,
                    placeHolder: "フリーワードで検索できます",
                    description: "",
                    data: [
                        {
                            name: "University of Economics and Business (Trường Đại học Kinh tế)",
                            value: "UEB",
                        },
                        {
                            name: "University of Education (Trường Đại Học Giáo Dục)",
                            value: "UED",
                        },
                        {
                            name: "University of Languages and International Studies (Trường Đại học Ngoại ngữ)",
                            value: "ULIS",
                        },
                        {
                            name: "Hanoi University of Science (Trường Đại học Khoa học Tự nhiên)",
                            value: "HUS",
                        },
                        {
                            name: "University of Social Science and Humanity (Trường Đại học Khoa học Xã hội và Nhân văn)",
                            value: "USSH",
                        },
                        {
                            name: "University of Engineering and Technology (Trường Đại học Công nghệ)",
                            value: "UET",
                        },
                        { name: "School of Law (Khoa Luật)", value: "USL" },
                        { name: "School of Medicine and Pharmacy (Khoa Y Dược)", value: "UMP" },
                        {
                            name: "School of International Studies (Khoa Quốc tế)",
                            value: "UIS",
                        },
                        {
                            name: "School of Interdisciplinary Studies (Khoa các Khoa học liên ngành)",
                            value: "UIS",
                        },
                    ],
                },
                {
                    isRequired: false,
                    isInteger: false,
                    isEmail: false,
                    label: "学部名",
                    type: "text",
                    name: `faculty${element.form.length / 6 + 1} `,
                    placeHolder: "入力してください",
                    description: ""
                },
            )
        }
    });
}
export const showFinancial = (value) => {
    data.forEach(element => {
        element.form.forEach(item => {
            if (item.name == "financialLocation") {
                if (value.financial != undefined && value.financial != null && value.financial != "") {
                    item.disabled = false;
                }
                else {
                    item.disabled = true;
                }
            }

        })
    })
}
export const showForeign = (value) => {
    data.forEach((item) => {
        if (value.foreign === true) {
            if (item.id === 7) {
                item.disabled = false
                item.form.forEach(element => {
                    element.disabled = false;
                })
            }
        }
        else {
            if (item.id === 7) {
                item.disabled = true
                item.form.forEach(element => {
                    element.disabled = true;
                })
            }

        }
    })

}

