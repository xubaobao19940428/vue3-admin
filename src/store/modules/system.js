/**
 *  项目中常用的数据字典
 */
 import { getCountryList, getLanguageList } from '@/api/pb/i18n'

 const system = {
     state: {
         memberLevel: {
             2: 'User',
             3:'Prime',
             4:'pre-prime'
         },
         MeOneMemberLevel: {
             2: '非会员',
             3: '银卡',
             4: '金卡',
             5: '铂金卡',
             9: '经销商卡'
         },
         memberLevelList: [
             {
                 value: null,
                 label: '全部'
             }, {
                 value: 2,
                 label: 'User'
             },
             {
                 value: 3,
                 label: 'Prime'
             },
             {
                 value: 4,
                 label: 'pre-prime'
             },
             // {
             //     value: 4,
             //     label: 'Mestore'
             // },
             // {
             //     value: 4,
             //     label: 'AM'
             // },
             // {
             //     value: 5,
             //     label: 'AT'
             // }
         ],
         countryList: [
             { 'languageInfo': [{ 'code': 'ms', 'name': 'Bahasa Melayu', 'desc': '马来语' }, { 'code': 'en', 'name': 'English', 'desc': '英语' }, { 'code': 'cn', 'name': '简体中文', 'desc': '简体中文' }], 'code': 'MALAYSIA', 'shortCode': 'MY', 'nameCn': '马来西亚', 'nameEn': 'Malaysia', 'nameLocal': '马来西亚', 'areaCode': '6', 'jetLag': '-0.5', 'image': '/upload/picture/2019-11/05/original/18205436068528450174976_original_45x33.jpg', 'currencyCode': 'MYR', 'currencyUnit': 'RM', 'timeZone': 'UTC+8' },
             { 'languageInfo': [{ 'code': 'th', 'name': 'ภาษาไทย', 'desc': '泰语' }, { 'code': 'en', 'name': 'English', 'desc': '英语' }], 'code': 'THAILAND', 'shortCode': 'TH', 'nameCn': '泰国', 'nameEn': 'Thailand', 'nameLocal': '泰国', 'areaCode': '66', 'jetLag': '-1', 'image': '/upload/picture/2019-11/05/original/18205436068622276755456_original_46x36.jpg', 'currencyCode': 'THB', 'currencyUnit': '฿', 'timeZone': 'UTC+7' },
             { 'languageInfo': [{ 'code': 'en', 'name': 'English', 'desc': '英语' }], 'code': 'SINGAPORE', 'shortCode': 'SG', 'nameCn': '新加坡', 'nameEn': 'Singapore', 'nameLocal': '新加坡', 'areaCode': '65', 'jetLag': '+0,3', 'image': '/upload/picture/2019-11/05/original/18205436068744008040448_original_45x33.jpg', 'currencyCode': 'SGD', 'currencyUnit': 'S$', 'timeZone': 'UTC+8' }],
         languageList: [],
         saleCountryList: [],
         salePlatForm: [0],
         classification: ''
     },
     mutations: {
         SET_COUNTRY_LIST: (state, countryList) => {
             state.countryList = countryList
         },
         SET_LANGUAGE_LIST: (state, languageList) => {
             state.languageList = languageList
         },
         SET_SALE_COUNTRY_LIST: (state, countryList) => {
             state.saleCountryList = countryList
         },
         SET_SALE_PLATFORM: (state, data) => {
             state.salePlatForm = data
         },
         SET_CLASSIFICATION: (state, data) => {
             state.classification = data
         }
     },
     actions: {
         // 获取国家数据字典
         getCountryList ({ commit }) {
             let params = {
                 pageSize: 100,
                 pageNum: 1
             }
             getCountryList(params).then((response) => {
                 let res = response
                 if (res.ret.errcode === 1) {
                     commit('SET_COUNTRY_LIST', res.countryInfo)
                 }
             }).catch((err) => {
                 console.error(err)
             })
         },
         getLanguageList ({ commit }) {
             let params = {
                 pageSize: 100,
                 pageNum: 1
             }
             getLanguageList(params).then((response) => {
                 if (response.ret.errcode === 1) {
                     commit('SET_LANGUAGE_LIST', response.languageInfo)
                 }
             }).catch((err) => {
                 console.error(err)
             })
         }
     }
 }
 
 export default system
 