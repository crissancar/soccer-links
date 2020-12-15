export function leagueData(props) {
    const { name, link } = props;
  
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
    );
  }