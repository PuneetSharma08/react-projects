import React, { useState } from "react";
import CustomToast from "./CustomToast";

const ToastModule = () => {
	const [showToastTop, setShowToastTop] = useState(false);
	const [showToastBottom, setShowToastBottom] = useState(false);
	const [showToastRight, setShowToastRight] = useState(false);
	const [showToastLeft, setShowToastLeft] = useState(false);

	return (
		<div className="container d-flex flex-column align-items-center justify-content-center vh-100 toastCustom">
			<div className="d-flex justify-content-between mb-3">
				<button
					className="btn btn-primary"
					onClick={() => setShowToastTop(!showToastTop)}>
					Toast Top
				</button>
				<button
					className="btn btn-primary"
					onClick={() => setShowToastBottom(!showToastBottom)}>
					Toast Bottom
				</button>
				<button
					className="btn btn-primary"
					onClick={() => setShowToastRight(!showToastRight)}>
					Toast Right
				</button>
				<button
					className="btn btn-primary"
					onClick={() => setShowToastLeft(!showToastLeft)}>
					Toast Left
				</button>
			</div>

			{/* Toast components */}
			<CustomToast
				message="Toast notification position top"
				showToast={showToastTop}
				position="toastTop"
			/>
			<CustomToast
				message="Toast notification position bottom"
				showToast={showToastBottom}
				position="toastBottom"
			/>
			<CustomToast
				message="Toast notification position Right"
				showToast={showToastRight}
				position="toastRight"
			/>
			<CustomToast
				message="Toast notification position left"
				showToast={showToastLeft}
				position="toastLeft"
			/>
		</div>
	);
};

export default ToastModule;
