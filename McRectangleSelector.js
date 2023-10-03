let a_xpos
let a_ypos
let a_zpos

let b_xpos
let b_ypos
let b_zpos

let rs_xpos
let rs_ypos
let rs_zpos

let xpos_dif
let ypos_dif
let zpos_dif

let p1chat
let p2chat
let p3chat

let resultchata
let resultchatb
let copyit

let p1done = 0



register("command", () => {
    a_xpos = Math.floor(Player.getX())
	a_ypos = Math.ceil(Player.getY())
	a_zpos = Math.floor(Player.getZ())
	
	p1chat = "&3[RectangleSelector] &e: Pos&91 &eset to &nX:" + a_xpos + ",Y:" + a_ypos + ",Z:" + a_zpos + "" 
	ChatLib.chat(p1chat)
	p1done = 1
 }).setName("p1")


register("command", () => {
    b_xpos = Math.floor(Player.getX())
	b_ypos = Math.ceil(Player.getY())
	b_zpos = Math.floor(Player.getZ())
	
	p2chat = "&3[RectangleSelector] &e: Pos&c2 &eset to &nX:" + b_xpos + ",Y:" + b_ypos + ",Z:" + b_zpos + "" 
	ChatLib.chat(p2chat)
	
	if (p1done == 0) {
		ChatLib.chat("&3[RectangleSelector] &e: &cpos1 isn't exist. run /sresult to finish making after set pos1.")
	}else{
		resultchata = "&3[RectangleSelector] &e: Solved | (" + a_xpos + "," + a_ypos + "," + a_zpos + ") to (" + b_xpos + "," + b_ypos + "," + b_zpos + ")"
		xpos_dif = b_xpos - a_xpos
		ypos_dif = b_ypos - a_ypos
		zpos_dif = b_zpos - a_zpos
		resultchatb = "&e&n@a[x=" + a_xpos + ",dx=" + xpos_dif + ",y=" + a_ypos + ",dy=" + ypos_dif + ",z=" + a_zpos + ",dz=" + zpos_dif + "]"
		copyit = "@a[x=" + a_xpos + ",dx=" + xpos_dif + ",y=" + a_ypos + ",dy=" + ypos_dif + ",z=" + a_zpos + ",dz=" + zpos_dif + "]"
		
		ChatLib.chat(resultchata)
		ChatLib.chat(resultchatb)
		ChatLib.command(`ct copy ${copyit}`, true)
	}
 }).setName("p2")
 
 register("command", () => {
   resultchata = "&3[RectangleSelector] &e: Solved | (" + a_xpos + "," + a_ypos + "," + a_zpos + ") to (" + b_xpos + "," + b_ypos + "," + b_zpos + ")"
		xpos_dif = b_xpos - a_xpos
		ypos_dif = b_ypos - a_ypos
		zpos_dif = b_zpos - a_zpos
		resultchatb = "&e&n@a[x=" + a_xpos + ",dx=" + xpos_dif + ",y=" + a_ypos + ",dy=" + ypos_dif + ",z=" + a_zpos + ",dz=" + zpos_dif + "]"
		copyit = "@a[x=" + a_xpos + ",dx=" + xpos_dif + ",y=" + a_ypos + ",dy=" + ypos_dif + ",z=" + a_zpos + ",dz=" + zpos_dif + "]"
		
		ChatLib.chat(resultchata)
		ChatLib.chat(resultchatb)
		ChatLib.command(`ct copy ${copyit}`, true)
 }).setName("sresult")

register("command", () => {
    rs_xpos = Math.floor(Player.getX())
	rs_ypos = Math.ceil(Player.getY())
	rs_zpos = Math.floor(Player.getZ())
	
	p1chat = "&3[RectangleSelector] &e: &c<RedStoneHere> &egenerated at &nX:" + rs_xpos + ",Y:" + rs_ypos + ",Z:" + rs_zpos + " &e and copied!" 
	ChatLib.chat(p1chat)
	copyit = "/setredstone " + rs_xpos + " " + rs_ypos + " " + rs_zpos + ""
	ChatLib.command(`ct copy ${copyit}`, true)
 }).setName("rshere")
 
 register("command", () => {
	
	p1chat = "&3[RectangleSelector] &e: &5<FillEntire> &egenerated for (" + a_xpos + "," + a_ypos + "," + a_zpos + ") to (" + b_xpos + "," + b_ypos + "," + b_zpos + ") and copied!"
	ChatLib.chat(p1chat)
	copyit = "/fill " + a_xpos + " " + a_ypos + " " + a_zpos + " " + b_xpos + " " + b_ypos + " " + b_zpos + ""
	ChatLib.command(`ct copy ${copyit}`, true)
 }).setName("fillentire")
 
let cnt_xpos
let cnt_ypos
let cnt_zpos

 register("command", () => {
	cnt_xpos = Math.floor(Player.getX())
	cnt_ypos = Math.ceil(Player.getY())
	cnt_zpos = Math.floor(Player.getZ())
	
	p3chat = "&3[RectangleSelector] &e: &5<cloneEntire> &egenerated for (" + a_xpos + "," + a_ypos + "," + a_zpos + ") to (" + b_xpos + "," + b_ypos + "," + b_zpos + ") at (" + cnt_xpos + "," + cnt_ypos + "," + cnt_zpos + ") and copied!"
	ChatLib.chat(p3chat)
	copyit = "clone " + a_xpos + " " + a_ypos + " " + a_zpos + " " + b_xpos + " " + b_ypos + " " + b_zpos + " " + cnt_xpos + " " + cnt_ypos + " " + cnt_zpos + ""
	ChatLib.command(`ct copy ${copyit}`, true)
 }).setName("cloneentire")
 
 //最小値地点を起点とすると示さばいい
 
 // worldEditドッキングモード
 
let worldEditMode = 0
let worldEditModeFirstDetect = 0

 register("command", () => {
	if (worldEditMode == 0) {
		worldEditMode = 1
		ChatLib.chat('&3[RectangleSelector] &eWorld-Edit connection が有効化されました。')
		if (worldEditModeFirstDetect == 0) {
			worldEditModeFirstDetect = 1
			ChatLib.chat('&e<Introduce> WorldEditの座標情報を直接p1,p2に代入します。もう一度コマンドを実行すると無効化します。')
		}
	}else{
		worldEditMode = 0
		ChatLib.chat('&3[RectangleSelector] &eWorld-Edit connection が無効化されました。')
	}
 }).setName("weconnect") 
 
let locate1 = 0
let locate2 = 0
let locate3 = 0
 
register("chat", (locate1,locate2,locate3) => {
	 if (worldEditMode == 1) {
		 a_xpos = parseFloat(locate1)
		 a_ypos = parseFloat(locate2)
		 a_zpos = parseFloat(locate3)
		ChatLib.chat("&eWE chat locate placed to /p1")
	 }
}).setCriteria("${*}pos1 set to (${locate1}, ${locate2}, ${locate3})${*}")

register("chat", (locate1,locate2,locate3) => {
	 if (worldEditMode == 1) {
		 b_xpos = parseFloat(locate1)
		 b_ypos = parseFloat(locate2)
		 b_zpos = parseFloat(locate3)
		ChatLib.chat("&eWE chat locate placed to /p2")
	 }
}).setCriteria("${*}pos2 set to (${locate1}, ${locate2}, ${locate3})${*}")