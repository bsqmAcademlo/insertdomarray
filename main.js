import "./style.css";
import { data } from "./data.js";

function fillApp() {
	document.querySelector("#app").innerHTML = `
        <div class="groups"></div>
    `;
}

function printPartcipants(participants, color) {
	let html = "";

	for (const participant of participants) {
		html += `
        <div class="participant" style="border: 2px solid ${color}">
            <p>${participant.name}</p>
            <p>${participant.email}</p>
        </div>
        `;
	}

	return html;
}

function printSubGroups(subGroups, color) {
	let html = "";

	for (const group of subGroups) {
		html += `
            <div class="subgroup" style="border: 5px solid ${color}">
                <h3>${group.title}</h3>

                <div class="participants" style="--color-hover: ${color}">
                    ${printPartcipants(group.participants, color)}
                </div>
            </div>
        `;
	}

	return html;
}

function printGroups(groups) {
	let html = "";

	for (const group of groups) {
		html += `
            <div class="group" style="border: 5px solid ${group.color}">
                <h2 style="--color-font: ${group.color}">${group.title}</h2>

                <div class="subgroups">
                    ${printSubGroups(group.subGroups, group.color)}
                </div>
            </div>
        `;
	}

	document.querySelector(".groups").innerHTML = html;
}

window.addEventListener("load", function () {
	fillApp();
	printGroups(data);
});
