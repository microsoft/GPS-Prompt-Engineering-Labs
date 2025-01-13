---
layout: custom
title: "Hands-on-Lab (Deutsch)"
subtitle: "HSG Alumni"
authors: ["Florian Follonier & Juan Manuel Servera - Microsoft"]
permalink: /prompt-engineering
---

<div class="section" markdown="1">
Von Florian Follonier - Cloud Solution Architect Data & AI - Microsoft

& Juan Manuel Servera - Cloud Solution Architect App Innovation - Microsoft

## Einleitung

<div class="step" markdown="1">
Willkommen im Hands-on-Lab zur Prompt-Entwicklung!

Wir haben diesen Leitfaden entwickelt, um Ihnen zu helfen, den KI-Begleiter von Microsoft, Copilot, auf praktische und ansprechende Weise zu verstehen und zu nutzen.
  
In diesem Lab werden wir die Welt der KI-gestützten Chats erkunden, verschiedene Arten von Prompts kennenlernen und lernen, wie man ein KI-Sprachmodell dazu bringt, den gewünschten Inhalt zu generieren. Die Übungen sind praxisorientiert, sodass Sie durch Ausprobieren und Anwenden Ihrer neu gewonnenen Fähigkeiten in Echtzeit lernen können.
  
Unser Ziel ist es, Ihnen die Fähigkeiten und das Verständnis zu vermitteln, KI-Tools wie Copilot effektiv in Ihren eigenen Projekten einzusetzen, sei es für geschäftliche, bildungsbezogene oder persönliche Zwecke.  

In der ersten Übung lernen Sie, wie Copilot funktioniert, indem Sie einfache Prompts verwenden. In der zweiten Übung nutzen Sie Copilot, um verschiedene Inhalte für ein fiktives Raumfahrt-Startup zu erstellen. Dazu gehört die Generierung eines Firmennamens, einer Missionserklärung, eines Logos und sogar eines Geschäftsplans, alles mit verschiedenen Prompt-Techniken.
  
Am Ende dieses Labs werden Sie ein umfassendes Verständnis dafür haben, wie man mit KI-Sprachmodellen interagiert und sie anleitet, und wie Sie sie als leistungsstarkes Werkzeug in Ihren eigenen Projekten einsetzen können.
  
Lassen Sie uns nun loslegen und mit der ersten Übung beginnen!
</div>
</div>

<div class="section" markdown="1">

## Übung 1 – Warmup mit grundlegenden Prompts

<div class="step" markdown="1">
Für diese Übung nutzen wir Microsoft Copilot, Ihren täglichen KI-Begleiter, der KI-gestützten Chat für das Web bereitstellt. Öffnen Sie es unter <https://www.bing.com/chat> und konfigurieren Sie, falls verfügbar, den Gesprächsstil auf „**Kreativer**“, da wir heute eine Ideensitzung haben werden. Wie Linus Pauling einmal sagte:

> Die beste Möglichkeit, eine gute Idee zu haben, ist, viele Ideen zu haben.

![Screenshot von Copilot im Web.](./img/Copilot%20in%20desktop.png)

*Wenn Sie diese Übung über den mobilen Browser durchführen, sehen Sie möglicherweise eine andere Benutzeroberfläche und Copilot fordert Sie möglicherweise zur Eingabe von Anmeldedaten auf. Sie können Ihr Microsoft-Konto verwenden, um sich anzumelden und die Übung fortzusetzen.*

