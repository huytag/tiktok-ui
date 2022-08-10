import Header from '../components/Header';

function HeaderOnyLayout({ children }) {
   return (
      <div>
         <Header />
         <div className="container">
            <div className="content">{children}</div>
         </div>
      </div>
   );
}

export default HeaderOnyLayout;
