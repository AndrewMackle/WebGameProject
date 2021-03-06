/*Source  file  name: constants.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,
Date  last  Modified: 2015_3_18,  Program description： This file is the constants.ts file which contains the constant variables used in game.
Revision  History : Version 2.0*/
//constants used in this game
var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.INSTRUCTION_STATE = 3;
    // Game Constants
    constants.BACKGROUND_MOVING_SPEED = 3;
    constants.GROUND_LEVEL = 300; //temporary set height of ground level
    constants.STONE_NUM = 4;
    //Math.floor(Math.random() * (3) + 3);;//randomly generated stone numbers
    constants.SUBMARINE_NUM = 3;
    constants.SMALLFISH_NUM = 2;
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#FFFF00";
    constants.PLANE_LIVES = 3;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map