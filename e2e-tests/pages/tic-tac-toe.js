'use strict';

var gameCommands = {
    restartGame: function () {
        return this.waitForElementVisible('@restartButton')
            .click('@restartButton')
            .waitForElementVisible('@position1Button')
            .waitForElementVisible('@position2Button')
            .waitForElementVisible('@position3Button')
            .waitForElementVisible('@position4Button')
            .waitForElementVisible('@position5Button')
            .waitForElementVisible('@position6Button')
            .waitForElementVisible('@position7Button')
            .waitForElementVisible('@position8Button')
            .waitForElementVisible('@position9Button');
    },

    makeMove: function (position) {
        var button = '@position' + position + 'Button',
            value  = '@position' + position + 'Value';

        return this.waitForElementVisible(button)
            .click(button)
            .waitForElementVisible(value);
    }
};

module.exports = {
    url: 'http://localhost:3000/',
    commands: [gameCommands],
    elements: {

        position1Button: {
            selector: 'button[value="1"]'
        },
        position2Button: {
            selector: 'button[value="2"]'
        },
        position3Button: {
            selector: 'button[value="3"]'
        },
        position4Button: {
            selector: 'button[value="4"]'
        },
        position5Button: {
            selector: 'button[value="5"]'
        },
        position6Button: {
            selector: 'button[value="6"]'
        },
        position7Button: {
            selector: 'button[value="7"]'
        },
        position8Button: {
            selector: 'button[value="8"]'
        },
        position9Button: {
            selector: 'button[value="9"]'
        },

        restartButton: {
            selector: 'button[name=restart]'
        },

        position1Value: {
            selector: 'tr:nth-child(1) td:nth-child(1) .occupied'
        },
        position2Value: {
            selector: 'tr:nth-child(1) td:nth-child(2) .occupied'
        },
        position3Value: {
            selector: 'tr:nth-child(1) td:nth-child(3) .occupied'
        },
        position4Value: {
            selector: 'tr:nth-child(2) td:nth-child(1) .occupied'
        },
        position5Value: {
            selector: 'tr:nth-child(2) td:nth-child(2) .occupied'
        },
        position6Value: {
            selector: 'tr:nth-child(2) td:nth-child(3) .occupied'
        },
        position7Value: {
            selector: 'tr:nth-child(3) td:nth-child(1) .occupied'
        },
        position8Value: {
            selector: 'tr:nth-child(3) td:nth-child(2) .occupied'
        },
        position9Value: {
            selector: 'tr:nth-child(3) td:nth-child(3) .occupied'
        },
    }
};