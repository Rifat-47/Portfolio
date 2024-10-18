import React, { useState } from "react";
import SocialMedia from "../../social-media/SocialMedia";
import { Typography, Box, Button, Stack } from "@mui/material";
import Typewriter from "typewriter-effect";
import { customStyle } from "./styles";
import { FileDownload, Mail } from "@mui/icons-material";
import useWindowSize from "../../../hook/useWindowSize";
import { RedirectNewPage } from "../../../services/RedirectNewPage";
import { Link as LinkS } from "react-scroll";

const WelcomeText = () => {
	const size = useWindowSize();
	const [downloadCvBtn, setDownloadCvBtn] = useState(false);
	const [contactMeBtn, setDontactMeBtn] = useState(false);

	return (
		<Box sx={{ p: 2 }}>
			<Box sx={customStyle.centerInSM}>
				<Typography
					variant={
						size.width > 768
							? "h2"
							: size.width <= 768 && size.width >= 400
							? "h3"
							: "h4"
					}
				>
					HELLO THERE!{" "}
					<Typography variant="span" sx={customStyle.webEmoji}>
						👋
					</Typography>
				</Typography>

				<Typography
					variant={
						size.width > 768
							? "h4"
							: size.width <= 768 && size.width >= 400
							? "h5"
							: "h6"
					}
					sx={{ display: "flex", flexWrap: "wrap" }}
				>
					I AM &nbsp;
					<Typewriter
						options={{
							strings: [
								"<i>RIFAT IBN TAHER</i>",
								"<i></i>"
							],
							autoStart: true,
							loop: true
						}}
					/>
				</Typography>

				<Box sx={{ my: 5 }}>
					<SocialMedia />
				</Box>
				<Stack direction="row" spacing={3}>
					<Button
						variant="contained"
						size={
							size.width > 768
								? "large"
								: size.width <= 768 && size.width >= 400
								? "medium"
								: "small"
						}
						sx={customStyle.buttonStyle}
						onClick={() =>
							RedirectNewPage(
								"https://drive.google.com/file/d/1eC0PZGtPfquFNydrGy4OaxtPu17jr2L2/view?usp=sharing"
							)
						}
						onMouseOver={() => setDownloadCvBtn(true)}
						onMouseOut={() => setDownloadCvBtn(false)}
					>
						Download CV{" "}
						<FileDownload
							sx={{
								display: downloadCvBtn ? "block" : "none",
								ml: 2
							}}
						/>
					</Button>
					<LinkS
						to="contact"
						spy={true}
						smooth={true}
						style={{ cursor: "pointer" }}
					>
						<Button
							variant="contained"
							size={
								size.width > 768
									? "large"
									: size.width <= 768 && size.width >= 400
									? "medium"
									: "small"
							}
							sx={customStyle.buttonStyle}
							onMouseOver={() => setDontactMeBtn(true)}
							onMouseOut={() => setDontactMeBtn(false)}
						>
							Contact Me{" "}
							<Mail
								sx={{
									display: contactMeBtn ? "block" : "none",
									ml: 2
								}}
							/>
						</Button>
					</LinkS>
				</Stack>
			</Box>
		</Box>
	);
};

export default WelcomeText;
