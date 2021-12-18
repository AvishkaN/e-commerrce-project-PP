import {createSlice} from '@reduxjs/toolkit';



export const clickSlice=createSlice({
    name:"clicks",
    initialState:{ 
        showOverlay:false, 
        showMenu:false, 
        showSettingMenu:false, 
        showSinglePageComponent:false, 

    },
    reducers:{

        // ShowHideOverlayFN:(state)=>{   

        //     state.showOverlay=!state.showOverlay; 
        // },

        ShowHideMenuFN:(state)=>{     

            state.showOverlay=!state.showOverlay; 
            state.showMenu=!state.showMenu; 
        },
        HideMenuFN:(state)=>{     

            // state.showOverlay=!state.showOverlay; 
            state.showMenu=!state.showMenu; 
            state.showSettingMenu=!state.showSettingMenu; 

        },
        ShowHideSettingsBoxFN:(state)=>{     

            // state.showOverlay=!state.showOverlay; 
            state.showMenu=!state.showMenu; 
            state.showSettingMenu=!state.showSettingMenu; 
        },
        ShowSinglePageComponent:(state)=>{     

            // state.showOverlay=!state.showOverlay; 
            state.showOverlay=true; 
            state.showSinglePageComponent=true;  
        },

        allComponentHide:(state)=>{
            state.showOverlay=false;
            state.showMenu=false;
            state.showSettingMenu=false;
            state.showSinglePageComponent=false;
        },
    }
});



export const {
                        ShowHideMenuFN,
                        ShowHideSettingsBoxFN,
                        HideMenuFN,
                        ShowSinglePageComponent,
                        allComponentHide} =clickSlice.actions; 

//selectors
export const selectClicks=(state)=>state.clicks;

export default clickSlice.reducer;





