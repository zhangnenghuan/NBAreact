const categoryMap = {
  Points: 'PTS',
  Minutes: 'MIN',
  OffensiveRebounds: 'OREB',
  DefensiveRebounds: 'DREB',
  Rebounds: 'REB',
  Assists: 'AST',
  Steals: 'STL',
  Blocks: 'BLK',
  Turnovers: 'TOV',
  Efficiency: 'EFF'
}

const initialState = {
  category: { label: 'Points', value: 'PTS' },
  playersInLeague: []
}

const league = (state = initialState, action) => {
  switch(action.type) {
    case 'SELECT_CATEGORY':
      return {
        ...state,
        category: {
          label: action.selectedCategory,
          value: categoryMap[action.selectedCategory.replace(' ', '')]
        }
      }
    case 'PLAYERS_SUCCESS':
      return {
        ...state,
        playersInLeague: action.payload
      }
    default:
      return state
  }
}

export default league
