import * as React from "react";
import { render } from "react-dom";
import "./style.css";
import { CloudinaryImage } from "@cloudinary/url-gen";
import {
	AdvancedImage,
	lazyload,
	responsive,
	accessibility,
	placeholder
} from "@cloudinary/react";

/**
 * This sample React project showcases how to use
 * @cloudinary/url-gen along with our React SDK to render CloudinaryImage.
 *
 * In addition, we showcase how to use our advanced features
 * in the form of plugins. For more information on the SDK and
 * plugins, see https://cloudinary.com/documentation/sdks/js/frontend-frameworks/ReactSDK
 *
 * Note: The following order or plugins should be used:
 <AdvancedImage plugins={[lazyload(), responsive(), accessibility(), placeholder()]}/>  
 */

const cloudinaryImage = new CloudinaryImage("sample", { cloudName: "demo" });
const brownSheep = new CloudinaryImage("brown_sheep", { cloudName: "demo" });
const woman = new CloudinaryImage("woman", { cloudName: "demo" });
const cat = new CloudinaryImage("fat_cat", { cloudName: "demo" });
const largeImage = new CloudinaryImage("oil", {
	cloudName: "rcstraus"
});

class App extends React.Component {
	render() {
		return (
			<div>
				<h2>Render a cloudinary image</h2>
				<AdvancedImage cldImg={cloudinaryImage} />
				<div style={{ height: "20px" }}></div>
				<h2>Cloudinary image with default accessibility</h2>
				<AdvancedImage cldImg={cloudinaryImage} plugins={[accessibility()]} />
				<div style={{ height: "20px" }}></div>
				<h2>Cloudinary image with colorblind accessibility</h2>
				<AdvancedImage
					cldImg={cloudinaryImage}
					plugins={[accessibility("colorblind")]}
				/>
				<h2>Cloudinary image with responsive</h2>
				<div>Resize window to see changes (100 is the step size in px)</div>
				<AdvancedImage cldImg={cloudinaryImage} plugins={[responsive(100)]} />
				<h2>Scroll down to see images lazyload</h2>
				<div style={{ height: "700px" }}>
					You can open your network tab to see the images loading
				</div>
				<AdvancedImage cldImg={brownSheep} plugins={[lazyload()]} />
				<div style={{ height: "400px" }} />
				<AdvancedImage cldImg={woman} plugins={[lazyload()]} />
				<div style={{ height: "400px" }} />
				<AdvancedImage cldImg={cat} plugins={[lazyload()]} />
				<div style={{ height: "50px" }} />
				<div style={{ height: "700px" }}>
					Scroll down for lazyloading a large image with a placeholder
				</div>
				<AdvancedImage
					cldImg={largeImage}
					plugins={[lazyload(), placeholder()]}
				/>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));
