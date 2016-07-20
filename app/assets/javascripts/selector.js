$(document).ready(function() {

var mbti = [
    "INTJ-Architect",
    "INTP-Logician",
    "ENTJ-Commander",
    "ENTP-Debater",
    "INFJ-Advocate",
    "INFP-Mediator",
    "ENFJ-Protagonist",
    "ENFP-Campaigner",
    "ISTJ-Logistician",
    "ISFJ-Defender",
    "ESTJ-Executive",
    "ESFJ-Consul",
    "ISTP-Virtuoso",
    "ISFP-Adventurer",
    "ESTP-Entrepreneur",
    "ESFP-Entertainer"];

$("#mbti").autocomplete({
    source: function(request, response) {
        var results = $.ui.autocomplete.filter(mbti, request.term);

        response(results.slice(0, 16));
    }
});

var horoscope = [
    "Capricorn",
    "Taurus",
    "Virgo",
    "Aquarius",
    "Gemini",
    "Libra",
    "Pisces",
    "Cancer",
    "Scorpio",
    "Aries",
    "Leo",
    "Sagittarius"];

$("#zodiac").autocomplete({
    source: function(request, response) {
        var results = $.ui.autocomplete.filter(horoscope, request.term);

        response(results.slice(0, 12));
    }
});

var numerology = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"];

$("#numerology").autocomplete({
    source: function(request, response) {
        var results = $.ui.autocomplete.filter(numerology, request.term);
         console.log(results);
        response(results.slice(0, 9));
    }
});
});