> Während dieses Labs müssen Sie mehr als die grundlegenden 4 Fragen stellen, die Sie mit einem nicht authentifizierten Konto stellen können, und mehr als die 10 Fragen, die Sie stellen können, wenn Sie nicht den Edge-Browser verwenden. Um das beste Erlebnis mit diesem Lab zu erzielen, befolgen Sie bitte diese Anweisungen:
>
> * Falls Sie noch kein Konto haben, erstellen Sie ein Microsoft-Konto; jedes Outlook-, Hotmail- oder Live-Konto funktioniert und es ist kostenlos, eines zu erstellen: [Microsoft-Konto \| Melden Sie sich an oder erstellen Sie Ihr Konto noch heute – Microsoft](https://account.microsoft.com/account/CreateAccount). Beachten Sie, dass auch Arbeitskonten mit aktiviertem Microsoft 365 funktionieren.
> * Installieren Sie den neuesten [Edge-Browser](https://www.microsoft.com/edge/download) und melden Sie sich mit Ihrem Microsoft-Konto an.

</div>
<div class="step" markdown="1">

### Seed-Text-Prompt

Schreiben Sie den folgenden Prompt in das Textfeld „Frag mich alles...“:

```prompt
Der Weltraum ist...
```

Dies ist der grundlegendste Prompt und wird als **Seed-Text-Prompt** bezeichnet. Ein Seed-Text-Prompt ist eine einfache, offene Aussage oder Frage, die als Ausgangspunkt für KI-generierte Inhalte dient.

Was war die Ausgabe, die Copilot generiert hat? Je nach Tag kann es eine lange Abhandlung über die Weite und Komplexität des Weltraums generieren. Es füllt einfach die Leere...

Wenn wir eine spezifische Antwort wünschen, müssen wir eine spezifische Frage stellen. Je detaillierter unsere Frage ist, desto besser ist die Antwort.

Bevor Sie mit dem neuen Prompt beginnen, klicken Sie auf die Schaltfläche „**Neues Thema**“, um den Kontext zu löschen und von vorne zu beginnen.

![Schaltfläche „Neues Thema“ in Copilot](img/new%20topic.png)

Wenn Sie diesen expliziteren Prompt schreiben:

```prompt
Vervollständige diesen Satz:

Der Weltraum ist...
```

Erhalten Sie eine kürzere, prägnantere Antwort.
</div>
<div class="step" markdown="1">

### Bedingter Prompt

Als nächstes haben wir **bedingte Prompts**. Sie verwenden diese, um der KI zu sagen, Inhalte basierend auf bestimmten Regeln oder Bedingungen zu erstellen. Probieren Sie diesen aus:

```prompt
Entwerfen Sie eine Geschichte über ein neues Unternehmen, das ein Raumschiff baut, um zum Mars zu fliegen, gegründet von einem Astronauten, einigen ehemaligen NASA- und ESA-Ingenieuren und einem ausgezeichneten Koch.
```

</div>
<div class="step" markdown="1">

### Multiple-Choice-Prompt

Bei **Multiple-Choice-Prompts** präsentieren Sie der KI mehrere Optionen, aus denen sie die am besten geeignete auswählen oder empfehlen muss, basierend auf dem Kontext oder den angegebenen Kriterien.

```prompt
Was brauchen wir, um zum Mars zu fliegen?

A) einen riesigen Mars-Schokoriegel
B) einen DeLorean
C) ein Raumschiff
D) ein Privatjet
```

</div>
<div class="step" markdown="1">

### Zero-Shot-Prompt: Klassifikationsbeispiel

Die vorherigen Beispiele sind einfache **Zero-Shot-Prompts**. Bei diesen Prompts geben wir kein Beispiel an, wir weisen das Modell direkt an, eine Frage zu beantworten, und verlassen uns auf die Trainingsdaten, um die Antwort zu erhalten. (Beachten Sie, dass Bing-Chat heutzutage Zugang zum Internet hat und auch einige andere Techniken wie Meta-Prompting, Funktionsaufrufe, Inhaltsfilterung und RAG verwendet, sodass dies nicht vollständig zutrifft, aber für diese Übung ignorieren wir dies.)

```prompt
Klassifizieren Sie den Text als neutral, negativ oder positiv.

Text: Ich finde den Weltraum cool.

Gefühl:
```

Das LLM sollte Ihnen sagen, dass dies ein positives Sentiment darstellt, aber vielleicht möchten Sie diesen Wert in einer anderen Software verwenden, also können Sie Copilot bitten, Ihnen die Antwort in einem strukturierten Format zu geben:

```prompt
Geben Sie das Ergebnis im JSON-Format an.
```

Oder Sie können das LLM herausfordern, seine Antwort zu korrigieren, wenn Sie das Gefühl haben, dass sie nicht korrekt ist:

```prompt
Sind Sie sicher? Was, wenn das Wort "cool" in diesem Satz faktisch gemeint war?
```

Jetzt sollte Copilot noch einmal darüber nachdenken und die Nuancen verstehen.

</div>
<div class="step" markdown="1">

### Abschluss der Übung 1

Hervorragende Arbeit beim Abschluss der ersten Übung!

In dieser Übung haben Sie einige grundlegende Prompting-Begriffe und -Techniken kennengelernt, wie Seed-Text-Prompts, bedingte Prompts, Multiple-Choice-Prompts und Zero-Shot-Prompts. Sie haben auch ein Gefühl dafür bekommen, wie Copilot Inhalte basierend auf verschiedenen Arten von Prompts generiert und wie Sie die KI anleiten können, den gewünschten Output zu erzeugen.

> Denken Sie daran, dass es keinen Ansatz gibt, der für alle passt, wenn es um den Einsatz von KI geht. Experimentieren Sie ruhig mit verschiedenen Arten von Prompts, um zu sehen, welche Ergebnisse Sie erhalten. Je mehr Sie experimentieren, desto besser werden Sie verstehen, wie Sie Copilot effektiv anleiten können. Wenn Sie weitere Beispiele für jeden Typ von Prompt benötigen, sehen Sie sich den [Beispielleitfaden](#some-more-example-prompts) am Ende dieses Dokuments an.

Nun gehen wir zur zweiten Übung über, in der Sie Ihr eigenes Raumfahrt-Startup mit Copilot erstellen. Diese Übung ermöglicht es Ihnen, mit verschiedenen Prompting-Techniken zu experimentieren und eine Vielzahl von Inhalten für Ihr Startup zu erstellen. Los geht's!
</div>

</div>
<div class="section" markdown="1">

## Übung 2 – Erstellen Sie Ihr eigenes Raumfahrt-Startup

<div class="step" markdown="1">

> Während wir in die zweite Übung eintauchen, denken Sie daran, dass dies Ihre Gelegenheit ist, kreativ zu werden und zu experimentieren. Probieren Sie verschiedene Prompt-Techniken aus, passen Sie Ihre Anweisungen an und sehen Sie, wie Copilot reagiert. Denken Sie daran: Es gibt kein Richtig oder Falsch – das Ziel ist es, zu lernen und Spaß zu haben!

### Copilot-Details

Vielleicht haben Sie bereits bemerkt, dass Copilot Ihnen in einer Sitzung bis zu 30 Antworten geben kann:

![Die Copilot-Detailanzeige zeigt ein Maximum von 30 Antworten.](./img/30%20answers.png)

Das bedeutet, dass Sie nach 30 Iterationen von vorne beginnen müssen. Bevor Sie also mit der zweiten Übung beginnen, klicken Sie auf die Schaltfläche "**Neues Thema**", um eine neue Sitzung zu starten.

In dieser Übung nutzen Sie Copilot, um verschiedene Elemente Ihres eigenen Raumfahrt-Startups zu generieren, wie z. B. den Namen, die Mission, das Logo und den Geschäftsplan. Außerdem lernen Sie, wie Sie verschiedene Prompt-Techniken anwenden können, wie z. B. Few-Shot-Prompts, Chain-of-Thought-Prompts und Tree-of-Thought-Prompts, um den Generierungsprozess zu leiten und hochwertige Ergebnisse zu erzielen.
</div>
<div class="step" markdown="1">

### Schritt 1: Kontext festlegen und die Persona Ihres Assistenten erstellen

Normalerweise verwenden Chat-Anwendungen mit großen Sprachmodellen (LLMs) eine **Systemnachricht** und Vorlagen, um die Regeln der Generierung festzulegen. Diese sind für den Benutzer in der Regel nicht sichtbar. Wir können die Systemnachricht für Copilot nicht ändern, aber wir können eine Nachricht bereitstellen, um unseren eigenen Kontext für die Sitzung zu definieren und unserem Assistenten eine Persona zuzuweisen. Dies ist eine gute Praxis, um das Gespräch fokussiert und kohärent zu halten und es Ihrem Assistenten zu ermöglichen, den richtigen Jargon und Ton für den Kontext zu verwenden.

In dieser Übung sollen Sie der CEO eines neuen Raumfahrt-Startups sein, und Copilot wird Ihr Executive Assistant, der Ihnen hilft, Ihre Ideen zu formen. Schreiben Sie einen Prompt wie diesen, aber denken Sie daran, ihn **an Ihre eigenen Vorlieben anzupassen** (z. B.: Sie müssen kein preisgekrönter Koch sein 😉):

```prompt
Du bist ein Executive Assistant eines preisgekrönten Kochs, der nun CEO eines hochmodernen Raumfahrt-Startups ist; deine Rolle ist vielseitig und entscheidend. Du besitzt ein tiefes Verständnis der Luft- und Raumfahrttechnik, das es dir ermöglicht, bedeutend zum Design und zur Logistik menschlicher Raumschiffe für den Mars beizutragen. Deine strategischen Planungsfähigkeiten helfen dir, langfristige Ziele zu setzen, Ressourcen effektiv zuzuweisen und sicherzustellen, dass jedes Projektziel mit der ehrgeizigen Vision des Unternehmens übereinstimmt.

Dein kreativer Input ist entscheidend, um innovative Lösungen zu entwickeln und ein Unternehmensimage zu gestalten, das den Geist des Startups verkörpert. Du bist in der Lage, komplexe technische Konzepte in umfassende Strategien zu übersetzen und so eine effektive Kommunikation zwischen den Abteilungen zu fördern. Deine Projektmanagement-Expertise stellt sicher, dass alle Initiativen fehlerfrei umgesetzt werden und das Engagement des Unternehmens für die Pionierarbeit in der Raumfahrt widerspiegeln.

Deine persönlichen Eigenschaften machen dich außergewöhnlich. Deine Leidenschaft für den Weltraum, deine visionäre Denkweise und dein proaktives Wesen ermöglichen es dir, Herausforderungen vorauszusehen und mit Widerstandsfähigkeit zu meistern. Detailorientiert und anpassungsfähig bewahrst du auch unter Druck die Ruhe und bist eine unverzichtbare Unterstützung für den CEO und die gesamte Organisation, während ihr gemeinsam das monumentale Ziel verfolgt, ein bemanntes Raumschiff zum Mars zu schicken.
```

Dies war wieder ein **Zero-Shot-Prompt**, wir legen lediglich den Kontext fest.

</div>
<div class="step" markdown="1">

### Schritt 2: Einen Namen für Ihr Raumfahrt-Startup generieren

Um einen Namen für Ihr Raumfahrt-Startup zu generieren, können Sie ein **Few-Shot-Prompt** verwenden, bei dem einige Beispiele für das gewünschte Ergebnis bereitgestellt werden, gefolgt von einer leeren Zeile, in der Bing Chat eine neue Ausgabe basierend auf den Beispielen ausfüllt. Zum Beispiel können Sie schreiben:

```prompt
Ich suche nach Namensideen für unser Startup, das bemannte Raumschiffe zum Mars baut und entsendet. 
Ich möchte, dass die Namen den besonderen Hintergrund unseres CEOs widerspiegeln und eine Zahl enthalten.

Meine Lieblings-Startup-Namen:
Virgin Galactic, SpaceX, SpaceExplorers

Generiere vier Namen für unser Raumfahrt-Startup: 
```

Sie können verschiedene Beispiele ausprobieren oder dem Prompt weitere Details hinzufügen, wie z. B. die Art der Dienstleistung oder des Produkts, das Ihr Startup anbietet, um unterschiedliche Ergebnisse zu erzielen.

Wenn Sie einen Namen gefunden haben, der Ihnen gefällt, teilen Sie ihn Copilot mit, damit er ihn für später speichert:

```prompt
Ich wähle [HIER IHREN BEVORZUGTEN NAMEN EINSETZEN], ich liebe ihn!
```

</div>
<div class="step" markdown="1">

### Schritt 3: Die Kosten bewerten

Ein Raumschiff mit Menschen zu schicken ist anspruchsvoll. Aber als Startup müssen wir Investoren zeigen, dass wir unsere Zahlen gemacht haben. Sie können **Chain-of-Thought-Prompts** verwenden, um das Modell dazu zu bringen, alle Details zu berücksichtigen. Es geht darum, die KI zu einer schrittweisen Problemlösung anzuleiten, um das gewünschte Ergebnis zu erzielen. Sie können z. B. schreiben:

```prompt
Berechne die Kosten für den Versand eines Raumschiffs mit einer sechsköpfigen Crew zum Mars. Diese erste Mission ist eine Einbahnstraße, daher müssen wir die Reisezeit und den Transport aller benötigten Materialien zum Überleben auf dem Mars berücksichtigen. Lass uns Schritt für Schritt denken.

Dieser Teil des Projekts heißt Budget.
```

Nachdem Sie die Kosten der Mission berechnet haben, möchten Sie vielleicht verschiedene Szenarien ausprobieren. Was wäre, wenn sich die Crewgröße änderte? Oder die Entfernung zum Mars variierte? Experimentieren Sie mit diesen Variablen und sehen Sie, wie sich die Kosten ändern.

Sie können Copilot auch bitten, eine Tabelle zu generieren, die in Excel bearbeitet werden kann:

```prompt
Kannst du eine Tabelle mit den Kosten der Marsmission für unterschiedliche Crewgrößen erstellen?
```

</div>
<div class="step" markdown="1">

### Schritt 4: Erstellen Sie einen Geschäftsplan

Da Sie von den Investoren herausgefordert werden, wenn Sie Ihren Plan präsentieren, können Sie die [**Tree-of-Thought**](https://www.promptingguide.ai/techniques/tot)-Prompting-Technik verwenden. Diese Technik hilft dem Modell, verschiedene Ideen zu generieren und die beste davon auszuwählen.

```prompt
Stellen Sie sich vor, unsere drei besten Ingenieure diskutieren über drei verschiedene Ideen für den Geschäftsplan unseres Startups. Generieren Sie diese und wählen Sie die beste aus.
```

**Verfeinerung und Iteration des Prompts**: Fordern Sie zusätzliche Verbesserungen des generierten Inhalts an. Zum Beispiel, erstellen Sie den vollständigen Plan basierend auf dieser Idee:

```prompt
Erstellen Sie nun basierend auf der Zusammenfassung und dem Budget den vollständigen Geschäftsplan mit den folgenden Abschnitten: der Zusammenfassung, der Marktanalyse, der Leistungsbeschreibung, der Vertriebsstrategie und dem Betriebsplan.

Dieser Teil der Projektarbeit wird Geschäftsplan genannt.
```

</div>
<div class="step" markdown="1">

### Schritt 5: Erstellen Sie eine Missionserklärung für Ihr Raumfahrt-Startup

Da wir nun umfangreiche Inhalte haben, können wir eine Missionserklärung für Ihr Raumfahrt-Startup erstellen. Zum Beispiel können Sie schreiben:

```prompt
Dieser Teil der Projektarbeit wird Missionserklärung genannt.

Schreiben Sie eine Missionserklärung, die unsere Ziele und die Werte des Unternehmens widerspiegelt.
```

</div>
<div class="step" markdown="1">

### Schritt 6: Erstellen Sie ein Logo für Ihr Unternehmen

Microsoft Copilot in Bing ist ein **multimodales** Modell, das bedeutet, dass es auch Bilder und Audio generieren und verstehen kann. In diesem Fall verfügt das LLM bereits über viele Informationen, sodass wir keine detaillierten Anweisungen geben müssen, sondern nur klar formulieren, was wir möchten. Bitten wir Copilot, ein Logo für unser Unternehmen zu erstellen:

```prompt
Dieser Teil des Projekts wird Unternehmensbranding genannt.

Erstellen Sie ein monochromatisches Logo in Rot für unser Unternehmen, das die Mission und Werte unseres Unternehmens widerspiegelt.
```

> Haben Sie bemerkt, dass Copilot den Prompt für DALL·E erstellt hat? Sie mussten nicht noch einmal erklären, dass es sich um ein Raumfahrtunternehmen handelt, das zum Mars fliegt, da es die Verknüpfungen genutzt hat, die bereits vorhanden waren. Sie können auch direkt zu https://www.bing.com/images/create gehen, um mit eigenen Prompts Bilder zu erstellen.

</div>
<div class="step" markdown="1">

### Schritt 7: Alles zusammenführen

In diesem Schritt verwenden Sie die KI, um den gesamten Inhalt, der während der vorherigen Übungen erstellt wurde, zu überprüfen und zusammenzufassen. Dieser Schritt ist entscheidend, um sicherzustellen, dass alle Elemente Ihres Projekts kohärent und auf Ihre Ziele abgestimmt sind.

So gehen Sie vor:

1. **Überprüfen:** Beginnen Sie damit, die KI zu bitten, den während der vorherigen Übungen erstellten Text zu überprüfen. Dadurch können Sie den gesamten Inhalt an einem Ort sehen und seine Gesamtqualität und Kohärenz bewerten.  
2. **Zusammenfassen:** Bitten Sie die KI anschließend, eine Zusammenfassung des gesamten Inhalts zu erstellen. Die Zusammenfassung sollte die wichtigsten Punkte aus jedem Teil des Projekts hervorheben, wie z. B. den Geschäftsplan, das Budget und das Unternehmensbranding.  
3. **Formatieren:** Bitten Sie die KI schließlich, den Inhalt in einer bestimmten Weise zu formatieren. Zum Beispiel könnten Sie möchten, dass jeder Teil des Projekts als separater Abschnitt mit eigenem Titel und eigener Beschreibung präsentiert wird. Dies macht den Inhalt leichter lesbar und verständlich.  

Denken Sie daran: Wie bei allen Interaktionen mit der KI müssen Sie möglicherweise Ihre Prompts verfeinern oder um zusätzliche Verbesserungen bitten, um das gewünschte Ergebnis zu erzielen. Scheuen Sie sich nicht, zu experimentieren und zu iterieren, bis Sie die gewünschten Ergebnisse erhalten.

Hier ist der empfohlene Prompt:

```prompt
Lass uns den gesamten Text, den wir für das Projekt geschrieben haben, überprüfen. Kannst du mir die zuletzt bearbeitete Version für diese Teile des Projekts geben:

* Geschäftsplan
* Budget
* Unternehmensbranding

Und füge am Anfang eine Zusammenfassung hinzu.

Kannst du es so formatieren:

## Titel ##

Beschreibung
```

Und jetzt können Sie anfangen, Ihre Investoren anzurufen, um Ihr Projekt vorzustellen!

Denken Sie darüber nach, was Sie ihnen zeigen möchten, und bitten Sie Copilot, es für Sie zu erstellen. Denken Sie daran: Sie sind der CEO eines Raumfahrt-Startups, und Sie müssen zeigen, dass Sie bereit sind, abzuheben!
</div>

</div>
<div class="section" markdown="1">

## Fazit  

<div class="step" markdown="1">

Herzlichen Glückwunsch zum Abschluss dieses Labs! Sie können unten Ihr Prompt-Hero-Abzeichen herunterladen.

Denken Sie daran: Der Schlüssel zur Beherrschung von KI ist Übung und Experimentieren. Scheuen Sie sich nicht, neue Dinge auszuprobieren, Fehler zu machen und daraus zu lernen. Experimentieren Sie weiter mit verschiedenen Prompts und Techniken und lassen Sie sich von Ihrer Kreativität mit KI leiten!

Während dieses Labs haben Sie praktische Erfahrungen im Erstellen und Verfeinern von Prompts gesammelt, KI-Sprachmodelle dazu angeleitet, den gewünschten Inhalt zu generieren, und KI-Tools für praktische Anwendungen genutzt.

Sie haben verschiedene Arten von Prompts kennengelernt, darunter Seed-Text-Prompts, bedingte Prompts, Multiple-Choice-Prompts, Zero-Shot-Prompts und Few-Shot-Prompts. Sie haben gesehen, wie diese Prompts das KI-Modell auf vielfältige Weise leiten können, von der Generierung kreativer Ideen bis hin zu detaillierten Berechnungen.

Durch die Erstellung von Elementen für ein fiktives Raumfahrt-Startup haben Sie auch gesehen, wie diese Techniken in realen Szenarien angewendet werden können. Ob Sie einen Firmennamen, eine Missionserklärung, einen Geschäftsplan oder ein Logo erstellen – Sie haben jetzt die Fähigkeiten, KI-Tools effektiv in Ihren eigenen Projekten einzusetzen.

Wir hoffen, dass Sie dieses Lab spannend und aufschlussreich fanden. Wir ermutigen Sie, KI-Tools wie Copilot in Ihren zukünftigen Projekten weiter zu erkunden und zu experimentieren. Denken Sie daran: Die Möglichkeiten sind so grenzenlos wie der Weltraum selbst.

Viel Spaß beim Prompten!  
![Sie sind der Prompt-Held](./img/prompt%20hero%20badge.png)

### Zusätzliche Ressourcen

Wenn Sie mehr erfahren möchten, finden Sie hier einige interessante Ressourcen, um Ihr Wissen über Prompt-Engineering und KI-Sprachmodelle zu erweitern:

* [Prompting Guide](https://www.promptingguide.ai): Ein umfassender Leitfaden zu Prompt-Techniken für KI-Sprachmodelle.  
* [OpenAI Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering/prompt-engineering): Ein Leitfaden zum Prompt-Engineering von den GPT-4-Entwicklern.  
* [Prompt Engineering Techniques](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering): Tipps und Tricks für Prompts mit dem Azure OpenAI Service.

</div>
</div>
<div class="section" markdown="1">

## Glossar  

<div class="step" markdown="1">
1. **KI-Begleiter**: Ein künstliches Intelligenzsystem, das Benutzer bei verschiedenen Aufgaben unterstützt.  
2. **Prompt**: Ein Befehl oder eine Aussage, die die KI bei der Generierung von Inhalten leitet.  
3. **Seed-Text-Prompt**: Eine einfache, offene Aussage oder Frage, die als Ausgangspunkt für KI-generierte Inhalte dient.  
4. **Bedingter Prompt**: Ein Prompt-Typ, bei dem die KI angewiesen wird, Inhalte basierend auf bestimmten Bedingungen oder Kriterien zu generieren.  
5. **Multiple-Choice-Prompts**: Prompts, bei denen der KI mehrere Optionen präsentiert werden, aus denen sie die geeignetste auswählen oder empfehlen soll.  
6. **Zero-Shot-Prompts**: Diese Prompts liefern keine Beispiele; sie fordern das Modell direkt auf, eine Frage zu beantworten, und verlassen sich dabei auf die Trainingsdaten, um die Antwort zu finden.  
7. **Few-Shot-Prompt**: Ein Typ von Prompt, der einige Beispiele des gewünschten Outputs enthält, gefolgt von einer leeren Zeile, in der die KI basierend auf den Beispielen einen neuen Output erzeugt.  
8. **Chain-of-Thought-Prompting**: Eine Technik, bei der die KI schrittweise durch das Problem geführt wird, um sie zur gewünschten Ausgabe zu bringen.  
9. **Tree-of-Thought-Prompting**: Eine Technik, die der KI hilft, verschiedene Ideen zu generieren und die beste davon auszuwählen.  
10. **Multimodales Modell**: Ein KI-Modell, das verschiedene Datentypen wie Text, Bilder und Audio verstehen und generieren kann.  
11. **Systemnachricht**: Eine Nachricht, die die Regeln für den Generierungsprozess in KI-Chat-Apps festlegt.  
12. **Vorlagen**: Vordefinierte Formate oder Strukturen, die den Generierungsprozess in KI-Chat-Apps leiten.  
13. **Kontext**: Die Informationen, die dem Prompt vorausgehen und die Antwort der KI beeinflussen.  
14. **Sitzung**: Eine Folge von Interaktionen mit dem KI-Modell.  

*Diese Definitionen sind spezifisch für diesen Leitfaden und die Nutzung von Microsofts KI-Begleiter Copilot. Die Definitionen können in anderen Kontexten oder mit verschiedenen KI-Systemen leicht variieren.*  
</div>  
</div>
<div class="section" markdown="1">

## Einige weitere Beispiel-Prompts  

<div class="step" markdown="1">
Hier sind einige weitere Beispiele für jeden in diesem Leitfaden erwähnten Prompt-Typ:  

1. **Seed-Text-Prompt**:  
   * "Künstliche Intelligenz ist"  
   * "Die Zukunft der Weltraumforschung liegt in"  
2. **Bedingter Prompt**:  
   * "Beschreibe einen Tag im Leben eines Astronauten, der sich auf eine Mission zum Mars vorbereitet."  
   * "Stelle dir ein Szenario vor, in dem eine KI Präsident eines Landes wird. Schreibe eine Kurzgeschichte basierend darauf."  
3. **Multiple-Choice-Prompts**:  
   * "Welche der folgenden Programmiersprachen eignet sich am besten für Data Science?  
     A) JavaScript  
     B) Python  
     C) C++  
     D) Swift"  
   * "Was ist die beste Möglichkeit, zur Arbeit zu kommen?  
     A) Zu Fuß  
     B) Mit dem Fahrrad  
     C) Mit dem Auto  
     D) Mit öffentlichen Verkehrsmitteln"  
