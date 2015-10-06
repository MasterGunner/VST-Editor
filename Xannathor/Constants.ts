/// <reference path="../typings/tsd.d.ts" />

module Thrimbletrimmer {
	export module Constants {
		export var HOSTNAME: string;
		export var PORT: number;
		
		//Web page/resource locations
		export var EDITORPAGELOCATION = __dirname + '/EditorPage';
		export var VIDEOSLOCATION: string;
		export var USERLISTLOCATION: string;
		
		//Video metadata defaults.
		export var TYPE = "video/mp4";
		export var TITLE = "Desert Bus Clip";
		export var DESCRIPTION = "A clip from Desert Bus.";
		export var FRAMERATE = "30";
		export var WIDTH = "640";
		export var HEIGHT = "360";
	}
}