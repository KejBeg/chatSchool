export default function ChatError({ message }) {
	return (
		<div id="chat-window-list-container">
			<ul>
				<li
					key="chatError"
					id="chatError">
					<span>{message}</span>
				</li>
			</ul>
		</div>
	);
}

