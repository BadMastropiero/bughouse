import { connect } from 'react-redux';
import GameBoardsComponent from '../../components/game/GameBoardsComponent';
import { updateMoves, updateReserves } from '../../actions/game';

function mapStateToProps(state) {
	const userPosition = state.game.userPosition;
	const game = state.game.game;
	const display = {};
	if (userPosition === 1) {
		display.player1 = game.player1;
		display.player2 = game.player2;
		display.player3 = game.player3;
		display.player4 = game.player4;
	} else if (userPosition === 2) {
		display.player1 = game.player2;
		display.player2 = game.player1;
		display.player3 = game.player4;
		display.player4 = game.player3;
	} else if (userPosition === 3) {
		display.player1 = game.player3;
		display.player2 = game.player4;
		display.player3 = game.player1;
		display.player4 = game.player2;
	} else {
		display.player1 = game.player4;
		display.player2 = game.player3;
		display.player3 = game.player2;
		display.player4 = game.player1;
	}
	return {
		game,
		display,
		userPosition: state.game.userPosition,
		moves: state.game.moves,
		user: state.user.currentUser
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateMoves: moves => dispatch(updateMoves(moves)),
		updateReserves: (leftWhite, leftBlack, rightWhite, rightBlack) => dispatch(updateReserves(leftWhite, leftBlack, rightWhite, rightBlack))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoardsComponent);
