import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SingleProductPage from '../../../Pages/SingleProduct/SingleProductPage';
import { allComponentHide, HideMenuFN, selectClicks, ShowHideMenuFN, ShowHideOverlayFN, ShowHideSettingsBoxFN } from '../../../Redux/Slices/clickSlice';
import { logout } from '../../../Redux/Slices/userSlice';


function Element({className}) {
    const dispatch=useDispatch();
    const clicks=useSelector(selectClicks);


    const handleOverlay=(e)=>{
        console.log(e.target.classList[2]);
        console.log(e.target.classList[0]);
        console.log(e.target.classList);

        if('content'==e.target.classList[0] || e.target.classList[2]=='overlay'){
            console.log(`~~~~~~~~`);
            dispatch(ShowHideMenuFN());
            dispatch(allComponentHide());
        }
    }

    return (   
        <DIV className="overlay" onClick={handleOverlay}>
            <div className="content">

           {clicks.showMenu && (<div className="menu-box" >
                <div className="menu-box-wrapper">
                    <p className="menu-item" onClick={()=>dispatch(ShowHideSettingsBoxFN())}>

                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={40} height={42} viewBox="0 0 40 42" fill="none">
                            <path d="M38.5437 26.1075L35.6013 23.5919C35.7406 22.7384 35.8125 21.8669 35.8125 20.9954C35.8125 20.1239 35.7406 19.2524 35.6013 18.3989L38.5437 15.8833C38.7656 15.6933 38.9245 15.4403 38.9991 15.1578C39.0737 14.8754 39.0606 14.5769 38.9615 14.3021L38.9211 14.1853C38.111 11.9213 36.8981 9.8226 35.3408 7.99053L35.2599 7.89619C35.071 7.67406 34.8192 7.51439 34.5378 7.4382C34.2563 7.36202 33.9583 7.37291 33.6832 7.46943L30.031 8.76768C28.6834 7.6626 27.1785 6.79111 25.5523 6.18018L24.847 2.36182C24.7938 2.07451 24.6545 1.81019 24.4474 1.60397C24.2404 1.39776 23.9756 1.25942 23.688 1.20732L23.5668 1.18486C21.2263 0.762598 18.7646 0.762598 16.4242 1.18486L16.3029 1.20732C16.0154 1.25942 15.7505 1.39776 15.5435 1.60397C15.3365 1.81019 15.1971 2.07451 15.1439 2.36182L14.4341 6.19815C12.8209 6.80921 11.3187 7.68023 9.98688 8.77666L6.30777 7.46943C6.0327 7.37214 5.73453 7.36086 5.45289 7.43709C5.17125 7.51332 4.91947 7.67344 4.73102 7.89619L4.65016 7.99053C3.09472 9.8239 1.88196 11.9223 1.06988 14.1853L1.02945 14.3021C0.827304 14.8636 0.993515 15.4925 1.44723 15.8833L4.42555 18.4259C4.28629 19.2704 4.21891 20.1329 4.21891 20.9909C4.21891 21.8534 4.28629 22.7159 4.42555 23.556L1.44723 26.0985C1.22529 26.2885 1.06645 26.5416 0.991826 26.824C0.917199 27.1065 0.930323 27.405 1.02945 27.6798L1.06988 27.7966C1.88297 30.0606 3.08687 32.1495 4.65016 33.9913L4.73102 34.0857C4.91993 34.3078 5.17172 34.4675 5.45319 34.5436C5.73466 34.6198 6.03261 34.6089 6.30777 34.5124L9.98688 33.2052C11.3255 34.3058 12.8214 35.1772 14.4341 35.7837L15.1439 39.62C15.1971 39.9073 15.3365 40.1717 15.5435 40.3779C15.7505 40.5841 16.0154 40.7224 16.3029 40.7745L16.4242 40.797C18.7861 41.2215 21.2048 41.2215 23.5668 40.797L23.688 40.7745C23.9756 40.7224 24.2404 40.5841 24.4474 40.3779C24.6545 40.1717 24.7938 39.9073 24.847 39.62L25.5523 35.8017C27.1778 35.1923 28.6912 34.318 30.031 33.2142L33.6832 34.5124C33.9582 34.6097 34.2564 34.621 34.5381 34.5448C34.8197 34.4685 35.0715 34.3084 35.2599 34.0857L35.3408 33.9913C36.9041 32.145 38.108 30.0606 38.9211 27.7966L38.9615 27.6798C39.1636 27.1273 38.9974 26.4983 38.5437 26.1075ZM32.4119 18.929C32.5242 19.6073 32.5826 20.3036 32.5826 20.9999C32.5826 21.6962 32.5242 22.3925 32.4119 23.0708L32.1154 24.8722L35.4711 27.7427C34.9623 28.9146 34.3202 30.0241 33.5574 31.0489L29.3886 29.571L27.9781 30.73C26.9045 31.6105 25.7095 32.3023 24.4158 32.7874L22.7043 33.4298L21.9002 37.7872C20.6314 37.931 19.3505 37.931 18.0818 37.7872L17.2777 33.4208L15.5796 32.7694C14.2994 32.2843 13.1089 31.5925 12.0443 30.7165L10.6338 29.553L6.43805 31.0444C5.67438 30.0157 5.03648 28.9062 4.52437 27.7382L7.91598 24.8407L7.62399 23.0439C7.51617 22.3745 7.45777 21.6827 7.45777 20.9999C7.45777 20.3126 7.51168 19.6253 7.62399 18.956L7.91598 17.1591L4.52437 14.2616C5.03199 13.0892 5.67438 11.9841 6.43805 10.9554L10.6338 12.4468L12.0443 11.2833C13.1089 10.4073 14.2994 9.71553 15.5796 9.23037L17.2822 8.58799L18.0863 4.22158C19.3486 4.07783 20.6379 4.07783 21.9047 4.22158L22.7088 8.579L24.4203 9.22139C25.7095 9.70654 26.9089 10.3983 27.9826 11.2788L29.3931 12.4378L33.5619 10.9599C34.3256 11.9886 34.9634 13.0981 35.4756 14.2661L32.1199 17.1366L32.4119 18.929ZM20 12.6444C15.6336 12.6444 12.0937 16.1843 12.0937 20.5507C12.0937 24.9171 15.6336 28.4569 20 28.4569C24.3664 28.4569 27.9062 24.9171 27.9062 20.5507C27.9062 16.1843 24.3664 12.6444 20 12.6444ZM23.5578 24.1085C23.0911 24.5765 22.5366 24.9476 21.926 25.2005C21.3154 25.4533 20.6608 25.583 20 25.5819C18.6568 25.5819 17.3945 25.0564 16.4421 24.1085C15.9742 23.6419 15.6031 23.0873 15.3502 22.4767C15.0973 21.8661 14.9677 21.2116 14.9687 20.5507C14.9687 19.2075 15.4943 17.9452 16.4421 16.9929C17.3945 16.0405 18.6568 15.5194 20 15.5194C21.3431 15.5194 22.6054 16.0405 23.5578 16.9929C24.0258 17.4595 24.3969 18.0141 24.6497 18.6247C24.9026 19.2353 25.0322 19.8898 25.0312 20.5507C25.0312 21.8939 24.5056 23.1562 23.5578 24.1085Z" fill="black" />
                        </svg>
                        <p className="text">Settings </p>   

                        </p>

                    <p>
                    <svg className="icon"  xmlns="http://www.w3.org/2000/svg" className="icon" width={36} height={36} viewBox="0 0 36 36" fill="none" > <path d="M24 4.5H1.5V24H24V4.5Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> <path d="M24 12H30L34.5 16.5V24H24V12Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> <path d="M8.25 31.5C10.3211 31.5 12 29.8211 12 27.75C12 25.6789 10.3211 24 8.25 24C6.17893 24 4.5 25.6789 4.5 27.75C4.5 29.8211 6.17893 31.5 8.25 31.5Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> <path d="M27.75 31.5C29.8211 31.5 31.5 29.8211 31.5 27.75C31.5 25.6789 29.8211 24 27.75 24C25.6789 24 24 25.6789 24 27.75C24 29.8211 25.6789 31.5 27.75 31.5Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </svg> 
                        <p className="text">become a seller </p>   

                    </p>

                    <p>

                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={45}
                                        height={40}
                                        viewBox="0 0 45 40"
                                        fill="none"
                                        className="icon"
                                        >
                                        <path
                                            d="M11.6541 1C5.7709 1 1 5.72189 1 11.5476C1 16.2503 2.86447 27.4115 21.2172 38.6942C21.5459 38.8942 21.9234 39 22.3082 39C22.693 39 23.0704 38.8942 23.3992 38.6942C41.7519 27.4115 43.6164 16.2503 43.6164 11.5476C43.6164 5.72189 38.8455 1 32.9623 1C27.0791 1 22.3082 7.39246 22.3082 7.39246C22.3082 7.39246 17.5373 1 11.6541 1Z"
                                            stroke="black"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        </svg>
                        {/* <svg className="icon"  xmlns="http://www.w3.org/2000/svg" width={45} height={40} viewBox="0 0 45 40" fill="none" > <path d="M11.6541 1C5.7709 1 1 5.72189 1 11.5476C1 16.2503 2.86447 27.4115 21.2172 38.6942C21.5459 38.8942 21.9234 39 22.3082 39C22.693 39 23.0704 38.8942 23.3992 38.6942C41.7519 27.4115 43.6164 16.2503 43.6164 11.5476C43.6164 5.72189 38.8455 1 32.9623 1C27.0791 1 22.3082 7.39246 22.3082 7.39246C22.3082 7.39246 17.5373 1 11.6541 1Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </svg> */}
                        <Link to="/wishlist" className="a"><p className="text">Wishlists </p>   </Link>

                    </p>

                    <p>

                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={34} height={34} viewBox="0 0 34 34" fill="none" > <path d="M17 0C16.3064 0 15.6411 0.275549 15.1507 0.766029C14.6602 1.25651 14.3846 1.92174 14.3846 2.61538V15.6923C14.3846 16.386 14.6602 17.0512 15.1507 17.5417C15.6411 18.0321 16.3064 18.3077 17 18.3077C17.6937 18.3077 18.3589 18.0321 18.8494 17.5417C19.3398 17.0512 19.6154 16.386 19.6154 15.6923V2.61538C19.6154 1.92174 19.3398 1.25651 18.8494 0.766029C18.3589 0.275549 17.6937 0 17 0V0ZM7.64217 3.39215C7.2649 3.43981 6.90961 3.5961 6.61955 3.842C4.63069 5.40991 3.02367 7.40882 1.91961 9.68806C0.815554 11.9673 0.243258 14.4674 0.245858 17C0.245858 26.2297 7.76771 33.7555 17 33.7555C26.2323 33.7555 33.7555 26.2297 33.7555 17C33.7555 11.6738 31.2682 6.90854 27.3805 3.84069C26.974 3.51555 26.455 3.36519 25.9377 3.4227C25.4203 3.48021 24.947 3.74087 24.6219 4.14735C24.2968 4.55382 24.1464 5.07281 24.2039 5.59015C24.2614 6.10748 24.5221 6.58078 24.9286 6.90592C26.4578 8.10649 27.694 9.63913 28.5436 11.3879C29.3932 13.1367 29.8339 15.0558 29.8324 17C29.8365 18.6863 29.5074 20.3569 28.864 21.9156C28.2206 23.4744 27.2755 24.8907 26.0831 26.0831C24.8907 27.2755 23.4744 28.2206 21.9156 28.864C20.3569 29.5074 18.6863 29.8365 17 29.8324C15.3137 29.8365 13.6431 29.5074 12.0844 28.864C10.5256 28.2206 9.10934 27.2755 7.91692 26.0831C6.72449 24.8907 5.77943 23.4744 5.136 21.9156C4.49258 20.3569 4.16349 18.6863 4.16763 17C4.16763 12.8965 6.09124 9.25846 9.07147 6.90592C9.41778 6.64581 9.66826 6.27838 9.78384 5.86097C9.89942 5.44356 9.8736 4.99963 9.7104 4.59844C9.5472 4.19724 9.25581 3.86134 8.88168 3.64313C8.50755 3.42492 8.07172 3.33667 7.64217 3.39215Z" fill="black" /> </svg>
                        <p className="text" onClick={()=>dispatch(logout())}>Log Out </p>   

                    </p>
                </div>
            </div>)}
          
           {clicks.showSettingMenu  && ( <div className="settings-box">
                <div className="settings-box-wrapper">

                <div className="title">
                        <p onClick={()=> dispatch(HideMenuFN())}>back</p>
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={40} height={42} viewBox="0 0 40 42" fill="none">
                                    <path d="M38.5437 26.1075L35.6013 23.5919C35.7406 22.7384 35.8125 21.8669 35.8125 20.9954C35.8125 20.1239 35.7406 19.2524 35.6013 18.3989L38.5437 15.8833C38.7656 15.6933 38.9245 15.4403 38.9991 15.1578C39.0737 14.8754 39.0606 14.5769 38.9615 14.3021L38.9211 14.1853C38.111 11.9213 36.8981 9.8226 35.3408 7.99053L35.2599 7.89619C35.071 7.67406 34.8192 7.51439 34.5378 7.4382C34.2563 7.36202 33.9583 7.37291 33.6832 7.46943L30.031 8.76768C28.6834 7.6626 27.1785 6.79111 25.5523 6.18018L24.847 2.36182C24.7938 2.07451 24.6545 1.81019 24.4474 1.60397C24.2404 1.39776 23.9756 1.25942 23.688 1.20732L23.5668 1.18486C21.2263 0.762598 18.7646 0.762598 16.4242 1.18486L16.3029 1.20732C16.0154 1.25942 15.7505 1.39776 15.5435 1.60397C15.3365 1.81019 15.1971 2.07451 15.1439 2.36182L14.4341 6.19815C12.8209 6.80921 11.3187 7.68023 9.98688 8.77666L6.30777 7.46943C6.0327 7.37214 5.73453 7.36086 5.45289 7.43709C5.17125 7.51332 4.91947 7.67344 4.73102 7.89619L4.65016 7.99053C3.09472 9.8239 1.88196 11.9223 1.06988 14.1853L1.02945 14.3021C0.827304 14.8636 0.993515 15.4925 1.44723 15.8833L4.42555 18.4259C4.28629 19.2704 4.21891 20.1329 4.21891 20.9909C4.21891 21.8534 4.28629 22.7159 4.42555 23.556L1.44723 26.0985C1.22529 26.2885 1.06645 26.5416 0.991826 26.824C0.917199 27.1065 0.930323 27.405 1.02945 27.6798L1.06988 27.7966C1.88297 30.0606 3.08687 32.1495 4.65016 33.9913L4.73102 34.0857C4.91993 34.3078 5.17172 34.4675 5.45319 34.5436C5.73466 34.6198 6.03261 34.6089 6.30777 34.5124L9.98688 33.2052C11.3255 34.3058 12.8214 35.1772 14.4341 35.7837L15.1439 39.62C15.1971 39.9073 15.3365 40.1717 15.5435 40.3779C15.7505 40.5841 16.0154 40.7224 16.3029 40.7745L16.4242 40.797C18.7861 41.2215 21.2048 41.2215 23.5668 40.797L23.688 40.7745C23.9756 40.7224 24.2404 40.5841 24.4474 40.3779C24.6545 40.1717 24.7938 39.9073 24.847 39.62L25.5523 35.8017C27.1778 35.1923 28.6912 34.318 30.031 33.2142L33.6832 34.5124C33.9582 34.6097 34.2564 34.621 34.5381 34.5448C34.8197 34.4685 35.0715 34.3084 35.2599 34.0857L35.3408 33.9913C36.9041 32.145 38.108 30.0606 38.9211 27.7966L38.9615 27.6798C39.1636 27.1273 38.9974 26.4983 38.5437 26.1075ZM32.4119 18.929C32.5242 19.6073 32.5826 20.3036 32.5826 20.9999C32.5826 21.6962 32.5242 22.3925 32.4119 23.0708L32.1154 24.8722L35.4711 27.7427C34.9623 28.9146 34.3202 30.0241 33.5574 31.0489L29.3886 29.571L27.9781 30.73C26.9045 31.6105 25.7095 32.3023 24.4158 32.7874L22.7043 33.4298L21.9002 37.7872C20.6314 37.931 19.3505 37.931 18.0818 37.7872L17.2777 33.4208L15.5796 32.7694C14.2994 32.2843 13.1089 31.5925 12.0443 30.7165L10.6338 29.553L6.43805 31.0444C5.67438 30.0157 5.03648 28.9062 4.52437 27.7382L7.91598 24.8407L7.62399 23.0439C7.51617 22.3745 7.45777 21.6827 7.45777 20.9999C7.45777 20.3126 7.51168 19.6253 7.62399 18.956L7.91598 17.1591L4.52437 14.2616C5.03199 13.0892 5.67438 11.9841 6.43805 10.9554L10.6338 12.4468L12.0443 11.2833C13.1089 10.4073 14.2994 9.71553 15.5796 9.23037L17.2822 8.58799L18.0863 4.22158C19.3486 4.07783 20.6379 4.07783 21.9047 4.22158L22.7088 8.579L24.4203 9.22139C25.7095 9.70654 26.9089 10.3983 27.9826 11.2788L29.3931 12.4378L33.5619 10.9599C34.3256 11.9886 34.9634 13.0981 35.4756 14.2661L32.1199 17.1366L32.4119 18.929ZM20 12.6444C15.6336 12.6444 12.0937 16.1843 12.0937 20.5507C12.0937 24.9171 15.6336 28.4569 20 28.4569C24.3664 28.4569 27.9062 24.9171 27.9062 20.5507C27.9062 16.1843 24.3664 12.6444 20 12.6444ZM23.5578 24.1085C23.0911 24.5765 22.5366 24.9476 21.926 25.2005C21.3154 25.4533 20.6608 25.583 20 25.5819C18.6568 25.5819 17.3945 25.0564 16.4421 24.1085C15.9742 23.6419 15.6031 23.0873 15.3502 22.4767C15.0973 21.8661 14.9677 21.2116 14.9687 20.5507C14.9687 19.2075 15.4943 17.9452 16.4421 16.9929C17.3945 16.0405 18.6568 15.5194 20 15.5194C21.3431 15.5194 22.6054 16.0405 23.5578 16.9929C24.0258 17.4595 24.3969 18.0141 24.6497 18.6247C24.9026 19.2353 25.0322 19.8898 25.0312 20.5507C25.0312 21.8939 24.5056 23.1562 23.5578 24.1085Z" fill="black" />
                        </svg>
                        <span>Setting</span>
                </div>
                <div className="theme">
                    <div className="title" color="red">Theme</div>
                    <div className="colors">
                        <div className="red theme-color--1 select-border" ></div>
                        <div className="dark-blue  theme-color--2"></div>
                        <div className="light-blue theme-color--3"></div>
                        <div className="orange theme-color--4"></div>
                    </div>
                </div>
                </div>
            </div>)}



            {clicks.showSinglePageComponent &&<SingleProductPage className="SingleProductPage" removeMarginTop={"remove-margin-top"}/>}
        </div>
        </DIV>
        )
}


