import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isRecognizing, setIsRecognizing] = useState(false);
  const navigate = useNavigate();

  // Initialize SpeechRecognition API
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    navigate(`/search-results?query=${query}`);
  };

  const handleVoiceInput = () => {
    if (!isRecognizing) {
      setIsRecognizing(true);
      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        onSearch(transcript); // Automatically trigger the search
        navigate(`/search-results?query=${transcript}`);
      };

      recognition.onend = () => {
        setIsRecognizing(false); // Reset flag when recognition ends
      };
    }
  };

  return (
    <form className="input-group" onSubmit={handleSearch} id="nav-search-bar">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
      <button className="btn" type="submit" id="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <button type="button" className="btn" onClick={handleVoiceInput}>
        <FontAwesomeIcon icon={faMicrophone} />
      </button>
    </form>
  );
};

export default SearchBar;
