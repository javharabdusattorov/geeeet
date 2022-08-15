import './App.css';
import './bootstrap.css';

import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='App'>
        <Home/>
    </div>
  );
}

export default App;



/*    npx create-react-app react-amaliyot
      cd react-amaliyot
      npm start

    --Node.js __ Javascript kodlarimizni browserdan tashqarida ishlatishga imkon
        beruvchi environment

    --npm __ Node Package Maneger
        Node.js ga kiritilgan paketlar manegeri

        Umuman olganda, paket bizning ilovamizga ba'zi function'larni qo'shishga 
        yordam beradigan bitta fayl yoki ko'p kodli fayllardan iborat bo'lgan va hamma uchun ochiq bo'lgan kodlar to'plami. 

    --SPA __ Single-page aplication
        Bir sahifali app (SPA) bu WEB-brauzerning yangi sahifali yuklashning odatiy usuli o'rniga, joriy WEB-sahifali WEB-serverdan yangi ma'lumotlar bilan dinamik ravishda qayta 
        yozish orqali foydalanuvchi bilan o'zaro aloqada bo'ladigan WEB-app yoki WEB-site.
        
    SPA frameworks examples: React, Angular, Vue, Svelte
    
    WHY React?
    React - bu foydalanuvchi interfeyslarini yasash uchun Javascript kutubxonasi, React yangicha tildan foydalanadi unda HTML va Javascript tillarini aralashtirib yozish mumkin.

    React projects examples: Facebook.com, Instagram.com

    jsx - bu HTML va Javascript tillarini qo'shib ishlatish.

    ---- class -> className
    ---- for -> htmlFor
    ---- stroke-width -> strokeWidth

    Projeactimizni ochib olganimizdan keyin uni o'rganib chiqamiz. 
        node_modules - bizga projectimizda qo'shimcha function'larni berishda va ularni ishlatishda yordam beradi. Uni xajmi ko'p ammo bunga tegmaslik kerak!
        
        public - bu papka bizga hamma yozgan kodlarimizni shu joyga yigib beradi. Bunga ham teglaslik kerak! Site'da bu hamma kodlar faqat shu yerda turganday ko'rinadi. Ya'ni faqat shu yerni push qiladi.

        src - bu papkda biz projectimizni tuzamiz. Unda biz fonts'larni, img'larni va har bir site'dagi qismlarni alohida yozamiz. 
        Har bir joy(header, footer) uchun components papkasini ochib olamiz va uning ichiga ham papkalar bilan murojaat qilamiz. Undan tashqari App.js, App.css, index.js va index.css papkalari bor. App.js papkasi bizga aynan shu yerdagi alohida-alohida yozgan kodlarimizni shu yerda ishlatib turish uchun xizmat qiladi. Default xolda u yerda content bo'ladi. Uni o'chirish kerak, ammo hammasini emas: App function'i, uni return qismida App className'lik div va function'dan tashqarida uni export default App qismi ham qolishi kerak.
    
  components      
    Header
      Header.jsx
      Header.css
    Footer
      Footer.jsx
      Footer.css  

    ...va ularga content ni yozamiz: Footer 

      function Footer() {
        return <div>
            Footer
        </div>
      }
    export default Footer
    export qilishni yana bir yo'li bor default xolatida emas object ko'rinishida ya'ni export { Footer } va uni chaqirib olishda ham shunday import { Footer } from ..... va buni qoidasi export qilishda va chaqirishda bir xil nom berish kerak!!! 1-yo'l bilan qilishda xohlaganday nom bersa bo'lasi masalan:
        export default Header
        import H from ..... 
    Agar Footer componenti 2ta bo'lsa " as " qo'shimchasidan foydalanamiz. 
        import { Footer as F } from ..... va pasda ham F bilan ishlatamiz  
    
    ...uni asosiy componentga ulash uchun export default kodidan foydalanamiz. Bu footer'ni tashqariga chiqarish aks xolda tashqaridan ko'rinmaydi ya'ni footer'ni chaqirib olib ishlatib bo'maydi. Faylni ichida yopiq xolda turadi. Bunda faqat footer'ni olish mumkin undan boshqasini emas!
    
    Endi uni olmoqchi bo'lgan joyga(asosiy App.js) import qilamiz.
      import Footer from './components/Footer/Footer'; 
      oxirgi Footer - bu Footer.jsx yoki Footer.js(undan boshqa extension'larda yoziladi), uni osson qilib Footer deb yozib qoyiladi.

    va kerakli joyda ishlatamiz. Ya'ni App className'ga aga bo'lgan div'ni ichida
        <Footer /> Componentlar ishlatishda Angle breaks( </> ) dan foydalanamiz. Chunki u doim yopiq xolda turishi kerak.
        Footer'ni o'ziga uni css componentini ulash uchun Footer.jsx ga...
        import './Footer.css' yozish kerak, bunda from ishlatilmagan!!!
    
    Agar bizga hamma componentlar bir joyga tushgan App div kerak bo'lmay qolsa biz fragment'lardan foydalanamiz. Ya'ni osha divni class'ini ham tag name'ini ham olib tashlaymiz <>  Header, Footer  </> lekin hammasini olib bo'lmaydi!!! 


    Componentlarimizga img va fonts larni qo'shish.
    src papkasining ichidan assets papkasini ochib olamiz va uning ichiga fonts va img papkalarini ham birdan ochib olamiz. Loader qilish maqsadida yangi Loader componenti va uning Loader.jsx component ochib olamiz. svg ko'rinishidagi loader yuklab olamiz va uni asosiy App componentiga ulab qo'yamiz. loader function'iga img yozamiz va uni src qismiga shundoqqina yozb ketaolmaymiz. Avval rasmni import qilib olamiz xuddi o'zgaruvchidek.
    import LoaderSvg from '../../assets/img/img.svg'; va img'ning src qismiga {LoaderSvg} deb yozamiz va img tayyor. Faqat qo'shtirnoqlarsiz.
*/