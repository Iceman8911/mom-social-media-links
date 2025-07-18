import { Match, Switch } from "solid-js";
import type { JSX } from "solid-js/h/jsx-runtime";

function FaSolidArrowDown(props: { style?: JSX.CSSProperties }) {
	return (
		<svg
			fill="currentColor"
			stroke-width="0"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 384 512"
			height="1em"
			width="1em"
			style={{
				overflow: "visible",
				color: "currentcolor",
				...(props.style ?? {}),
			}}
		>
			<title>Down Arrow</title>
			<path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
		</svg>
	);
}

function SocialMediaHandle(props: {
	socialMedia: "whatsapp" | "telegram" | "tiktok";
	link: string;
}) {
	return (
		<a
			href={props.link}
			target="_blank"
			type="button"
			class="btn btn-primary rounded-lg w-[75vw] sm:w-100 h-16 grid [grid-template-columns:25%_1fr] gap-4 font-bold *:flex *:items-center *:w-full *:h-full"
		>
			{/* The icon for the social media platform */}
			<div class="justify-center *:w-auto *:h-4/5">
				<Switch>
					<Match when={props.socialMedia === "whatsapp"}>
						<svg
							fill="currentColor"
							stroke-width="0"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							height="1em"
							width="1em"
							style="overflow: visible; color: currentcolor;"
						>
							<title>Whatsapp Icon</title>
							<path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
						</svg>
					</Match>

					<Match when={props.socialMedia === "telegram"}>
						<svg
							fill="currentColor"
							stroke-width="0"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 496 512"
							height="1em"
							width="1em"
							style="overflow: visible; color: currentcolor;"
						>
							<title>Telegram Icon</title>
							<path d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248 248-111.033 248-248S384.967 8 248 8Zm114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3-3.476 18.584-10.322 24.816-16.948 25.425-14.4 1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25 5.342-39.5 3.652-3.793 67.107-61.51 68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7 108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789 2.052-.034 6.639.474 9.61 2.885a10.452 10.452 0 0 1 3.53 6.716 43.765 43.765 0 0 1 .417 9.769Z"></path>
						</svg>
					</Match>

					<Match when={props.socialMedia === "tiktok"}>
						<svg
							fill="currentColor"
							stroke-width="0"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							height="1em"
							width="1em"
							style="overflow: visible; color: currentcolor;"
						>
							<title>Tiktok Icon</title>
							<path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"></path>
						</svg>
					</Match>
				</Switch>
			</div>

			{/* The text */}
			<div class="text-2xl">
				<Switch>
					<Match when={props.socialMedia === "whatsapp"}>Whatsapp</Match>
				</Switch>
				<Switch>
					<Match when={props.socialMedia === "telegram"}>Telegram</Match>
				</Switch>
				<Switch>
					<Match when={props.socialMedia === "tiktok"}>Tiktok</Match>
				</Switch>
			</div>
		</a>
	);
}

export default function Home() {
	return (
		<main class="w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-4">
			<div class="avatar">
				<div class="w-24 rounded-full">
					<img
						src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
						alt="Profile Pic"
					/>
				</div>
			</div>

			<p class="font-bold text-2xl mb-2">@yellingCat</p>

			<p class="font-bold text-xl mb-4">
				Contact me with{" "}
				<FaSolidArrowDown
					style={{
						display: "inline-block",
					}}
				/>
			</p>

			<div class="flex flex-col justify-center items-center gap-8">
				<SocialMediaHandle
					socialMedia="whatsapp"
					link="https://chat.whatsapp.com/CNXLAsqd8Sp8whU7UdvyDh"
				/>
				<SocialMediaHandle
					socialMedia="telegram"
					link="https://t.me/+heRBOxU4HB5iYzFk"
				/>
				<SocialMediaHandle
					socialMedia="tiktok"
					link="https://www.tiktok.com/@christathriftwears?_r=1&_d=eh14g6lclimbff&sec_uid=MS4wLjABAAAAfjWKMqNf_ZAVhJDpDhG9yJ_x3XxF09os4x34jD1xFNKGO_dF2ciwPwUMa9hPuArv&share_author_id=7096529035811374086&sharer_language=en&source=h5_m&u_code=e1j012078lg0k5&timestamp=1750623617&user_id=7096529035811374086&sec_user_id=MS4wLjABAAAAfjWKMqNf_ZAVhJDpDhG9yJ_x3XxF09os4x34jD1xFNKGO_dF2ciwPwUMa9hPuArv&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7511992966116017928&share_link_id=1b293dd8-1387-4662-b9d0-2e5e35ae213f&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1"
				/>
			</div>
		</main>
	);
}
