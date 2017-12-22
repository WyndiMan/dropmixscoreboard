var dmControl = {
	/*	toggleControls: function() {
		var controlText = document.getElementById("ControlsToggle").value.toString();
		if (controlText == "Hide Controls") {
			document.getElementById("ControlsToggle").value = "Show Controls";
			document.getElementById("ScoreboardControls").style = "display: none;";
			return;
		} else if (controlText == "Show Controls") {
			document.getElementById("ControlsToggle").value = "Hide Controls";
			document.getElementById("ScoreboardControls").style = "display: block;";
			return;
		} else {
			return;
		}
	}, */
	toggleScoreboard: function() {
		var toggleButtonText = document.getElementById("ScoreboardToggle").value.toString();
		if (toggleButtonText == "Hide Scoreboard") {
			document.getElementById("ScoreboardToggle").value = "Show Scoreboard";
			document.getElementById("AllScoreboardDisplays").style = "display: none;";
			return;
		} else if (toggleButtonText == "Show Scoreboard") {
			document.getElementById("ScoreboardToggle").value = "Hide Scoreboard";
			document.getElementById("AllScoreboardDisplays").style = "display: block;";
			return;
		} else {
			return;
		}
	},
	togglePostgame: function() {
		return;
	},
	resetAllScores: function() {
		dmScore.resetScore();
		dmHeadline.resetWinCount();
		return;
	}
}

var dmHeadline = {

// Headline Text Display Controls
	
	headlineTitle: function() {
		var headlineTitleText = document.getElementById("HeadlineTitleInput").value.toString();
		headlineTitleText = headlineTitleText.trim();		
		headlineTitleText = headlineTitleText.toUpperCase();
		document.getElementById("HeadlineTitle").innerHTML = headlineTitleText;
		return;	
	},
	p1Name: function() {
		var p1NameText = document.getElementById("P1NameText").value.toString();
		p1NameText = p1NameText.trim();		
		p1NameText = p1NameText.toUpperCase();
		document.getElementById("P1Name").innerHTML = p1NameText;
		return;	
	},
	p2Name: function() {
		var p2NameText = document.getElementById("P2NameText").value.toString();
		p2NameText = p2NameText.trim();		
		p2NameText = p2NameText.toUpperCase();
		document.getElementById("P2Name").innerHTML = p2NameText;
		return;	
	},
	updateAll: function() {
		this.headlineTitle();
		this.p1Name();
		this.p2Name();
	},
	
// Win Counter Controls
	
	p1RoundWins: 0,
	p2RoundWins: 0,
	p1RoundWinUp: function() {
		this.p1RoundWins++;
		document.getElementById("P1WinCount").innerHTML = this.p1RoundWins;
		return;
	},
	p1RoundWinDn: function() {
		if (this.p1RoundWins <= 0) {
			return;
		} else {
			this.p1RoundWins--;
			document.getElementById("P1WinCount").innerHTML = this.p1RoundWins;
			return;
		}
	},		
	p2RoundWinUp: function() {
		this.p2RoundWins++;
		document.getElementById("P2WinCount").innerHTML = this.p2RoundWins;
		return;
	},
	p2RoundWinDn: function() {
		if (this.p2RoundWins <= 0) {
			return;
		} else {
			this.p2RoundWins--;
			document.getElementById("P2WinCount").innerHTML = this.p2RoundWins;
			return;
		}
	},
	resetWinCount: function() {
		this.p1RoundWins = 0;
		this.p2RoundWins = 0;
		document.getElementById("P1WinCount").innerHTML = this.p1RoundWins;
		document.getElementById("P2WinCount").innerHTML = this.p2RoundWins;
		return;		
	}
}