const DIV=styled.div`     
    background: yellow;   
    background:var(--color-overlay);
    margin-top: 60px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;  
    z-index: 2000;

         .content{

            .icon{ 
                width: 44px;
                height: 21px;

                /***** */
                        /* margin-right: 10px;   */
                        /* padding: 5px;  */
                /***** */
                cursor: pointer;
                border-radius: 20px; 
                box-sizing:content-box; 
                display: flex;
                align-items: center;
                justify-content: space-between; 
                /* background: red;     */
                
                
                    &:hover{
                        background: var(--icon-hover-color);     
                    }
            }

             /* background: blue; */
             .menu-box{
                 background: green;
                 background: var(--color-white); 
                 width: 15%;   
                 margin-left:auto;  
                 .menu-box-wrapper{
                     /* min-width: 10%;    */
                     /* min-width: 100px;   */
                     /* margin: 0 auto;  */

                     p{
                         
                        display: flex;
                        align-items: center;  
                        cursor: pointer;

                        &:hover{
                                        background: var(--icon-hover-color);     
                        }

                         .text{
                            font-size: 18rem;
                         }
                         .icon{ 
                                width: 44px;
                                height: 21px;
                                margin-right: 10px;  
                                cursor: pointer;
                                border-radius: 20px; 
                                padding: 5px; 
                                box-sizing:content-box; 
                                display: flex;
                                align-items: center;
                                justify-content: space-between; 
                                /* background: red;     */
                                
                                
                                    &:hover{
                                        background: var(--icon-hover-color);     
                                    }
                        }
                     }
                }
            }

             .settings-box{
                 background: green;
                 background: var(--color-white); 
                 width: 15%;   
                 margin-left:auto;  

                 .settings-box-wrapper{ 
                     width: 87%;
                     margin:16px auto; 
                    .title{
                        display: flex; 
                        align-items: center; 
                        margin-bottom: 10px;

                        svg{
                            margin-right: 0; 
                            height: 27rem;
                            width: 35rem;
                        }

                        span{
                            font-size: 23rem;
                            font-weight: bold;
                        }
                    }
                    .theme{
                        .title{
                            font-size: 22rem;  
                        }

                        .colors{
                            display: flex;
                            justify-content: space-between;
                            &>*{
                                /* background-color: red; */
                                /* background-color: ${props => props.color}; */
                                width:30px;
                                height: 30px;
                                border-radius: 20px; 
                            }

                            .theme-color{
                                &--1{
                                    background-color: red; 
                                }
                                &--2{
                                    background-color: #0843DC;  
                                }
                                &--3{
                                    background-color: #25E8D0;  
                                }
                                &--4{
                                    background-color: #FE7614;  
                                }
                            }

                            .select-border{
                                     border: 3px solid #000;
                            }
                        }
                    }
                }
            }

            .SingleProductPage{
                /* margin-top: 90px;   */
                width: 80%;
                margin:0 auto; 
                margin-top: 90px;   
                
            }

            .remove-margin-top{
                margin-top: 0;
            }
         }
     

`;      


export default Element;