4. **Zero-Shot-Prompts**:  
   * "Übersetze den folgenden Satz ins Französische: 'Der Himmel ist heute klar.'"  
   * "Löse die folgende Gleichung: 2x + 3 = 9."  
5. **Few-Shot-Prompts**:  
   * "Einige mögliche Namen für eine Fitness-App sind:  
     * FitBuddy  
     * HealthTrack  
     * WorkoutPal  
     Generiere drei Namen für unsere Fitness-App, die sich auf Heimtraining konzentriert:"  
   * "Hier sind einige Slogans für eine Bäckerei:  
     * 'Frische, die man schmeckt'  
     * 'Mit Liebe gebacken'  
     * 'Ihr tägliches Brot'  
     Generiere drei Slogans für unsere Bäckerei, die sich auf glutenfreie Produkte spezialisiert:"  
6. **Chain-of-Thought-Prompting**:  
   * "Lass uns eine 3-tägige Reise nach New York planen. Beginne damit, die Orte auszuwählen, die wir besuchen wollen, und entscheide dann, in welcher Reihenfolge wir sie besuchen sollten, um Reisezeit zu sparen."  
   * "Wir müssen eine Überraschungsgeburtstagsfeier für unseren Freund planen. Beginne damit, aufzuschreiben, was wir brauchen, und entscheide dann, in welcher Reihenfolge wir alles organisieren sollten."  
7. **Tree-of-Thought-Prompting**:  
   * "Drei unserer besten Köche erstellen ein neues Menü für unser Restaurant. Sie diskutieren über die Hauptgerichte und haben drei verschiedene Ideen. Generiere diese und wähle basierend auf deinem Fachwissen die beste aus."  
   * "Unser Marketingteam brainstormt Ideen für unsere nächste Werbekampagne. Sie haben drei verschiedene Konzepte. Generiere diese und wähle das beste aus."  

Denken Sie daran, die Prompts auf Ihre spezifischen Bedürfnisse und Ziele zuzuschneiden, und scheuen Sie sich nicht, mit verschiedenen Formaten und Stilen zu experimentieren, um die besten Ergebnisse zu erzielen.  
</div>  
</div>