var dmScore = {

// Player 1 Scorekeeping
	
	p1CardPts: 0,
	p1BonusPts: 0,
	p1FxGainPts: 0,
	p1EqLossPts: 0,
	p1FxLossPts: 0,
	p1GainPts: 0,
	p1LossPts: 0,
	p1TotalPts: 0,
	p1DmSpins: 0,
	p1updateScore: function() {
		this.p1GainPts = this.p1CardPts + this.p1BonusPts + this.p1FxGainPts;
		this.p1LossPts = this.p1EqLossPts + this.p1FxLossPts;
		this.p1TotalPts = this.p1GainPts - this.p1LossPts;
		document.getElementById("P1PointsGained").innerHTML = this.p1GainPts;
		document.getElementById("P1PointsLost").innerHTML = this.p1LossPts;
		document.getElementById("P1TotalScore").innerHTML = this.p1TotalPts;			
		return;
	},
	p1CardPointUp: function() {
		this.p1CardPts++;
		document.getElementById("P1CardPoints").innerHTML = this.p1CardPts;
		this.p1updateScore();
		return;
	},
	p1CardPointDn: function() {
		if (this.p1CardPts <= 0) {
			return;
		} else {
			this.p1CardPts--;
			document.getElementById("P1CardPoints").innerHTML = this.p1CardPts;		
			this.p1updateScore();
			return;
		}
	},
	p1BonusPointUp: function() {
		this.p1BonusPts++;
		document.getElementById("P1SlotBonusPoints").innerHTML = this.p1BonusPts;
		this.p1updateScore();		
		return;
	},
	p1BonusPointDn: function() {
		if (this.p1BonusPts <= 0) {
			return;
		} else {
			this.p1BonusPts--;
			document.getElementById("P1SlotBonusPoints").innerHTML = this.p1BonusPts;
			this.p1updateScore();
			return;
		}
	},
	p1FxGainPointUp: function() {
		this.p1FxGainPts++;
		document.getElementById("P1FXpoints").innerHTML = this.p1FxGainPts;
		this.p1updateScore();
		return;
	},
	p1FxGainPointDn: function() {
		if (this.p1FxGainPts <= 0) {
			return;
		} else {
			this.p1FxGainPts--;
			document.getElementById("P1FXpoints").innerHTML = this.p1FxGainPts;
			this.p1updateScore();
			return;
		}
	},
	p1EqLossPointUp: function() {
		if (this.p1TotalPts <= 0) {
			return;
		} else {
			this.p1EqLossPts++;
			document.getElementById("P1EQminusPoints").innerHTML = this.p1EqLossPts;
			this.p1updateScore();
			return;
		}
	},
	p1EqLossPointDn: function() {
		if (this.p1EqLossPts <= 0) {
			return;
		} else {
			this.p1EqLossPts--;
			document.getElementById("P1EQminusPoints").innerHTML = this.p1EqLossPts;
			this.p1updateScore();
			return;
		}
	},
	p1FxLossPointUp: function() {
		if (this.p1TotalPts <= 0) {
			return;
		} else {
			this.p1FxLossPts++;
			document.getElementById("P1FXminusPoints").innerHTML = this.p1FxLossPts;
			this.p1updateScore();
			return;
		}	
	},
	p1FxLossPointDn: function() {
		if (this.p1FxLossPts <= 0) {
			return;
		} else {
			this.p1FxLossPts--;
			document.getElementById("P1FXminusPoints").innerHTML = this.p1FxLossPts;
			this.p1updateScore();
			return;
		}
	},
	p1DmSpinUp: function() {
		this.p1DmSpins++;
		document.getElementById("P1DmSpins").innerHTML = this.p1DmSpins;
		// this.p1updateScore();
		return;		
	},
	p1DmSpinDn: function() {
		if (this.p1DmSpins <= 0) {
			return;
		} else {
			this.p1DmSpins--;
			document.getElementById("P1DmSpins").innerHTML = this.p1DmSpins;
			// this.p1updateScore();
			return;	
		}
	},

// Player 2 Scorekeeping
	
	p2CardPts: 0,
	p2BonusPts: 0,
	p2FxGainPts: 0,
	p2EqLossPts: 0,
	p2FxLossPts: 0,
	p2GainPts: 0,
	p2LossPts: 0,
	p2TotalPts: 0,
	p2DmSpins: 0,
	p2updateScore: function() {
		this.p2GainPts = this.p2CardPts + this.p2BonusPts + this.p2FxGainPts;
		this.p2LossPts = this.p2EqLossPts + this.p2FxLossPts;
		this.p2TotalPts = this.p2GainPts - this.p2LossPts;
		document.getElementById("P2PointsGained").innerHTML = this.p2GainPts;
		document.getElementById("P2PointsLost").innerHTML = this.p2LossPts;
		document.getElementById("P2TotalScore").innerHTML = this.p2TotalPts;			
		return;
	},
	p2CardPointUp: function() {
		this.p2CardPts++;
		document.getElementById("P2CardPoints").innerHTML = this.p2CardPts;
		this.p2updateScore();
		return;
	},
	p2CardPointDn: function() {
		if (this.p2CardPts <= 0) {
			return;
		} else {
			this.p2CardPts--;
			document.getElementById("P2CardPoints").innerHTML = this.p2CardPts;		
			this.p2updateScore();
			return;
		}
	},
	p2BonusPointUp: function() {
		this.p2BonusPts++;
		document.getElementById("P2SlotBonusPoints").innerHTML = this.p2BonusPts;
		this.p2updateScore();		
		return;
	},
	p2BonusPointDn: function() {
		if (this.p2BonusPts <= 0) {
			return;
		} else {
			this.p2BonusPts--;
			document.getElementById("P2SlotBonusPoints").innerHTML = this.p2BonusPts;
			this.p2updateScore();
			return;
		}
	},
	p2FxGainPointUp: function() {
		this.p2FxGainPts++;
		document.getElementById("P2FXpoints").innerHTML = this.p2FxGainPts;
		this.p2updateScore();
		return;
	},
	p2FxGainPointDn: function() {
		if (this.p2FxGainPts <= 0) {
			return;
		} else {
			this.p2FxGainPts--;
			document.getElementById("P2FXpoints").innerHTML = this.p2FxGainPts;
			this.p2updateScore();
			return;
		}
	},
	p2EqLossPointUp: function() {
		if (this.p2TotalPts <= 0) {
			return;
		} else {
		this.p2EqLossPts++;
		document.getElementById("P2EQminusPoints").innerHTML = this.p2EqLossPts;
		this.p2updateScore();
		return;
		}
	},
	p2EqLossPointDn: function() {
		if (this.p2EqLossPts <= 0) {
			return;
		} else {
			this.p2EqLossPts--;
			document.getElementById("P2EQminusPoints").innerHTML = this.p2EqLossPts;
			this.p2updateScore();
			return;
		}
	},
	p2FxLossPointUp: function() {
		if (this.p2TotalPts <= 0) {
			return;
		} else {
		this.p2FxLossPts++;
		document.getElementById("P2FXminusPoints").innerHTML = this.p2FxLossPts;
		this.p2updateScore();
		return;
		}
	},
	p2FxLossPointDn: function() {
		if (this.p2FxLossPts <= 0) {
			return;
		} else {
			this.p2FxLossPts--;
			document.getElementById("P2FXminusPoints").innerHTML = this.p2FxLossPts;
			this.p2updateScore();
			return;
		}
	},
	p2DmSpinUp: function() {
		this.p2DmSpins++;
		document.getElementById("P2DmSpins").innerHTML = this.p2DmSpins;
		// this.p2updateScore();
		return;		
	},
	p2DmSpinDn: function() {
		if (this.p2DmSpins <= 0) {
			return;
		} else {
			this.p2DmSpins--;
			document.getElementById("P2DmSpins").innerHTML = this.p2DmSpins;
			// this.p2updateScore();
			return;	
		}
	},
	
// New Game, Reset All Scoreboard (not Win Count) Values to Zero 
	
	resetScore: function() {
		this.p1CardPts = 0;
		document.getElementById("P1CardPoints").innerHTML = 0		
		this.p1BonusPts = 0;
		document.getElementById("P1SlotBonusPoints").innerHTML = 0;		
		this.p1FxGainPts = 0;
		document.getElementById("P1FXpoints").innerHTML = 0;
		this.p1EqLossPts = 0;
		document.getElementById("P1EQminusPoints").innerHTML = 0;
		this.p1FxLossPts = 0;
		document.getElementById("P1FXminusPoints").innerHTML = 0;
		this.p1GainPts = 0;
		this.p1LossPts = 0;
		this.p1TotalPts = 0;
		this.p2CardPts = 0;
		document.getElementById("P2CardPoints").innerHTML = 0		
		this.p2BonusPts = 0;
		document.getElementById("P2SlotBonusPoints").innerHTML = 0;		
		this.p2FxGainPts = 0;
		document.getElementById("P2FXpoints").innerHTML = 0;
		this.p2EqLossPts = 0;
		document.getElementById("P2EQminusPoints").innerHTML = 0;
		this.p2FxLossPts = 0;
		document.getElementById("P2FXminusPoints").innerHTML = 0;
		this.p2GainPts = 0;
		this.p2LossPts = 0;
		this.p2TotalPts = 0;
		this.p1DmSpins = 0;
		document.getElementById("P1DmSpins").innerHTML = 0;
		this.p2DmSpins = 0;
		document.getElementById("P2DmSpins").innerHTML = 0;		
		this.p1updateScore();
		this.p2updateScore();		
	}
}