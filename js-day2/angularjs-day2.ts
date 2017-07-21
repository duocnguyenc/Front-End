var $btn = document.getElementById(`js-btn`);
var $input = document.getElementById(`js-text`);
var $content = document.getElementById(`content`);

class Member {
	$member: any;
	
	constructor($name: string) {
		$member = document.createElement(`li`);
		$member.className = `list-group-item`;
		$btnDel = document.createElement('button');
		$btnDel.className = "btn btn-danger pull-right";
		$btnDel.innerHTML = 'Delete';
		$span = document.createElement(`span`);
		$span.innerHTML = $name;
		$member.appendChild($span);
		$member.appendChild($btnDel);
		$content.appendChild($member);
	}

	createDeleteEvent = () => {
		$btnDel.addEventListener('click', (e) => {
			let $parrentBtn = e.target.parentNode;
			$content.removeChild($parrentBtn);
		};
	}
}
$btn.addEventListener('click',function() {
let $member = new Member($name = $input.value);
	$member.createDeleteEvent();
});
