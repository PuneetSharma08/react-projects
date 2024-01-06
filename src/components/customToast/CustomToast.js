import React, { useEffect, useState } from "react";

function CustomToast({ message, position, showToast }) {
	const [visible, setVisible] = useState(false);

	const toastHandleClose = () => {
		setVisible(false);
	};

	useEffect(() => {
		if (showToast) {
			setVisible(true);
			setTimeout(() => {
				setVisible(false);
			}, 3000);
		}
	}, [showToast]);

	return (
		<>
			{visible && (
				<div
					className={`d-flex align-items-center justify-content-between ${position} toastModule`}>
					<div className="toastContent">{message}</div>
					<div className="toastCloseIcon" onClick={toastHandleClose}>
						X
					</div>
				</div>
			)}
		</>
	);
}

export default CustomToast;
