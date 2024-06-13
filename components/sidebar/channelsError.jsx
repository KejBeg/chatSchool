export default function ChannelsError({ message }) {
	return (
		<ul id="channel-list">
			<li key="channels-error">
				<span id="channels-error">{message}</span>
			</li>
		</ul>
	);
}

