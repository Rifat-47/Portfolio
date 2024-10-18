import React from "react";
import { IconButton, Stack } from "@mui/material";
import StackOverflowIcon from "./StackOverflowIcon";
import { RedirectNewPage } from "../../services/RedirectNewPage";
import { socialMediaData } from "./socialMediaData";

const SocialMedia = () => {
	return (
		<Stack direction="row" spacing={2}>
			{socialMediaData.map((social) => (
				<IconButton onClick={() => RedirectNewPage(social.url)}>
					<social.icon
						fontSize="large"
						sx={{ color: social.color }}
					/>
				</IconButton>
			))}

			<IconButton onClick={() => RedirectNewPage('https://stackoverflow.com/users/13821278/rifat1747')}>
				<StackOverflowIcon />
			</IconButton>

		</Stack>
	);
};

export default SocialMedia;
