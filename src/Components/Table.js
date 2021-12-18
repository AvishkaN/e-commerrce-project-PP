import React from 'react'
import styled from 'styled-components';

function Comp({className}) {
    return (
        <DIV className={`${className} `}>
            
            <table id="specs-table">

                <tr>
                        <td>NETWORK</td>
                        <td>Technology	</td>
                        <td>GSM / HSPA / LTE</td>
                </tr>

                <tr>
                        <td></td>
                        <td>2G bands</td>
                        <td>GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)</td>
                </tr>

                <tr>
                    <td></td>
                    <td>3G bands</td>
                    <td>HSDPA 850 / 900 / 2100</td>
                </tr>
                <tr>
                    <td></td>
                    <td>4G bands</td>
                    <td>1, 3, 5, 7, 8, 20, 28, 38, 40, 41</td>
                </tr>

                <tr>
                    <td></td>
                    <td>Speed</td>
                    <td>HSPA 42.2/5.76 Mbps, LTE Cat4 150/50 Mbps</td>
                </tr>

              
                <tr>
                        <td>LAUNCH</td>
                        <td>Announced	</td>
                        <td>2021, February 02</td>
                </tr>

                <tr>
                        <td></td>
                        <td>Status</td>
                        <td>Available. Released 2021, February 09</td>
                </tr>

                <tr>
                        <td>BODY</td>
                        <td>Dimensions	</td>
                        <td>164 x 75.9 x 9.1 mm (6.46 x 2.99 x 0.36 in)</td>
                </tr>

                <tr>
                        <td></td>
                        <td>Weight</td>
                        <td>	206 g (7.27 oz)</td>
                </tr>
                <tr>
                        <td></td>
                        <td>Build</td>
                        <td>Glass front, plastic back, plastic frame</td>
                </tr>
                <tr>
                        <td></td>
                        <td>SIM</td>
                        <td>Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by)</td>
                </tr>
                <tr>
                        <td>DISPLAY	</td>
                        <td>Type	</td>
                        <td>	PLS IPS</td>
                </tr>

                <tr>
                        <td></td>
                        <td>Size</td>
                        <td>	6.5 inches, 102.0 cm2 (~81.9% screen-to-body ratio)</td>
                </tr>
                <tr>
                        <td></td>
                        <td>Resolution</td>
                        <td>720 x 1600 pixels, 20:9 ratio (~270 ppi density)</td>
                </tr>
                <tr>
                        <td>PLATFORM	</td>
                        <td>	OS	</td>
                        <td>Android 10, One UI 2.0</td>
                </tr>

                <tr>
                        <td></td>
                        <td>Chipset</td>
                        <td>Mediatek MT6739W (28 nm)</td>
                </tr>
                <tr>
                        <td></td>
                        <td>CPU</td>
                        <td>Quad-core 1.5 GHz Cortex-A53</td>
                </tr>
                <tr>
                        <td></td>
                        <td>GPU</td>
                        <td>PowerVR GE8100</td>
                </tr>
                <tr>
                        <td>MEMORY	</td>
                        <td>	Card slot	</td>
                        <td>microSDXC (dedicated slot)</td>
                </tr>

                <tr>
                        <td></td>
                        <td>Internal</td>
                        <td>32GB 2GB RAM</td>
                </tr>
                <tr>
                        <td></td>
                        <td></td>
                        <td>eMMC 5.1</td>
                </tr>

  
                
              


            </table>
        </DIV>
    )
}

const DIV=styled.div`
      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
	   }


       #specs-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#specs-table td, #specs-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#specs-table tr:nth-child(even){background-color: #f2f2f2;}

#specs-table tr:hover {background-color: #ddd;}

#specs-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
`;



export default Comp;
