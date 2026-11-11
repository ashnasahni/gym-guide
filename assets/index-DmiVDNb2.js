(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=864e5;function t(t,n){return t===null?1/0:(n.getTime()-new Date(t).getTime())/e}function n(e,n){return e.workoutLog.length>=3&&t(e.lastBackupAt,n)>30&&t(e.backupNudgeDismissedAt,n)>14}function r(){return`
    <section class="card backup-nudge">
      <h2>Save a backup</h2>
      <p class="hint">Your workouts live only on this phone. If you clear your browser or get a new phone, they are gone. A backup file keeps them safe.</p>
      <div class="button-row">
        <button type="button" class="primary" data-action="save-backup">Save a backup</button>
        <button type="button" class="secondary" data-action="dismiss-backup-nudge">Not now</button>
      </div>
    </section>`}var i=[`lb`,`kg`],a=2.2046226218;function o(e,t){return t===`kg`?Math.round(e/a*2)/2:e}function s(e,t){return t===`kg`?Math.round(e*a*100)/100:e}function c(e){return Number.isInteger(e)?String(e):e.toFixed(1)}function l(e,t){return`${c(o(e,t))} ${t}`}function u(e){return e===`kg`?2.5:5}function d(e){return e===`kg`?`kilograms`:`pounds`}function f(e,t){return Math.round((t===`kg`?e*a:e)*100)/100}function p(e,t){return Math.round((t===`kg`?e/a:e)*10)/10}function m(e,t){return`${c(p(e,t))} ${t}`}function h(e,t){let n=Number(e.trim());if(e.trim()===``||!Number.isFinite(n))return`Enter your weight in ${t}.`;let r=f(n,t);return r<60||r>700?`Enter a weight between ${Math.ceil(p(60,t))} and ${Math.floor(p(700,t))} ${t}.`:null}function g(e,t,n){return[...e.filter(e=>e.date!==t),{date:t,pounds:n}].sort((e,t)=>e.date.localeCompare(t.date)).slice(-730)}function _(e){return e.length<2?null:e[e.length-1].pounds-e[0].pounds}function v(e,t){let n=Math.round(Math.abs(p(Math.abs(e),t))*10)/10;return n===0?`No change`:`${e<0?`Down`:`Up`} ${c(n)} ${t}`}function y(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function b(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function x(e){let t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t}var S={"machine-chest-press":{id:`machine-chest-press`,name:`Machine Chest Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`chest-press`],setup:[`Set the seat so the handles line up with the middle of your chest.`,`Sit with your back and head flat against the pad, feet flat on the floor.`],steps:[`Grip the handles and press them forward until your arms are almost straight.`,`Bring them back slowly, about 2 seconds, until you feel a light stretch in your chest.`],mistakes:[`Seat too low, so your shoulders do the work instead of your chest.`,`Letting the weight stack slam between reps.`],stress:{shoulders:`moderate`},video:{youtubeId:`B-zyH8OTlsg`,channel:`Hammer Fitness`}},"dumbbell-bench-press":{id:`dumbbell-bench-press`,name:`Dumbbell Bench Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit on the end of a flat bench with dumbbells on your thighs.`,`Lie back, bringing the dumbbells to the sides of your chest.`],steps:[`Press both dumbbells up until your arms are straight above your chest.`,`Lower slowly until your elbows are a little below the bench.`],mistakes:[`Elbows flared straight out to the sides — keep them at about 45° from your body.`,`Arching your lower back off the bench.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`sTYWWaunX8o`,channel:`Born Fitness`}},"incline-dumbbell-press":{id:`incline-dumbbell-press`,name:`Incline Dumbbell Press`,muscles:`Upper chest, front shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline, about 30°.`,`Sit back with a dumbbell at each shoulder.`],steps:[`Press up and slightly in until your arms are straight.`,`Lower slowly back to shoulder level.`],mistakes:[`Bench set too steep, which turns it into a shoulder exercise.`,`Bouncing the weights at the bottom.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`c1ZX5ZXMQVk`,channel:`Vivian Ngo`}},"pec-deck-fly":{id:`pec-deck-fly`,name:`Pec Deck Fly`,muscles:`Chest`,equipment:[`pec-deck`],setup:[`Set the seat so the handles are at chest height.`,`Set the arms so you start with a comfortable stretch, not a deep one.`],steps:[`With a slight bend in your elbows, bring the handles together in front of you.`,`Squeeze for a second, then open slowly.`],mistakes:[`Starting with the arms pulled too far back.`,`Shrugging your shoulders up toward your ears.`],stress:{shoulders:`moderate`},video:{youtubeId:`hZ0CGRaKwbQ`,channel:`Hammer Fitness`}},"cable-fly":{id:`cable-fly`,name:`Cable Chest Fly`,muscles:`Chest`,equipment:[`cable`],setup:[`Set both pulleys at shoulder height with single handles.`,`Step forward into a split stance.`],steps:[`With soft elbows, bring the handles together in front of your chest.`,`Open back out slowly until your hands are in line with your chest.`],mistakes:[`Bending and straightening your elbows — it should be a hug, not a press.`],stress:{shoulders:`moderate`},video:{youtubeId:`pJDbn8Kyx0o`,channel:`StrengthLog`}},"machine-shoulder-press":{id:`machine-shoulder-press`,name:`Machine Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`shoulder-press`],setup:[`Set the seat so the handles start at about shoulder height.`,`Sit with your back flat against the pad.`],steps:[`Press the handles up until your arms are almost straight.`,`Lower slowly back to shoulder height.`],mistakes:[`Arching your lower back off the pad.`,`Pushing your head forward.`],stress:{shoulders:`moderate`},video:{youtubeId:`e5gJP7quyGk`,channel:`Vivian Ngo`}},"seated-dumbbell-shoulder-press":{id:`seated-dumbbell-shoulder-press`,name:`Seated Dumbbell Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench upright with your back supported.`,`Hold a dumbbell at each shoulder, palms forward.`],steps:[`Press up until your arms are straight overhead.`,`Lower slowly back to your shoulders.`],mistakes:[`Leaning back and arching to push heavier weight.`],stress:{shoulders:`moderate`,lowerBack:`moderate`},video:{youtubeId:`fuQpuu--bMI`,channel:`That Fit Friend`}},"dumbbell-lateral-raise":{id:`dumbbell-lateral-raise`,name:`Seated Lateral Raise`,muscles:`Side shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench holding light dumbbells at your sides.`],steps:[`Raise your arms out to the side until they are level with your shoulders.`,`Lower slowly over about 2 seconds.`],mistakes:[`Shrugging — keep your shoulders pressed down, away from your ears.`,`Going too heavy and swinging the weights up.`],stress:{neckUpperBack:`moderate`},video:{youtubeId:`yKAxVcU3nfw`,channel:`Vivian Ngo`}},"cable-tricep-pushdown":{id:`cable-tricep-pushdown`,name:`Cable Tricep Pushdown`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley high with a rope or straight bar.`,`Stand close with your elbows tucked at your sides.`],steps:[`Push down until your arms are straight, without moving your elbows.`,`Let it rise slowly back to about chest height.`],mistakes:[`Elbows drifting forward.`,`Leaning your whole body over the bar.`],stress:{},video:{youtubeId:`d-ySLTHUgQA`,channel:`Vivian Ngo`}},"overhead-cable-extension":{id:`overhead-cable-extension`,name:`Overhead Cable Tricep Extension`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley low with a rope.`,`Face away from the machine, rope behind your head.`],steps:[`Straighten your arms overhead.`,`Bend your elbows slowly to lower the rope behind your head.`],mistakes:[`Elbows flaring wide.`,`Arching your lower back.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`mRozZKkGIfg`,channel:`Bodybuilding.com`}},"assisted-dip":{id:`assisted-dip`,name:`Assisted Dip`,muscles:`Triceps, chest`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the dip handles.`],steps:[`Lower until your elbows are at about 90°.`,`Push back up to straight arms.`],mistakes:[`Going too deep, which strains the front of the shoulder.`],stress:{shoulders:`high`,wrists:`moderate`},video:{youtubeId:`slD5hhM_thg`,channel:`UMW Campus Recreation`},weightKind:`assist`},"lat-pulldown":{id:`lat-pulldown`,name:`Lat Pulldown`,muscles:`Upper back (lats), biceps`,equipment:[`lat-pulldown`],setup:[`Set the knee pad so your thighs are snug underneath it.`,`Grip the bar a little wider than your shoulders.`],steps:[`Pull the bar down to your upper chest, leading with your elbows.`,`Let it rise slowly until your arms are straight.`],mistakes:[`Pulling the bar behind your neck — always pull to the front.`,`Leaning far back and using momentum.`],stress:{wrists:`moderate`},video:{youtubeId:`oMJmAHRZXBk`,channel:`UC Davis Health`}},"assisted-pullup":{id:`assisted-pullup`,name:`Assisted Pull-Up`,muscles:`Upper back (lats), biceps`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the top handles.`],steps:[`Pull yourself up until your chin is over the handles.`,`Lower slowly to straight arms.`],mistakes:[`Craning your neck to get your chin over.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`fnHeovkmkkk`,channel:`Fitness 19`},weightKind:`assist`},"chest-supported-row":{id:`chest-supported-row`,name:`Chest-Supported Dumbbell Row`,muscles:`Mid back, rear shoulders, biceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline and lie face down on it, chest on the pad.`,`Let a dumbbell hang straight down from each hand.`],steps:[`Pull the dumbbells up toward your hips, squeezing your shoulder blades together.`,`Lower slowly until your arms are straight.`],mistakes:[`Lifting your chest off the pad.`,`Shrugging the weights up instead of rowing.`],stress:{},video:{youtubeId:`Nx0TzjgsI-0`,channel:`PureGym`}},"seated-cable-row":{id:`seated-cable-row`,name:`Seated Cable Row`,muscles:`Mid back, biceps`,equipment:[`seated-row`],setup:[`Sit with feet on the footplates and knees slightly bent.`,`Grip the handle and sit up tall.`],steps:[`Pull the handle to your belly button, squeezing your shoulder blades together.`,`Let your arms straighten slowly without rounding your back.`],mistakes:[`Rocking your torso back and forth.`,`Rounding your lower back as the handle goes forward.`],stress:{lowerBack:`moderate`},video:{youtubeId:`oFtfkSElE0s`,channel:`Hammer Fitness`}},"face-pull":{id:`face-pull`,name:`Cable Face Pull`,muscles:`Rear shoulders, upper back`,equipment:[`cable`],setup:[`Set the pulley at about face height with a rope.`,`Hold the rope ends with thumbs pointing back.`],steps:[`Pull the rope toward your face, splitting the ends apart beside your ears.`,`Return slowly with control.`],mistakes:[`Going heavy — this is a light, controlled exercise.`,`Shrugging toward your ears.`],stress:{},video:{youtubeId:`eTCBSFlCJ_s`,channel:`NASM`}},"reverse-pec-deck":{id:`reverse-pec-deck`,name:`Reverse Pec Deck`,muscles:`Rear shoulders, upper back`,equipment:[`pec-deck`],setup:[`Sit facing the pad, chest against it.`,`Set the handles so your arms start in front of you.`],steps:[`With slightly bent elbows, open your arms out to the side.`,`Return slowly.`],mistakes:[`Shrugging your shoulders up.`,`Swinging the weight.`],stress:{},video:{youtubeId:`v0rJuhEa59c`,channel:`FIT.nl`}},"dumbbell-curl":{id:`dumbbell-curl`,name:`Seated Dumbbell Curl`,muscles:`Biceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench with a dumbbell in each hand, palms forward.`],steps:[`Curl the weights up, keeping your elbows at your sides.`,`Lower slowly to straight arms.`],mistakes:[`Swinging your body to lift the weight.`,`Elbows drifting forward.`],stress:{wrists:`moderate`},video:{youtubeId:`SW5JS2Wf2uQ`,channel:`Horton Barbell`}},"cable-curl":{id:`cable-curl`,name:`Cable Curl`,muscles:`Biceps`,equipment:[`cable`],setup:[`Set the pulley low with a straight bar.`,`Stand close with elbows at your sides.`],steps:[`Curl the bar up toward your shoulders.`,`Lower slowly.`],mistakes:[`Leaning back to help the weight up.`],stress:{wrists:`moderate`},video:{youtubeId:`0TtZgAuC8Vw`,channel:`Holly Perkins`}},"hammer-curl":{id:`hammer-curl`,name:`Seated Hammer Curl`,muscles:`Biceps, forearms`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright with dumbbells at your sides, palms facing each other.`],steps:[`Curl up keeping your palms facing each other.`,`Lower slowly.`],mistakes:[`Swinging the weights.`],stress:{},video:{youtubeId:`bdlqQAVdcEk`,channel:`Vivian Ngo`}},"leg-press":{id:`leg-press`,name:`Leg Press`,muscles:`Thighs, glutes`,equipment:[`leg-press`],setup:[`Sit back with your lower back flat against the pad.`,`Feet shoulder-width apart, in the middle or slightly high on the platform.`],steps:[`Release the safety handles and lower the platform slowly.`,`Stop when your knees reach about 90°, before your lower back starts to lift off the pad.`,`Push back up through your whole foot, without locking your knees.`],mistakes:[`Going so deep your hips curl up off the seat.`,`Knees caving inward — keep them pointing the same way as your toes.`],stress:{knees:`moderate`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`90NY9tka1TQ`,channel:`Vivian Ngo`}},"barbell-back-squat":{id:`barbell-back-squat`,name:`Barbell Back Squat`,muscles:`Thighs, glutes, core`,equipment:[`squat-rack`],setup:[`Set the bar at upper-chest height.`,`Step under it and rest it across your upper back.`],steps:[`Squat down until your thighs are about parallel to the floor.`,`Drive back up through your feet.`],mistakes:[`Knees caving in.`,`Rounding your back at the bottom.`],stress:{knees:`high`,lowerBack:`high`,neckUpperBack:`moderate`,feet:`moderate`},video:{youtubeId:`8PMjqgR8Wa8`,channel:`Barbell Rehab`}},"goblet-squat":{id:`goblet-squat`,name:`Goblet Squat`,muscles:`Thighs, glutes`,equipment:[`dumbbells`],setup:[`Hold one dumbbell upright against your chest.`,`Feet slightly wider than shoulders, toes turned out a little.`],steps:[`Sit down between your heels, keeping your chest up.`,`Stand back up.`],mistakes:[`Heels lifting off the floor.`,`Knees caving in.`],stress:{knees:`high`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`zsN2WvklwDk`,channel:`Janice Liang`}},"glute-bridge":{id:`glute-bridge`,name:`Dumbbell Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[`dumbbells`,`mat`],setup:[`Lie on your back on a mat, knees bent, feet flat and hip-width apart.`,`Rest a dumbbell across your hips and hold it in place.`],steps:[`Squeeze your glutes and lift your hips until your body is straight from knees to shoulders.`,`Hold for a second, then lower slowly.`],mistakes:[`Arching your lower back at the top — the lift should come from your glutes.`],stress:{},video:{youtubeId:`PSMW7iSi2BU`,channel:`Holly Perkins`}},"dumbbell-romanian-deadlift":{id:`dumbbell-romanian-deadlift`,name:`Dumbbell Romanian Deadlift`,muscles:`Hamstrings, glutes`,equipment:[`dumbbells`],setup:[`Stand holding dumbbells in front of your thighs, knees slightly bent.`],steps:[`Push your hips back and lower the weights along your legs, back flat.`,`Stand back up by squeezing your glutes.`],mistakes:[`Rounding your back.`,`Turning it into a squat by bending your knees a lot.`],stress:{lowerBack:`high`},video:{youtubeId:`dNQucsVf90I`,channel:`Vivian Ngo`}},"seated-leg-curl":{id:`seated-leg-curl`,name:`Leg Curl`,muscles:`Hamstrings`,equipment:[`leg-curl`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit just above your heels.`],steps:[`Bend your knees to pull the pad down and back.`,`Return slowly to almost straight.`],mistakes:[`Letting the weight snap your legs straight.`,`Lifting your hips to cheat the weight.`],stress:{knees:`moderate`},video:{youtubeId:`_2Kd0d-JEUM`,channel:`NASM`}},"hip-abduction":{id:`hip-abduction`,name:`Hip Abduction Machine`,muscles:`Outer glutes`,equipment:[`hip-abduction`],setup:[`Sit with your back against the pad, pads on the outside of your knees.`],steps:[`Push your knees outward.`,`Return slowly without letting the weights touch.`],mistakes:[`Rocking your body to move the weight.`],stress:{},video:{youtubeId:`5O_Y9l__iao`,channel:`Hammer Fitness`}},"leg-extension":{id:`leg-extension`,name:`Leg Extension`,muscles:`Front of thighs`,equipment:[`leg-extension`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit on your lower shins.`],steps:[`Straighten your legs.`,`Lower slowly.`],mistakes:[`Kicking the weight up fast.`],stress:{knees:`high`},video:{youtubeId:`MXvSzXEBOTI`,channel:`Steev`}},"dead-bug":{id:`dead-bug`,name:`Dead Bug`,muscles:`Deep core`,equipment:[`mat`],setup:[`Lie on your back with arms pointing up and knees bent at 90° above your hips.`],steps:[`Press your lower back gently into the mat.`,`Slowly lower one arm and the opposite leg toward the floor, then return. Switch sides.`],mistakes:[`Letting your lower back lift off the mat — make the movement smaller if it does.`],stress:{},video:{youtubeId:`bxn9FBrt4-A`,channel:`NASM`},weightKind:`bodyweight`},"pallof-press":{id:`pallof-press`,name:`Cable Pallof Press`,muscles:`Core, obliques`,equipment:[`cable`],setup:[`Set a cable at chest height with a single handle.`,`Stand side-on to the machine, holding the handle at your chest with both hands.`],steps:[`Press the handle straight out in front of you without letting it pull you sideways.`,`Hold for 2 seconds, bring it back. Do both sides.`],mistakes:[`Twisting toward the machine.`],stress:{},video:{youtubeId:`SY5lRzBPtM4`,channel:`Fitness Lab`}},"cable-crunch":{id:`cable-crunch`,name:`Cable Crunch`,muscles:`Abs`,equipment:[`cable`],setup:[`Set the pulley high with a rope.`,`Kneel facing the machine, rope beside your head.`],steps:[`Crunch down, bringing your elbows toward your knees.`,`Rise back up slowly.`],mistakes:[`Pulling with your arms instead of your abs.`,`Yanking your neck forward.`],stress:{lowerBack:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`0KEP6A1deBE`,channel:`Travis Tarrant`}},"side-plank":{id:`side-plank`,name:`Side Plank`,muscles:`Obliques, core`,equipment:[`mat`],setup:[`Lie on your side, propped up on your forearm, elbow under your shoulder.`],steps:[`Lift your hips so your body is a straight line.`,`Hold for 20–30 seconds. Switch sides.`],mistakes:[`Hips sagging toward the floor.`],stress:{shoulders:`moderate`},video:{youtubeId:`0M-erHBl48U`,channel:`Heal Fit Physio`},weightKind:`bodyweight`,timedSeconds:{min:20,max:30}}},ee={"home-dead-bug":{...S[`dead-bug`],id:`home-dead-bug`,name:`Dead Bug (at home)`,equipment:[]},"home-side-plank":{...S[`side-plank`],id:`home-side-plank`,name:`Side Plank (at home)`,equipment:[]},"bird-dog":{id:`bird-dog`,name:`Bird Dog`,muscles:`Deep core, lower back, glutes`,equipment:[],setup:[`Kneel on all fours on a mat, towel, or carpet, with your hands under your shoulders and your knees under your hips.`,`Keep your back flat and your neck long, eyes on the floor.`],steps:[`Tighten your belly and slowly reach one arm forward and the opposite leg straight back.`,`Hold for a second without letting your hips tilt or your back sag.`,`Bring them back with control, then switch sides.`],mistakes:[`Arching your lower back as the leg lifts: only raise it as high as your back stays flat.`,`Rushing and swinging the arm and leg.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`KA0ekfSePrQ`,channel:`Tone and Tighten`},weightKind:`bodyweight`},"forearm-plank":{id:`forearm-plank`,name:`Forearm Plank`,muscles:`Abs, shoulders, glutes`,equipment:[],setup:[`Lie face down, then prop yourself up on your forearms with your elbows right under your shoulders.`,`Tuck your toes and lift your hips so your body makes one straight line.`],steps:[`Squeeze your glutes and brace your abs, as if bracing for a light punch.`,`Breathe steadily and hold. Stop when your form starts to slip.`,`Lower your knees to rest.`],mistakes:[`Letting your hips sag so your lower back arches.`,`Piking your hips up, which takes the work off your abs.`,`Holding your breath or craning your neck up.`],stress:{lowerBack:`moderate`,shoulders:`moderate`},video:{youtubeId:`gSDNblPRh1U`,channel:`Masterpiece Training`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"home-glute-bridge":{id:`home-glute-bridge`,name:`Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[],setup:[`Lie on your back with your knees bent and your feet flat on the floor, hip-width apart.`,`Rest your arms at your sides, palms down.`],steps:[`Press your lower back gently toward the floor, then push through your heels to lift your hips.`,`Stop when your shoulders, hips and knees make a straight line, and squeeze your glutes.`,`Lower slowly.`],mistakes:[`Lifting so high that your lower back arches: the lift should come from your glutes.`,`Pushing through your toes instead of your heels.`],stress:{},video:{youtubeId:`evOnUDkq9f4`,channel:`Girls Gone Strong`},weightKind:`bodyweight`},"bicycle-crunch":{id:`bicycle-crunch`,name:`Bicycle Crunch`,muscles:`Abs, obliques`,equipment:[],setup:[`Lie on your back with your hands lightly behind your head and your knees lifted.`,`Press your lower back gently into the floor.`],steps:[`Bring one elbow toward the opposite knee while you straighten the other leg.`,`Switch sides slowly, like pedaling a bike.`,`Keep your shoulders lifted off the floor the whole time.`],mistakes:[`Pulling on your neck with your hands: keep them light.`,`Going fast, which uses momentum instead of your abs.`,`Letting your lower back arch off the floor.`],stress:{neckUpperBack:`high`,lowerBack:`moderate`},video:{youtubeId:`eqg47ZuGZXQ`,channel:`UCLA Health`},weightKind:`bodyweight`},"mountain-climber":{id:`mountain-climber`,name:`Mountain Climber`,muscles:`Abs, shoulders, hips`,equipment:[],setup:[`Start in a high plank with your hands under your shoulders and your body in one straight line.`],steps:[`Drive one knee toward your chest, then switch legs, like running in place on the floor.`,`Keep your hips level and your core tight. Start slowly and speed up only if your form holds.`],mistakes:[`Hips bouncing up and down.`,`Letting your lower back sag.`,`Shoulders drifting behind your hands.`],stress:{knees:`high`,wrists:`moderate`,shoulders:`moderate`},video:{youtubeId:`gW-q50V6Z_0`,channel:`Born Fitness`},weightKind:`bodyweight`}},C={"chin-tuck":{id:`chin-tuck`,name:`Chin Tuck`,muscles:`Deep neck muscles`,equipment:[],setup:[`Sit or stand tall with your shoulders relaxed and your eyes looking straight ahead.`],steps:[`Slide your head straight back, as if making a double chin. Keep your chin level, not nodding down.`,`Hold for about 3 seconds, then relax.`,`Repeat slowly.`],mistakes:[`Tipping your chin down or up instead of sliding straight back.`,`Shrugging your shoulders or holding your breath.`,`Pushing into pain: go only as far as a gentle stretch.`],stress:{},video:{youtubeId:`h_1-7H0eOfo`,channel:`PhysioExercise`},weightKind:`bodyweight`},"open-book":{id:`open-book`,name:`Open Book`,muscles:`Upper back, chest, shoulders`,equipment:[],setup:[`Lie on your side with your knees bent and stacked, and your arms straight out in front with palms together.`],steps:[`Keeping your knees together, lift the top arm and open it toward the ceiling and behind you, letting your eyes follow your hand.`,`Pause for a breath, then bring it back slowly.`,`Do all your reps, then switch sides.`],mistakes:[`Letting your knees and hips roll back: the turn should come from your upper back.`,`Forcing your arm to the floor: stop where it feels comfortable.`],stress:{},video:{youtubeId:`917w2gqZwZQ`,channel:`Petroski Physio`},weightKind:`bodyweight`},"wall-slide":{id:`wall-slide`,name:`Wall Slide`,muscles:`Upper back, shoulders`,equipment:[],setup:[`Stand with your heels a few inches from a wall and press your head, upper back and hips against it.`,`Bend your elbows and rest your forearms and the backs of your hands on the wall, like a goalpost.`],steps:[`Slowly slide your arms up the wall as far as you can keep contact.`,`Slide them back down with control.`],mistakes:[`Arching your lower back or flaring your ribs to reach higher.`,`Letting your forearms leave the wall: go only as high as you can keep contact.`],stress:{shoulders:`moderate`},video:{youtubeId:`Eaj_NG5_hIo`,channel:`British Elbow & Shoulder Society`},weightKind:`bodyweight`},"cat-cow":{id:`cat-cow`,name:`Cat-Cow`,muscles:`Spine, hips`,equipment:[],setup:[`Get on your hands and knees, with your hands under your shoulders and your knees under your hips.`,`Put a folded towel or mat under your knees if the floor is hard.`],steps:[`Breathe in and let your belly drop as you gently lift your chest and tailbone.`,`Breathe out and round your back toward the ceiling, tucking your chin and tailbone.`,`Move slowly, letting your breath lead.`],mistakes:[`Forcing a bigger arch than feels good.`,`Rushing: let each breath lead the movement.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`xyNwxiuERXc`,channel:`FIT.nl`},weightKind:`bodyweight`},"figure-four-stretch":{id:`figure-four-stretch`,name:`Figure-4 Stretch`,muscles:`Glutes, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat.`,`Cross one ankle over the opposite knee to make a 4.`],steps:[`Keep your head and shoulders relaxed on the floor.`,`For more stretch, hold behind the lower thigh and draw it gently toward your chest.`,`Hold, breathing slowly, then switch sides.`],mistakes:[`Forcing the knee down.`,`Lifting your head or tensing your shoulders.`,`Stretching into sharp pain or tingling down your leg: stop if that happens.`],stress:{},video:{youtubeId:`PiJ_5AXTLOw`,channel:`Rapid Fitness`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"supine-twist":{id:`supine-twist`,name:`Lying Twist`,muscles:`Lower back, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat, arms out to the sides.`],steps:[`Let both knees fall slowly to one side while your shoulders stay on the floor.`,`Hold, breathing slowly, then bring them back and switch sides.`],mistakes:[`Letting the opposite shoulder lift off the floor.`,`Twisting past where it feels good: a pillow under your knees helps.`],stress:{},video:{youtubeId:`mNdJti7ZwKI`,channel:`Vive Health`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}}},w={...S,...ee,...C},T={push:{title:`Push — chest, shoulders, triceps`,slots:[{label:`Chest`,options:[`machine-chest-press`,`dumbbell-bench-press`]},{label:`Shoulders`,options:[`machine-shoulder-press`,`seated-dumbbell-shoulder-press`]},{label:`Upper chest`,options:[`incline-dumbbell-press`,`cable-fly`,`pec-deck-fly`]},{label:`Triceps`,options:[`cable-tricep-pushdown`,`overhead-cable-extension`,`assisted-dip`]},{label:`Side shoulders`,options:[`dumbbell-lateral-raise`]},{label:`Chest squeeze`,options:[`pec-deck-fly`,`cable-fly`]}]},pull:{title:`Pull — back, biceps`,slots:[{label:`Upper back`,options:[`lat-pulldown`,`assisted-pullup`]},{label:`Mid back`,options:[`chest-supported-row`,`seated-cable-row`]},{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]},{label:`Biceps`,options:[`dumbbell-curl`,`cable-curl`]},{label:`Second back`,options:[`seated-cable-row`,`assisted-pullup`,`chest-supported-row`]},{label:`Biceps & forearms`,options:[`hammer-curl`,`cable-curl`]}]},legs:{title:`Legs + Abs`,slots:[{label:`Thighs`,options:[`leg-press`,`barbell-back-squat`,`goblet-squat`]},{label:`Glutes`,options:[`glute-bridge`,`dumbbell-romanian-deadlift`]},{label:`Hamstrings`,options:[`seated-leg-curl`,`dumbbell-romanian-deadlift`]},{label:`Core`,options:[`dead-bug`,`pallof-press`]},{label:`Outer glutes`,options:[`hip-abduction`]},{label:`Abs`,options:[`pallof-press`,`side-plank`,`cable-crunch`]},{label:`Front thighs`,options:[`leg-extension`]}]},home:{title:`At-home abs — no equipment`,slots:[{label:`Deep core`,options:[`home-dead-bug`]},{label:`Back side`,options:[`bird-dog`]},{label:`Front core`,options:[`forearm-plank`,`home-dead-bug`]},{label:`Obliques`,options:[`home-side-plank`]},{label:`Hips`,options:[`home-glute-bridge`]},{label:`Lower abs`,options:[`bicycle-crunch`,`forearm-plank`]},{label:`Challenge`,options:[`mountain-climber`,`bicycle-crunch`]}]},mobility:{title:`Mobility reset — neck, upper back, hips`,slots:[{label:`Neck`,options:[`chin-tuck`]},{label:`Upper back`,options:[`open-book`]},{label:`Shoulders`,options:[`wall-slide`]},{label:`Spine`,options:[`cat-cow`,`supine-twist`]},{label:`Hips`,options:[`figure-four-stretch`]},{label:`Lower back`,options:[`supine-twist`,`cat-cow`]}]}},E={chest:{label:`Chest`,day:`push`,slotLabels:[`Chest`,`Upper chest`,`Chest squeeze`],extraSlots:[]},shoulders:{label:`Shoulders`,day:`push`,slotLabels:[`Shoulders`,`Side shoulders`],extraSlots:[{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]}]},triceps:{label:`Triceps`,day:`push`,slotLabels:[`Triceps`],extraSlots:[{label:`More triceps`,options:[`overhead-cable-extension`,`cable-tricep-pushdown`,`assisted-dip`]}]},back:{label:`Back`,day:`pull`,slotLabels:[`Upper back`,`Mid back`,`Second back`],extraSlots:[]},biceps:{label:`Biceps`,day:`pull`,slotLabels:[`Biceps`,`Biceps & forearms`],extraSlots:[{label:`More biceps`,options:[`dumbbell-curl`,`cable-curl`,`hammer-curl`]}]}};function te(e){return Object.keys(E).filter(t=>E[t].day===e)}var ne=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],D=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];function re(e,t,n,r=0){let i=y(e),a=b(x(e),7*r),o=new Map;for(let e of n)o.set(y(new Date(e.date)),e.day);return Array.from({length:7},(e,n)=>{let r=b(a,n),s=y(r),c={key:s,date:r,weekdayIndex:n,isToday:s===i},l=o.get(s);if(l)return{...c,status:`done`,workout:l};let u=t[n];return u?s<i?{...c,status:`missed`,workout:u}:{...c,status:`planned`,workout:u}:{...c,status:`rest`,workout:null}})}var ie=[`push`,`pull`,`legs`,`home`,`mobility`],ae=[`push`,`pull`,`legs`,`home`],O=[`push`,`pull`,`legs`],oe={new:4,some:5,experienced:7},k=`Pick a weight where the last 2 reps feel hard but your form stays clean.`,se={"lean-muscle":{new:{sets:3,repMin:10,repMax:12,restSeconds:90,tip:k},some:{sets:3,repMin:8,repMax:12,restSeconds:90,tip:k},experienced:{sets:4,repMin:8,repMax:12,restSeconds:90,tip:`Take the last set close to failure with good form.`}},strength:{new:{sets:3,repMin:8,repMax:10,restSeconds:120,tip:`Learn the movement before going heavy.`},some:{sets:4,repMin:6,repMax:8,restSeconds:120,tip:k},experienced:{sets:4,repMin:5,repMax:6,restSeconds:150,tip:k}},general:{new:{sets:2,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},some:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},experienced:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Keep rests short.`}}};function A(e){return`${e.sets} sets of ${e.repMin}–${e.repMax} reps, resting about ${e.restSeconds} seconds between sets. ${e.tip}`}function j(e,t){return e.timedSeconds?{...e.timedSeconds,unit:`seconds`}:{min:t.repMin,max:t.repMax,unit:`reps`}}var ce={new:{sets:2,repMin:10,repMax:12,restSeconds:45,tip:`Go slowly: quality matters more than speed.`},some:{sets:3,repMin:10,repMax:15,restSeconds:45,tip:`Go slowly and keep your lower back steady.`},experienced:{sets:3,repMin:12,repMax:20,restSeconds:30,tip:`Keep tension in your abs the whole time.`}},M={sets:2,repMin:8,repMax:10,restSeconds:15,tip:`Move slowly and stop short of any pain.`},N=(e,t)=>({text:e,video:t}),P=(e,t)=>({youtubeId:e,channel:t}),F=e=>{let t=w[e].video;if(!t)throw Error(`The built-in exercise ${e} has no demo video`);return t},I=N(`One light set of your first exercise at about half your usual weight.`),le=N(`Arm circles: 10 forward, then 10 backward.`,P(`4TJv9YmECjc`,`Leap Fitness`)),L=N(`Cross-body arm swings: swing your arms wide open, then hug yourself, 10 times.`,P(`AsMMF3YWIIM`,`Live Lean TV`)),ue=N(`Walking knee hugs: step forward and hug one knee to your chest, then the other, 10 steps in all.`,P(`m9vsPdnG3JQ`,`Total Health Systems`)),de=N(`Pelvic tilts: on your back with knees bent, gently flatten your lower back to the floor and release, 10 reps.`,P(`n8DU1desCy8`,`Rehab My Patient`)),fe=N(`Open books: lie on your side, knees bent, and slowly rotate your top arm open, 8 per side.`,F(`open-book`)),pe=N(`Child's pose: sit back on your heels with your arms reaching forward and breathe slowly for 20–30 seconds.`,P(`LEW-CfuMCbw`,`Zion Physical Therapy`)),R={mobility:[N(`Take 5 slow breaths: in through your nose, out through your mouth, shoulders relaxed.`)],home:[N(`Cat-cow on the floor: 10 slow reps, staying in a pain-free range.`,F(`cat-cow`)),de],push:[le,L,N(`Wall slides: stand with your back to a wall and slowly slide your arms up and down, 10 reps.`,F(`wall-slide`)),fe,I],pull:[le,N(`Shoulder rolls: 10 slow rolls backward.`,P(`X7NtgY9kCCM`,`Rehab My Patient`)),N(`Cat-cow: on hands and knees, slowly round and arch your back, 10 reps, staying in a pain-free range.`,F(`cat-cow`)),fe,I],legs:[N(`Leg swings: hold onto something steady and swing each leg forward and back 10 times, then side to side 10 times.`,P(`difYoBtZi2s`,`PureGym`)),N(`Hip circles: hands on hips, 10 slow circles each way.`,P(`qkrJXGVj_OQ`,`Live to Move Physical Therapy & Wellness`)),ue,N(`Bodyweight glute bridges: 10 slow reps on a mat.`,F(`home-glute-bridge`)),I]},me=N(`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,P(`aIq0fLi8iak`,`React Physical Therapy`)),he={mobility:[N(`Lie on your back with your knees bent and take 5 slow, deep belly breaths.`)],home:[pe,N(`Lying twist: on your back, let both knees fall to one side for 20–30 seconds. Each side.`,F(`supine-twist`)),N(`Slow breathing: lie on your back and take 5 slow, deep belly breaths.`)],push:[N(`Doorway chest stretch: forearm on a door frame or post, step through until you feel your chest stretch. Each side.`,P(`069o76BafTk`,`OMPT Specialists`)),me,N(`Overhead triceps stretch: reach one hand down your back and gently press the elbow with the other hand. Each side.`,P(`cPTrm13hSSo`,`PureGym`))],pull:[N(`Lat stretch: hold a post at chest height and sit your hips back until you feel it along your side.`,P(`vuUFADwPkXs`,`Nick Brattain`)),me,N(`Biceps stretch: palm flat on a wall behind you at shoulder height, then turn your body away. Each side.`,P(`BzPzDuIn1PA`,`LIVESTRONG`))],legs:[N(`Lying hamstring stretch: on your back, lift one straight leg and hold behind the thigh. Each side.`,P(`5P3E8Pec_L8`,`PureGym`)),N(`Figure-4 glute stretch: on your back, cross one ankle over the other knee and pull the bottom leg in. Each side.`,F(`figure-four-stretch`)),N(`Lying quad stretch: on your side, hold your top ankle and bring your heel toward you, only as far as is comfortable. Each side.`,P(`uRRwljV-Nlk`,`AskDoctorJo`))]},ge={neckUpperBack:[N(`Gentle neck stretch: tilt one ear toward your shoulder without pulling. Each side.`,P(`-r0eoFS7_5Q`,`AskDoctorJo`))],lowerBack:[N(`Knees to chest: on your back, hug both knees in gently and breathe slowly.`,P(`5R7eWaNWO3U`,`AskDoctorJo`))]},_e={neckUpperBack:[N(`Chin tucks: sit tall and gently slide your chin straight back, 10 slow reps.`,F(`chin-tuck`)),fe],lowerBack:[N(`Cat-cow on a mat: slowly round and arch your back, 10 reps, staying in a pain-free range.`,F(`cat-cow`))],knees:[N(`Keep the bike seat high enough that your knee is only slightly bent at the bottom.`)]},ve={knees:`Go easy on your knees: use a shorter range and stop before any knee pain.`,lowerBack:`Go easy on your lower back: keep it pressed against the pad and lift lighter.`,neckUpperBack:`Go easy on your neck: keep your shoulders down and your head still.`,feet:`Go easy on your feet: keep your whole foot flat and wear supportive shoes.`,shoulders:`Go easy on your shoulders: use a smaller range and lighter weight.`,wrists:`Go easy on your wrists: keep them straight, not bent back.`};function ye(e,t){return e.equipment.every(e=>t.has(e))}function be(e,t){return t.filter(t=>e.stress[t]===`moderate`)}function xe(e,t){return t.some(t=>e.stress[t]===`high`)}function Se(e,t,n,r){return e.options.map(e=>w[e]).filter(e=>!r.has(e.id)&&!t.avoidedExerciseIds.includes(e.id)).filter(e=>ye(e,n)).filter(e=>!xe(e,t.protectedAreas)).sort((e,n)=>be(e,t.protectedAreas).length-be(n,t.protectedAreas).length).map(n=>({exercise:n,slot:e,cautionAreas:be(n,t.protectedAreas)}))}function Ce(e,t,n,r){return Se(e.slot,t,new Set(n),new Set([...r,e.exercise.id]))}function we(e,t,n){if(e===`mobility`)return R.mobility;if(e===`home`){let e=t.protectedAreas.includes(`neckUpperBack`)?_e.neckUpperBack??[]:[];return[N(`2 minutes of marching in place to warm up.`),...e,...R.home]}let r=[N(n?`2 minutes on the stationary bike at an easy pace, just to get warm.`:`2 minutes of brisk walking, just to get warm.`),...t.protectedAreas.flatMap(e=>_e[e]??[]),...R[e]];return r.filter((e,t)=>!e.video||r.findIndex(t=>t.video?.youtubeId===e.video?.youtubeId)===t)}function Te(e,t){return e===`home`?ce[t.experience]:e===`mobility`?M:se[t.goal][t.experience]}function Ee(e,t){return e===`mobility`?he.mobility:[...he[e],...t.protectedAreas.flatMap(e=>ge[e]??[])]}var De={push:`Push`,pull:`Pull`};function Oe(e,t){let n=T[e],r=t?E[t]:null;if(!r||r.day!==e)return n.slots;let i=n.slots.filter(e=>r.slotLabels.includes(e.label)),a=n.slots.filter(e=>!r.slotLabels.includes(e.label));return[...i,...r.extraSlots,...a]}function ke(e,t,n,r=null,i=[]){let a=new Set(n),o=T[e],s=e===`mobility`?o.slots.length:oe[t.experience],c=Oe(e,r).slice(0,s),l=new Set,u=[];for(let e of c){let[n]=Se(e,t,a,l);n&&(l.add(n.exercise.id),u.push(n))}for(let e of i){let n=w[e];n&&!t.avoidedExerciseIds.includes(e)&&u.push({exercise:n,slot:{label:`My exercise`,options:[e]},cautionAreas:[]})}let d=we(e,t,a.has(`bike`)),f=Ee(e,t);return{day:e,title:r&&E[r].day===e?`${De[e]} — ${E[r].label.toLowerCase()} focus`:o.title,prescription:Te(e,t),warmUp:d,exercises:u,coolDown:f}}var z={push:`Push`,pull:`Pull`,legs:`Legs + Abs`,home:`At-home abs`,mobility:`Mobility reset`},Ae={push:`Push`,pull:`Pull`,legs:`Legs`,home:`Home`,mobility:`Reset`};function je(e,t,n){return`<h2 class="icon-title tone-${t}" data-icon="${e}">${n}</h2>`}function Me(e){return z[e]}function Ne(e,t,n=ie){return`<nav class="day-tabs" aria-label="${t}">${n.map(t=>`
      <button type="button" class="day-tab${t===e?` active`:``}" data-day="${t}" aria-pressed="${t===e}">
        ${z[t]}
      </button>`).join(``)}</nav>`}function Pe(e){return`https://www.youtube.com/watch?v=${e}`}function Fe(e,t=``){return`<ul class="${t}">${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function Ie(e,t=``){return`<ul class="${t}">${e.map(({text:e,video:t})=>{let n=e.split(`:`)[0];return`<li>${e}${t?` <a class="watch-link" href="${Pe(t.youtubeId)}" target="_blank" rel="noopener noreferrer" aria-label="Watch a demo of ${B(n)}, by ${B(t.channel)}">Watch ↗</a>`:``}</li>`}).join(``)}</ul>`}function Le(e){return e.cautionAreas.map(e=>`<p class="caution">${ve[e]}</p>`).join(``)}function Re(e){let{exercise:t}=e,n=e=>`<ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol>`,r=(e,t,n)=>t.length>0?`<h3>${e}</h3>${n(t)}`:``,i=t.video?`<a class="demo-link" href="${Pe(t.video.youtubeId)}" target="_blank" rel="noopener noreferrer">
      Watch the demo video ↗<small>by ${t.video.channel}</small>
    </a>`:``,a=t.custom?`<p class="hint">You added this exercise, so it has no steps or video. Use My machine settings to note how you set it up.</p>`:``;return`
    ${r(`Set up`,t.setup,n)}
    ${r(`How to do it`,t.steps,n)}
    ${r(`Avoid`,t.mistakes,e=>Fe(e,`mistakes`))}
    ${i}
    ${a}
  `}function B(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function V(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}var ze=`https://ashnasahni.github.io/gym-guide/`,Be={time:`18:00`,minutes:60},Ve=[30,45,60,90,120],He=[`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`];function Ue(e){return/^([01]\d|2[0-3]):[0-5]\d$/.test(e)}function We(e){return{time:e?.time!==void 0&&Ue(e.time)?e.time:Be.time,minutes:e?.minutes!==void 0&&Ve.includes(e.minutes)?e.minutes:Be.minutes}}function H(e){return String(e).padStart(2,`0`)}function Ge(e){return`${`${e.getFullYear()}${H(e.getMonth()+1)}${H(e.getDate())}`}T${H(e.getHours())}${H(e.getMinutes())}00`}function Ke(e){return`${`${e.getUTCFullYear()}${H(e.getUTCMonth()+1)}${H(e.getUTCDate())}`}T${H(e.getUTCHours())}${H(e.getUTCMinutes())}${H(e.getUTCSeconds())}Z`}function qe(e){return e.replace(/\\/g,`\\\\`).replace(/;/g,`\\;`).replace(/,/g,`\\,`).replace(/\r?\n/g,`\\n`)}function Je(e){let t=new TextEncoder,n=[],r=``,i=0,a=75;for(let o of e){let e=t.encode(o).length;i+e>a&&(n.push(r),r=``,i=0,a=74),r+=o,i+=e}return n.push(r),n.join(`\r
 `)}function Ye(e){return O.includes(e)?`${z[e]} day`:z[e]}function Xe(e){let[t,n]=e.split(`:`).map(Number);return`${t%12==0?12:t%12}:${String(n).padStart(2,`0`)} ${t<12?`AM`:`PM`}`}function Ze(e,t){return e.flatMap((e,n)=>e?[`${Ye(e)} on ${D[n]} at ${Xe(t.time)}`]:[])}function Qe(e,t,n){let[r,i]=n.split(`:`).map(Number),a=b(e,(t-(e.getDay()+6)%7+7)%7);return a.setHours(r,i,0,0),a<=e?b(a,7):a}function $e(e,t,n){return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Gym Guide//Weekly plan//EN`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`X-WR-CALNAME:Gym Guide`,...e.flatMap((e,r)=>{if(!e)return[];let i=Qe(n,r,t.time),a=new Date(i.getTime()+t.minutes*6e4);return[`BEGIN:VEVENT`,`UID:gym-guide-${r}@ashnasahni.github.io`,`DTSTAMP:${Ke(n)}`,`DTSTART:${Ge(i)}`,`DTEND:${Ge(a)}`,`RRULE:FREQ=WEEKLY;BYDAY=${He[r]}`,`SUMMARY:${qe(Ye(e))}`,`DESCRIPTION:${qe(`${T[e].title}\nOpen Gym Guide: ${ze}`)}`,`END:VEVENT`]}),`END:VCALENDAR`].map(Je).join(`\r
`)+`\r
`}var et=[{id:`dumbbells`,name:`Dumbbells`,hint:`Rack of free weights`},{id:`bench`,name:`Adjustable bench`,hint:`Flat or tilted bench`},{id:`mat`,name:`Floor mat`,hint:`Stretching / ab area`},{id:`cable`,name:`Cable machine`,hint:`Pulley tower with handles`},{id:`lat-pulldown`,name:`Lat pulldown`,hint:`Seated, pull a bar down`},{id:`seated-row`,name:`Seated cable row`,hint:`Seated, pull a handle in`},{id:`chest-press`,name:`Chest press machine`,hint:`Seated, push handles forward`},{id:`shoulder-press`,name:`Shoulder press machine`,hint:`Seated, push handles up`},{id:`pec-deck`,name:`Pec deck / rear delt fly`,hint:`Seated, arms swing together`},{id:`assisted-pullup`,name:`Assisted pull-up / dip`,hint:`Kneel on a pad that helps lift you`},{id:`leg-press`,name:`Leg press`,hint:`Seated, push a platform with your feet`},{id:`leg-curl`,name:`Leg curl machine`,hint:`Bend knees against a pad`},{id:`leg-extension`,name:`Leg extension machine`,hint:`Straighten knees against a pad`},{id:`hip-abduction`,name:`Hip abduction machine`,hint:`Seated, push knees outward`},{id:`squat-rack`,name:`Squat rack + barbell`,hint:`Barbell resting on hooks`},{id:`bike`,name:`Stationary bike`,hint:`For warm-ups`}],tt=et.map(e=>e.id),nt=[{title:`Free weights and floor`,ids:[`dumbbells`,`bench`,`mat`,`squat-rack`]},{title:`Upper body`,ids:[`cable`,`lat-pulldown`,`seated-row`,`chest-press`,`shoulder-press`,`pec-deck`,`assisted-pullup`]},{title:`Lower body`,ids:[`leg-press`,`leg-curl`,`leg-extension`,`hip-abduction`]},{title:`Warm-up`,ids:[`bike`]}];function rt(e){return e.replace(/\s+/g,` `).trim().slice(0,120)}function it(e,t,n=!1){let r=`
      <div class="machine-note-row">
        <input id="note-${e}" type="text" maxlength="120" data-field="machine-note"
          data-exercise="${e}" value="${B(t)}" placeholder="Seat 4, pin at 60" autocomplete="off" />
        <button type="button" class="secondary" data-action="save-note" data-exercise="${e}">Save</button>
      </div>`;return n?`
    <details class="card switcher machine-note folded">
      <summary><span>My machine settings</span>${t?`<span class="hint">${B(t)}</span>`:``}</summary>${r}
    </details>`:`
    <div class="machine-note">
      <label for="note-${e}">My machine settings</label>${r}
    </div>`}var at={easyWeeks:[],dismissedWeek:null},ot=6048e5;function st(e){return y(x(e))}function ct(e){return x(new Date(e.getTime()-ot+432e5))}function lt(e,t){return e.easyWeeks.includes(st(t))}function ut(e,t,n){let r=new Map;for(let t of e){let e=st(new Date(t.date));r.set(e,(r.get(e)??0)+1)}let i=x(t);if(n.includes(y(i)))return 0;let a=0;for((r.get(y(i))??0)>=2&&(a+=1);;){i=ct(i);let e=y(i);if(n.includes(e)||(r.get(e)??0)<2)return a;a+=1}}function dt(e,t,n){return lt(n,t)||n.dismissedWeek===st(t)?!1:ut(e,t,n.easyWeeks)>=6}function ft(e,t){let n=st(t);return{...e,easyWeeks:e.easyWeeks.includes(n)?e.easyWeeks:[...e.easyWeeks,n]}}function pt(e,t){let n=st(t);return{...e,easyWeeks:e.easyWeeks.filter(e=>e!==n)}}function mt(e,t){return{...e,dismissedWeek:st(t)}}var ht={waterGoal:8,proteinGoal:null,calorieGoal:null,days:{}},gt=6e3,_t=gt,vt=[{name:`2 eggs`,grams:12},{name:`Chicken breast (palm-size)`,grams:30},{name:`Greek yogurt (1 cup)`,grams:20},{name:`Protein shake (1 scoop)`,grams:25},{name:`Paneer (100 g)`,grams:18},{name:`Tofu (half block)`,grams:20},{name:`Dal / lentils (1 cup)`,grams:18},{name:`Milk (1 glass)`,grams:8}],yt=[{name:`2 eggs`,kcal:140},{name:`Roti (1)`,kcal:100},{name:`Rice (1 cup cooked)`,kcal:205},{name:`Dal / lentils (1 cup)`,kcal:230},{name:`Banana`,kcal:105},{name:`Greek yogurt (1 cup)`,kcal:130},{name:`Paneer (100 g)`,kcal:265},{name:`Chicken breast (palm-size)`,kcal:165},{name:`Protein shake (1 scoop)`,kcal:120},{name:`Peanut butter (2 tbsp)`,kcal:190},{name:`Oats (1 cup cooked)`,kcal:150},{name:`Milk (1 glass)`,kcal:150}];function U(e,t){let n=e.days[t]??{};return{glasses:n.glasses??0,protein:n.protein??[],calories:n.calories??[]}}function bt(e,t,n){return{...e,days:{...e.days,[t]:n}}}function xt(e,t,n){let r=U(e,t);return bt(e,t,{...r,glasses:Math.max(0,r.glasses+n)})}function St(e,t,n){let r=U(e,t);return bt(e,t,{...r,protein:[...r.protein,n]})}function Ct(e,t,n){let r=U(e,t);return bt(e,t,{...r,protein:r.protein.filter((e,t)=>t!==n)})}function wt(e,t,n){let r=U(e,t);return bt(e,t,{...r,calories:[...r.calories,n]})}function Tt(e,t,n){let r=U(e,t);return bt(e,t,{...r,calories:r.calories.filter((e,t)=>t!==n)})}function Et(e){return e.calories.reduce((e,t)=>e+t.kcal,0)}function Dt(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isInteger(n)||n<=0||n>6e3?`Enter the calories as a whole number, between 1 and ${_t}.`:null}function Ot(e){let t=Number(e);return e.trim()===``||!Number.isInteger(t)||t<500||t>6e3?`Enter a calorie goal as a whole number, between 500 and ${gt}.`:null}function kt(e){return e.protein.reduce((e,t)=>e+t.grams,0)}function At(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isFinite(n)||n<=0||n>300?`Enter the protein in grams, between 1 and 300.`:null}var jt=[`push`,`pull`,`legs`],Mt=/^custom-[a-z0-9]{3,24}$/;function Nt(e,t){return e.replace(/[^\p{L}\p{N} '’.,()/+-]/gu,``).replace(/\s+/g,` `).trim().slice(0,t)}function Pt(e){return Nt(e,40)}function Ft(e){return Nt(e,60)}function It(e,t,n){if(n>=30)return`You can add up to 30 of your own exercises. Remove one first.`;let r=Pt(e);return r.length<2?`Type a name for the exercise (at least 2 letters or numbers).`:t.some(e=>e.toLowerCase()===r.toLowerCase())?`There is already an exercise with that name. Try a different one.`:null}function Lt(e,t,n,r,i){let a=Math.floor(Math.random()*36**3).toString(36).padStart(3,`0`);return{id:`custom-${i.getTime().toString(36)}${a}`,name:Pt(e),muscles:Ft(t),day:n,bodyweight:r}}function Rt(e){return{id:e.id,name:e.name,muscles:e.muscles||`Added by you`,equipment:[],setup:[],steps:[],mistakes:[],stress:{},weightKind:e.bodyweight?`bodyweight`:`load`,custom:{day:e.day}}}function zt(e){for(let e of Object.keys(w))e.startsWith(`custom-`)&&delete w[e];for(let t of e)w[t.id]=Rt(t)}function Bt(e,t){return e.filter(e=>e.day===t).map(e=>e.id)}function Vt(e){if(!Array.isArray(e))return[];let t=new Set,n=new Set,r=[];for(let i of e.slice(0,60)){if(typeof i!=`object`||!i)continue;let{id:e,name:a,muscles:o,day:s,bodyweight:c}=i;if(typeof e!=`string`||!Mt.test(e)||t.has(e)||typeof a!=`string`||!jt.includes(s))continue;let l=Pt(a);if(!(l.length<2||n.has(l.toLowerCase()))&&(t.add(e),n.add(l.toLowerCase()),r.push({id:e,name:l,muscles:typeof o==`string`?Ft(o):``,day:s,bodyweight:c===!0}),r.length>=30))break}return r}var Ht=[{id:`lean-muscle`,label:`Build lean muscle`,detail:`Gain muscle for a toned look`},{id:`strength`,label:`Get stronger`,detail:`Lift heavier, fewer reps`},{id:`general`,label:`General fitness`,detail:`Lighter, steady routine`}],Ut=[{id:`new`,label:`New to lifting`},{id:`some`,label:`Some experience`},{id:`experienced`,label:`Experienced`}],Wt=[{id:`knees`,label:`Knees`},{id:`lowerBack`,label:`Lower back`},{id:`neckUpperBack`,label:`Neck / upper back`},{id:`feet`,label:`Feet / ankles`},{id:`shoulders`,label:`Shoulders`},{id:`wrists`,label:`Wrists`}],Gt=[`push`,null,`pull`,null,`legs`,null,null],Kt=[{days:3,plan:[`push`,null,`pull`,null,`legs`,null,null]},{days:4,plan:[`push`,`pull`,null,`legs`,null,`push`,null]},{days:5,plan:[`push`,`pull`,`legs`,null,`push`,`pull`,null]}],qt=[null,null,null,null,null,null,null],W={goal:`lean-muscle`,experience:`new`,protectedAreas:[],avoidedExerciseIds:[],weekPlan:Gt,focusPlan:qt};function Jt(e){let t=[null,null,null,null,null,null,null];return[...e].filter(e=>Number.isInteger(e)&&e>=0&&e<=6).sort((e,t)=>e-t).forEach((e,n)=>{t[e]=O[n%O.length]}),t}function Yt(e){let{gymDays:t,...n}=e,r={...W,...n};if(!n.weekPlan&&Array.isArray(t)){let e=Jt(t);e.some(Boolean)&&(r.weekPlan=e)}return r}function Xt(e){let t=Ht.find(t=>t.id===e.goal)?.label.toLowerCase()??`general fitness`,n=e.weekPlan.filter(Boolean).length,r=[t,`${n} ${n===1?`day`:`days`} a week`],i=Wt.filter(t=>e.protectedAreas.includes(t.id)).map(e=>e.label.toLowerCase());return i.length>0&&r.push(`protecting ${i.join(`, `)}`),`Planned for: ${r.join(` · `)}`}function Zt(e,t){let n=Array.isArray(e)?e:[];return t.map((e,t)=>{let r=n[t];return typeof r==`string`&&r in E&&E[r].day===e?r:null})}var Qt=`gymGuide.v1`;function $t(){return{profile:null,equipmentIds:[...tt],equipmentConfirmed:!1,history:{},session:null,nutrition:ht,workoutLog:[],calendar:Be,recovery:[],bodyWeights:[],customExercises:[],lastBackupAt:null,backupNudgeDismissedAt:null,weightUnit:`lb`,deload:{...at,easyWeeks:[]},machineNotes:{}}}var en=5e3,tn=50,nn=60,rn=/^[A-Za-z0-9][A-Za-z0-9_-]{0,59}$/,an=/^\d{4}-\d{2}-\d{2}$/;function G(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function on(e){return typeof e==`string`&&rn.test(e)}function K(e,t,n){return typeof e==`number`&&Number.isFinite(e)&&e>=t&&e<=n}function sn(e,t,n){return K(e,t,n)&&Number.isInteger(e)}function cn(e){return typeof e==`string`&&e.length<=40&&!Number.isNaN(Date.parse(e))}function ln(e){return typeof e==`string`&&an.test(e)&&!Number.isNaN(Date.parse(e))}function q(e){return Array.isArray(e)?e.slice(0,en):[]}function un(e){if(!G(e))return null;let t=e.weight===null?null:K(e.weight,0,1e3)?e.weight:void 0;return t===void 0||!K(e.amount,0,1e4)?null:{weight:t,amount:e.amount}}function dn(e){let t={};if(!G(e))return t;for(let[n,r]of Object.entries(e)){if(!on(n)||typeof r!=`string`)continue;let e=rt(r);e&&(t[n]=e)}return t}function fn(e){let t={};if(!G(e))return t;for(let[n,r]of Object.entries(e)){if(!on(n))continue;let e=[];for(let t of q(r)){if(!G(t)||!cn(t.date))continue;let n=q(t.sets).slice(0,tn).map(un).filter(e=>e!==null);e.push({date:t.date,sets:n})}e.length>0&&(t[n]=e)}return t}function pn(e){let t=ie;return q(e).flatMap(e=>G(e)&&cn(e.date)&&typeof e.day==`string`&&t.includes(e.day)?[{date:e.date,day:e.day}]:[])}function mn(e){let t=new Map;for(let n of q(e))G(n)&&ln(n.date)&&K(n.pounds,60,700)&&t.set(n.date,n.pounds);return[...t.entries()].sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>({date:e,pounds:t}))}function hn(e){return q(e).flatMap(e=>{if(!G(e)||!ln(e.date)||!sn(e.feel,1,5))return[];let t=e.hours===null?null:K(e.hours,0,24)?e.hours:null,n=e.readiness===null?null:K(e.readiness,0,100)?e.readiness:null;return[{date:e.date,feel:e.feel,hours:t,readiness:n}]})}function gn(e){if(typeof e!=`string`)return null;let t=e.trim().slice(0,nn);return t===``?null:t}function _n(e){let t=G(e)?e:{},n=q(t.protein).flatMap(e=>{let t=G(e)?gn(e.name):null;return G(e)&&t&&K(e.grams,0,300)?[{name:t,grams:e.grams}]:[]}),r=q(t.calories).flatMap(e=>{let t=G(e)?gn(e.name):null;return G(e)&&t&&K(e.kcal,0,6e3)?[{name:t,kcal:e.kcal}]:[]});return{glasses:sn(t.glasses,0,100)?t.glasses:0,protein:n,calories:r}}function vn(e){let t=G(e)?e:{},n={};if(G(t.days))for(let[e,r]of Object.entries(t.days))ln(e)&&(n[e]=_n(r));return{waterGoal:sn(t.waterGoal,1,20)?t.waterGoal:ht.waterGoal,proteinGoal:sn(t.proteinGoal,1,400)?t.proteinGoal:null,calorieGoal:sn(t.calorieGoal,500,6e3)?t.calorieGoal:null,days:n}}function yn(e){let t=ie;return!Array.isArray(e)||e.length!==7?[...W.weekPlan]:e.map(e=>typeof e==`string`&&t.includes(e)?e:null)}function bn(e){if(!G(e))return null;let t=Yt(e),n=yn(t.weekPlan),r=Ht.map(e=>e.id),i=Ut.map(e=>e.id),a=Wt.map(e=>e.id);return{goal:r.includes(t.goal)?t.goal:W.goal,experience:i.includes(t.experience)?t.experience:W.experience,protectedAreas:q(t.protectedAreas).filter(e=>typeof e==`string`&&a.includes(e)),avoidedExerciseIds:q(t.avoidedExerciseIds).filter(on),weekPlan:n,focusPlan:Zt(t.focusPlan,n)}}function xn(e){let t=G(e)?e:{};return{easyWeeks:q(t.easyWeeks).filter(ln).slice(-200),dismissedWeek:ln(t.dismissedWeek)?t.dismissedWeek:null}}function Sn(e,t={}){let n=$t();if(!G(e))return n;let r=e;return{profile:bn(r.profile),equipmentIds:Array.isArray(r.equipmentIds)&&r.equipmentIds.every(e=>typeof e==`string`)?q(r.equipmentIds).filter(on):n.equipmentIds,equipmentConfirmed:r.equipmentConfirmed===!0,history:fn(r.history),session:t.keepSession&&G(r.session)?r.session:null,nutrition:vn(r.nutrition),workoutLog:pn(r.workoutLog),calendar:We(G(r.calendar)?r.calendar:void 0),recovery:hn(r.recovery),bodyWeights:mn(r.bodyWeights),customExercises:Vt(r.customExercises),lastBackupAt:cn(r.lastBackupAt)?r.lastBackupAt:null,backupNudgeDismissedAt:cn(r.backupNudgeDismissedAt)?r.backupNudgeDismissedAt:null,weightUnit:i.find(e=>e===r.weightUnit)??n.weightUnit,deload:xn(r.deload),machineNotes:dn(r.machineNotes)}}function Cn(){try{let e=localStorage.getItem(Qt);return e?Sn(JSON.parse(e),{keepSession:!0}):$t()}catch{return $t()}}var wn=!1,Tn=null;function En(){return wn}function Dn(e){Tn=e}function J(e){let t=!0;try{localStorage.setItem(Qt,JSON.stringify(e))}catch{t=!1}return wn===t&&(wn=!t,Tn?.()),t}function On(e){let{root:t,state:n}=e;function r(e){let n=t.querySelector(`[data-body-weight-error]`);n&&(n.textContent=e,n.hidden=!1)}function i(){let i=t.querySelector(`input[data-field="body-weight"]`)?.value??``,a=h(i,n.weightUnit);if(a){r(a);return}let o=f(Number(i.trim()),n.weightUnit);n.bodyWeights=g(n.bodyWeights,y(new Date),o),J(n),e.render(),e.showToast(`Logged ${m(o,n.weightUnit)} for today.`)}return{handleAction(e){return e===`log-body-weight`&&(i(),!0)}}}function kn(e){let{root:t,state:n}=e,r=e=>t.querySelector(e)?.value??``;function i(e){let n=t.querySelector(`[data-custom-error]`);n&&(n.textContent=e,n.hidden=!1)}function a(){let t=r(`[data-field="custom-name"]`),a=It(t,Object.values(w).map(e=>e.name),n.customExercises.length);if(a){i(a);return}let o=r(`[data-field="custom-day"]`),s=jt.find(e=>e===o)??`push`,c=r(`[data-field="custom-kind"]`)===`bodyweight`,l=Lt(t,r(`[data-field="custom-muscles"]`),s,c,new Date);n.customExercises=[...n.customExercises,l],zt(n.customExercises),J(n),e.render(),e.showToast(`Added ${l.name} to your ${z[s]} workout.`)}function o(t){let r=n.customExercises.find(e=>e.id===t);r&&(n.customExercises=n.customExercises.filter(e=>e.id!==r.id),zt(n.customExercises),J(n),e.render(),e.showToast(`Removed ${r.name}.`))}return{handleAction(e,t){return e===`add-custom-exercise`?(a(),!0):e===`remove-custom-exercise`&&(o(t),!0)}}}function An(e,t){let n=e[t];return n?.[n.length-1]}function Y(e,t,n=`lb`){let r=e.sets.map(e=>e.amount).join(`, `),i=e.sets[e.sets.length-1]?.weight,a=t===`seconds`?` sec`:` reps`;return i==null?`${r}${a}`:`${l(i,n)} × ${r}${a}`}function jn(e,t,n,r={}){if(!e||e.sets.length===0)return{weight:null,message:n===`bodyweight`?`First time: aim for ${t.min}–${t.max} ${t.unit}.`:`First time: start light. Find a weight where the last 2 reps feel hard but your form stays clean.`};let i=e.sets.every(e=>e.amount>=t.max),a=e.sets.reduce((e,t)=>e+t.amount,0)/e.sets.length<t.min-2,l=e.sets[e.sets.length-1].weight;if(n===`bodyweight`||l===null)return{weight:null,message:i?`You hit ${t.max} on every set. Try a couple more ${t.unit} each set.`:`Aim for ${t.max} ${t.unit} on every set.`};let d=r.weightUnit??`lb`,f=o(l,d),p=u(d),m=e=>`${c(e)} ${d}`,h=n===`assist`?Math.max(0,f-p):f+p,g=n===`assist`?f+p:Math.max(0,f-p),_=s(h,d),v=s(g,d);return i?r.holdWeight?{weight:l,message:`Easy day: stay at ${m(f)} and keep the reps smooth.`}:{weight:_,message:n===`assist`?`You hit ${t.max} reps every set. Try ${m(h)} of help (a little less).`:`You hit ${t.max} reps every set. Try ${m(h)}.`}:a?{weight:v,message:`That was heavy. Try ${m(g)} and aim for ${t.min}–${t.max} reps.`}:{weight:l,message:`Stay at ${m(f)} and aim for ${t.max} reps on every set.`}}function Mn(e,t,n,r){let i=e[t]??[],a=i[i.length-1],o=a&&a.date===n?[...i.slice(0,-1),{...a,sets:[...a.sets,r]}]:[...i,{date:n,sets:[r]}];return{...e,[t]:o}}function Nn(e,t,n,r,i){let a=(e[t]??[]).map(e=>e.date===n&&r>=0&&r<e.sets.length?{...e,sets:e.sets.map((e,t)=>t===r?i:e)}:e);return{...e,[t]:a}}function Pn(e){let t=new Map;for(let[n,r]of Object.entries(e))for(let e of r){if(e.sets.length===0)continue;let r=t.get(e.date)??{date:e.date,entries:[]};r.entries.push({exerciseId:n,session:e}),t.set(e.date,r)}return[...t.values()].sort((e,t)=>t.date.localeCompare(e.date))}function Fn(e,t){let n=x(t);return Pn(e).filter(e=>new Date(e.date)>=n).length}function In(e,t){return e.filter(e=>e.sets.length>0).map(e=>{if(t===`bodyweight`)return Math.max(...e.sets.map(e=>e.amount));let n=e.sets.map(e=>e.weight??0);return t===`assist`?Math.min(...n):Math.max(...n)})}function Ln(e,t){let n=x(t),r=0;for(let t of Object.values(e))for(let e of t)new Date(e.date)>=n&&(r+=e.sets.length);return r}function Rn(e,t,n){let r=[];for(let[i,a]of Object.entries(e)){let e=n(i),o=a.filter(e=>e.sets.length>0);if(e===null||o.length<2||o[o.length-1].date<t)continue;let s=In(o,e),c=s[s.length-1],l=s.slice(0,-1),u=e===`assist`?Math.min(...l):Math.max(...l);(e===`assist`?c<u:c>u)&&r.push({exerciseId:i,value:c,previous:u})}return r}function zn(e,t,n){let r={};for(let[i,a]of Object.entries(e)){let e=n[i];if(!e){r[i]=a;continue}let o=a.filter(e=>e.date!==t),s=e.length>0?[...o,{date:t,sets:e}]:o;s.length>0&&(r[i]=s.sort((e,t)=>e.date.localeCompare(t.date)))}return r}function Bn(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function Vn(e,t,n,r,i){return`
      <label class="edit-field">
        <span class="sr-only">${e}</span>
        <input type="number" inputmode="${i}" min="0" value="${n}" data-field="${t}" />
        <span class="edit-unit">${r}</span>
      </label>`}function Hn(e,t,n,r){let i=(e.weightKind??`load`)===`bodyweight`,a=!!e.timedSeconds,s=i||t.weight===null?``:Vn(`Weight in ${r}`,`edit-weight`,c(o(t.weight,r)),r,`decimal`),l=Vn(a?`Seconds`:`Reps`,`edit-amount`,String(t.amount),a?`sec`:`reps`,`numeric`);return`
    <div class="edit-set" data-exercise="${e.id}">
      <span class="edit-set-label">Set ${n+1}</span>${s}${l}
      <button type="button" class="link-button" data-action="remove-edit-set" aria-label="Remove set ${n+1} of ${e.name}">Remove</button>
    </div>`}function Un(e,t,n){let r=t===null?void 0:Pn(e).find(e=>e.date===t);if(!r)return`
      <header class="screen-header">
        <h1>Edit workout</h1>
        <p class="lead">That workout isn't in your history any more.</p>
      </header>
      <button type="button" class="primary" data-action="cancel-workout-edit">Back to Progress</button>`;let i=r.entries.filter(({exerciseId:e})=>w[e]).map(({exerciseId:e,session:t})=>{let r=w[e],i=t.sets.map((e,t)=>Hn(r,e,t,n)).join(``);return`
        <section class="card edit-card" data-exercise="${r.id}">
          <h2>${r.name}</h2>
          ${i}
        </section>`}).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">Edit workout</p>
      <h1>${Bn(r.date)}</h1>
      <p class="lead">Fix any weight or reps you logged wrong. Remove a set that shouldn't be there.</p>
    </header>

    ${i}

    <p class="form-error" role="alert" data-edit-error hidden></p>
    <button type="button" class="primary big" data-action="save-workout-edit">Save changes</button>
    <button type="button" class="secondary" data-action="cancel-workout-edit">Cancel</button>
    <p class="hint small">Removing every set of an exercise takes it out of this workout.</p>`}function Wn(e,t,n,r){let i=Number(t);if(t.trim()===``||!Number.isInteger(i)||i<1||i>300)return{error:`Enter how many reps (or seconds) you did, as a whole number.`};if(n)return{set:{weight:null,amount:i}};let a=Number(e);return e.trim()===``||!Number.isFinite(a)||a<0||a>1e3?{error:`Enter the weight in ${d(r)}. Use 0 if there was no added weight.`}:{set:{weight:s(a,r),amount:i}}}function Gn(e){let{root:t,state:n}=e,r=null;function i(e){let n=t.querySelector(`[data-edit-error]`);n&&(n.textContent=e,n.hidden=!1)}function a(){let e={};for(let r of t.querySelectorAll(`.edit-card`)){let t=r.dataset.exercise??``,i=w[t];if(!i)continue;let a=(i.weightKind??`load`)===`bodyweight`;e[t]=[];for(let o of r.querySelectorAll(`.edit-set`)){let r=Wn(o.querySelector(`input[data-field="edit-weight"]`)?.value??``,o.querySelector(`input[data-field="edit-amount"]`)?.value??``,a,n.weightUnit);if(`error`in r){let e=o.querySelector(`.edit-set-label`)?.textContent??`A set`;return{error:`${i.name}, ${e}: ${r.error}`}}e[t].push(r.set)}}return{updated:e}}function o(){if(r===null)return;let t=a();if(`error`in t){i(t.error);return}if(Object.values(t.updated).every(e=>e.length===0)){i(`A workout needs at least one set. Keep one, or press Cancel to leave this workout as it is.`);return}n.history=zn(n.history,r,t.updated),J(n),r=null,e.go(`progress`),e.showToast(`Workout updated.`)}return{date:()=>r,begin(t){r=t,e.go(`edit-workout`)},handleAction(t,n){if(t===`remove-edit-set`)n.closest(`.edit-set`)?.remove();else if(t===`save-workout-edit`)o();else if(t===`cancel-workout-edit`)r=null,e.go(`progress`);else return!1;return!0}}}var Kn=`gym-guide`,qn=1;function Jn(e,t){let n={app:Kn,format:qn,savedAt:t.toISOString(),state:{...e,session:null}};return{fileName:`gym-guide-backup-${y(t)}.json`,text:JSON.stringify(n,null,2)}}function Yn(e){if(e.length>5e6)return{ok:!1,error:`That file is too big to be a Gym Guide backup.`};let t;try{t=JSON.parse(e)}catch{return{ok:!1,error:`That file isn't a Gym Guide backup. Pick the .json file you saved from this app.`}}let n=t;if(typeof n!=`object`||!n||n.app!==Kn||typeof n.state!=`object`||n.state===null)return{ok:!1,error:`That file isn't a Gym Guide backup. Pick the .json file you saved from this app.`};if(n.format!==qn)return{ok:!1,error:`That backup is from a different version of the app, so it can't be restored here.`};let r=Sn(n.state);return{ok:!0,state:r,summary:{workouts:r.workoutLog.length,savedAt:typeof n.savedAt==`string`?n.savedAt:null}}}function Xn(e){return new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function Zn(e,t,n){let r=e?`Last backup: ${Xn(e)}.`:`You haven't made a backup yet.`,i=``;if(t.kind===`error`)i=`<p class="form-error" role="alert">${B(t.message)}</p>`;else if(t.kind===`confirm`){let{workouts:e,savedAt:n}=t.summary;i=`
      <p class="notice">This backup ${n?`from ${Xn(n)} `:``}has ${e} finished ${e===1?`workout`:`workouts`}. Restoring replaces everything on this phone right now.</p>
      <div class="button-row">
        <button type="button" class="secondary" data-action="cancel-restore">Cancel</button>
        <button type="button" class="primary" data-action="confirm-restore">Replace my data</button>
      </div>`}return n?`
    <section class="card backup-card">
      <h2>Already used this app?</h2>
      <p class="hint">If you saved a backup file, restore it here to get your workouts, weights and settings back.</p>
      <button type="button" class="secondary" data-action="choose-backup">Restore from a backup</button>
      <input type="file" data-field="restore-file" hidden />
      ${i}
    </section>`:`
    <section class="card backup-card">
      <h2>Back up your data</h2>
      <p class="hint">Your workouts live only on this phone. Save a backup file now and then and keep it somewhere safe, like emailed to yourself or in Google Drive. It includes your profile and protected areas, so keep it private.</p>
      <p class="hint small">${r}</p>
      <button type="button" class="secondary" data-action="save-backup">Save a backup</button>
      <button type="button" class="link-button center" data-action="choose-backup">Restore from a backup</button>
      <input type="file" data-field="restore-file" hidden />
      ${i}
    </section>`}var Qn=0;function $n(e,t){if(!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e);n.rate=1;let r=++Qn;n.onstart=()=>t?.onStart();let i=()=>{r===Qn&&t?.onEnd()};n.onend=i,n.onerror=i,window.speechSynthesis.speak(n)}function er(e,t,n){let r=URL.createObjectURL(new Blob([n],{type:t})),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e4)}function tr(e){`vibrate`in navigator&&navigator.vibrate(e)}var nr=null,rr=!1;async function ir(){if(`wakeLock`in navigator&&document.visibilityState===`visible`)try{nr=await navigator.wakeLock.request(`screen`)}catch{nr=null}}document.addEventListener(`visibilitychange`,()=>{rr&&document.visibilityState===`visible`&&ir()});function ar(e){rr=e,e?ir():(nr?.release(),nr=null)}function or(e){let{state:t}=e,n={kind:`none`},r=null;function i(){let n=new Date;t.lastBackupAt=n.toISOString();let{fileName:r,text:i}=Jn(t,n);J(t),er(r,`application/json`,i),e.render(),e.showToast(`Backup saved. Keep the file somewhere safe.`)}function a(t){let i=new FileReader;i.onload=()=>{let t=Yn(String(i.result??``));t.ok?(r={state:t.state,summary:t.summary},n={kind:`confirm`,summary:t.summary}):(r=null,n={kind:`error`,message:t.error}),e.render()},i.onerror=()=>{n={kind:`error`,message:`Couldn't read that file. Try picking it again.`},e.render()},i.readAsText(t)}function o(){if(!r)return;e.music.stop(),Object.assign(t,r.state),zt(t.customExercises),r=null,n={kind:`none`},e.resetCalendarSelection();let i=J(t);e.go(t.profile&&t.equipmentConfirmed?`today`:`profile`),e.showToast(i?`Backup restored.`:`Restored, but couldn't save on this device — changes last until you close the page.`)}return{card:e=>Zn(t.lastBackupAt,n,e),handleAction(t){if(t===`save-backup`)i();else if(t===`choose-backup`)n={kind:`none`},e.root.querySelector(`input[data-field="restore-file"]`)?.click();else if(t===`cancel-restore`)r=null,n={kind:`none`},e.render();else if(t===`confirm-restore`)o();else return!1;return!0},handleFileChosen:a}}var sr=`<div class="hold-timer" data-hold-slot></div>`;function cr(e){return e===null?`<button type="button" class="secondary" data-action="hold-toggle">Time a 30-second hold</button>`:`
    <button type="button" class="secondary" data-action="hold-toggle">Stop</button>
    <span class="hold-clock" data-hold-clock aria-label="${e} seconds left">${V(e)}</span>`}var lr=250;function ur(e){let t=null,n;function r(){return t===null?null:Math.max(0,Math.ceil((t-Date.now())/1e3))}function i(){for(let t of e.root.querySelectorAll(`[data-hold-slot]`))t.innerHTML=cr(r())}function a(){window.clearInterval(n),t=null}function o(){let t=e.root.querySelector(`[data-hold-clock]`);if(!t){a();return}let n=r()??0;if(n>0){t.textContent=V(n);return}a(),$n(`Time.`),tr([200,100,200]),i(),e.showToast(`Time! Switch sides or move on.`)}return{fill:i,handleAction(r){return r===`hold-toggle`&&(t===null?(t=Date.now()+3e4,n=window.setInterval(o,lr)):a(),i(),e.root.querySelector(`[data-action="hold-toggle"]`)?.focus(),!0)}}}function dr(){return typeof window.matchMedia==`function`&&window.matchMedia(`(display-mode: standalone)`).matches||navigator.standalone===!0}function fr(e){return e?``:`
    <section class="card home-screen-card">
      <h2>Put it on your home screen</h2>
      <p class="hint">It opens like a normal app: full screen, with its own icon, and no browser bar in the way at the gym.</p>
      <h3>Android (Chrome)</h3>
      <ol>
        <li>Tap the three dots at the top right.</li>
        <li>Tap <strong>Add to Home screen</strong> (or <strong>Install app</strong>).</li>
      </ol>
      <h3>iPhone (Safari)</h3>
      <ol>
        <li>Tap the <strong>Share</strong> button.</li>
        <li>Tap <strong>Add to Home Screen</strong>.</li>
      </ol>
    </section>`}var pr={1:`Wrecked`,2:`Tired`,3:`Okay`,4:`Good`,5:`Great`},mr=[1,2,3,4,5],hr=2,gr=70,_r=6,vr=4,yr=85,br=7;function xr(e){return e.feel<=hr||e.readiness!==null&&e.readiness<gr||e.hours!==null&&e.hours<_r?`easy`:e.feel>=vr&&(e.readiness===null||e.readiness>=yr)&&(e.hours===null||e.hours>=br)?`push`:`normal`}function Sr(e){return e===`easy`?`Take it easy today. If you work out, the workout drops a set from each exercise and keeps your weights where they were. Resting is fine too.`:e===`push`?`You're well recovered, so it's a good day to aim for the top of your rep range. Keep your form clean.`:`A normal day: train as planned.`}function Cr(e,t){return t===`easy`?{...e,sets:Math.max(1,e.sets-1)}:e}function wr(e){let t=[`Felt ${pr[e.feel].toLowerCase()} (${e.feel}/5)`];return e.hours!==null&&t.push(`slept ${e.hours} h`),e.readiness!==null&&t.push(`readiness ${e.readiness}`),t.join(` · `)}function Tr(e,t){return e.find(e=>e.date===t)}function Er(e,t){return[...e.filter(e=>e.date!==t.date),t].sort((e,t)=>e.date.localeCompare(t.date)).slice(-180)}function Dr(e,t,n){if(e===null||!mr.includes(e))return{ok:!1,error:`Tap a number for how rested you feel.`};let r=null;if(t.trim()!==``&&(r=Number(t),!Number.isFinite(r)||r<0||r>24))return{ok:!1,error:`Hours slept should be a number between 0 and 24, or leave it blank.`};let i=null;return n.trim()!==``&&(i=Number(n),!Number.isInteger(i)||i<0||i>100)?{ok:!1,error:`Readiness should be a whole number from 0 to 100, or leave it blank.`}:{ok:!0,feel:e,hours:r,readiness:i}}var Or=10;function kr(e){let t=w[e];return t?t.weightKind??`load`:null}function Ar(e){return Object.keys(T).find(t=>T[t].slots.some(t=>t.options.includes(e)))??null}function jr(e){return e.timedSeconds?`seconds`:`reps`}function X(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function Mr(e,t,n){return(e.weightKind??`load`)===`bodyweight`?t:o(t,n)}function Nr(e,t,n){let r=e.weightKind??`load`;return r===`bodyweight`?`${t} ${e.timedSeconds?`sec`:`reps`}`:r===`assist`?`${c(t)} ${n} of help`:`${c(t)} ${n}`}function Pr(e,t,n,r=``){return`
    <details class="card progress-card ${r}">
      <summary>
        <span class="progress-title">
          <strong class="progress-name">${e}</strong>
          <span class="progress-stats">${t}</span>
        </span>
        <span class="chevron" aria-hidden="true"></span>
      </summary>
      ${n}
    </details>`}function Fr(e,t,n){let r=Rn(e,x(t).toISOString(),kr).filter(({exerciseId:e})=>w[e]);return r.length===0?``:`
    <section class="card highlights-card">
      <h2>🏆 New personal bests this week</h2>
      <ul class="summary">${r.map(({exerciseId:e,value:t,previous:r})=>{let i=w[e];return`<li><strong>${i.name}</strong>: ${Nr(i,Mr(i,t,n),n)} <span class="hint">(was ${Nr(i,Mr(i,r,n),n)})</span></li>`}).join(``)}</ul>
    </section>`}function Ir(e,t,n,r){let i={top:22,right:20,bottom:22,left:20},a=Math.min(...n),o=Math.max(...n),s=o-a||1,c=e=>i.left+e*(300-i.left-i.right)/(n.length-1),l=e=>i.top+(o-e)*(110-i.top-i.bottom)/s,u=n.map((e,t)=>`${t===0?`M`:`L`}${c(t).toFixed(1)},${l(e).toFixed(1)}`).join(` `),d=n.map((e,n)=>{let i=`${X(t[n])}: ${r(e)}`;return`
        <g class="chart-point" data-point="${i}" tabindex="0" role="button" aria-label="${i}">
          <circle cx="${c(n)}" cy="${l(e)}" r="14" class="hit" />
          <circle cx="${c(n)}" cy="${l(e)}" r="4.5" class="dot" />
        </g>`}).join(``);return`
    <svg class="trend-chart" viewBox="0 0 300 110" role="img" aria-label="${e} over time">
      <line x1="${i.left}" x2="${300-i.right}" y1="${110-i.bottom+6}" y2="${110-i.bottom+6}" class="baseline" />
      <path d="${u}" class="trend-line" />
      ${d}
      <text x="${c(0)}" y="${l(n[0])-10}" class="value-label" text-anchor="start">${n[0]}</text>
      <text x="${c(n.length-1)}" y="${l(n[n.length-1])-10}" class="value-label" text-anchor="end">${n[n.length-1]}</text>
      <text x="${i.left}" y="106" class="axis-label">${X(t[0])}</text>
      <text x="${300-i.right}" y="106" class="axis-label" text-anchor="end">${X(t[t.length-1])}</text>
    </svg>
    <p class="chart-caption" aria-live="polite">Tap a dot to see that day.</p>
  `}function Lr(e,t,n){let r=new Set(Rn(e,x(t).toISOString(),kr).map(({exerciseId:e})=>e));return Object.entries(e).filter(([e,t])=>w[e]&&t.some(e=>e.sets.length>0)).map(([e,t])=>{let i=w[e],a=t.filter(e=>e.sets.length>0),o=In(a,i.weightKind??`load`).map(e=>Mr(i,e,n)),s=a[a.length-1],c=r.has(e),l=Ar(e),u=(i.weightKind??`load`)===`assist`?Math.min(...o):Math.max(...o),d=o.length>=2?Ir(i.name,a.map(e=>e.date),o,e=>Nr(i,e,n)):`<p class="hint">Log it again to start a chart.</p>`;return Pr(i.name,`<span>Best: <strong>${Nr(i,u,n)}</strong>${c?` <span class="new-best">New best!</span>`:``}</span>
         <span>Last: ${Y(s,jr(i),n)}</span>`,d,l?`type-${l}`:``)}).join(``)}function Rr(e,t){let n=Pn(e).slice(0,Or);if(n.length===0)return``;let r=n.map(e=>{let n=e.entries.filter(({exerciseId:e})=>w[e]).map(({exerciseId:e,session:n})=>{let r=w[e];return`<li>${r.name}: <span class="hint">${Y(n,jr(r),t)}</span></li>`}).join(``);return`
        <div class="recent-heading">
          <h3 class="progress-name">${X(e.date)}</h3>
          <button type="button" class="link-button" data-action="edit-workout" data-workout-date="${e.date}"
            aria-label="Edit the workout from ${X(e.date)}">Edit</button>
        </div>
        <ul class="summary">${n}</ul>`});return`
    <details class="card switcher recent-workouts">
      <summary>Recent workouts (${n.length})</summary>
      ${r.join(``)}
    </details>`}function zr(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r,12).toISOString()}function Br(e){if(e.length===0)return``;let t=e.slice(-14),n=t[t.length-1],r=[{name:`How rested you felt`,points:t.map(e=>({date:e.date,value:e.feel})),format:e=>`${pr[e]??e} (${e}/5)`},{name:`Hours slept`,points:t.flatMap(e=>e.hours===null?[]:[{date:e.date,value:e.hours}]),format:e=>`${e} h`},{name:`Readiness`,points:t.flatMap(e=>e.readiness===null?[]:[{date:e.date,value:e.readiness}]),format:e=>String(e)}].filter(e=>e.points.length>=2).map(e=>Pr(e.name,`<span>Latest: ${e.format(e.points[e.points.length-1].value)}</span>`,Ir(e.name,e.points.map(e=>zr(e.date)),e.points.map(e=>e.value),e.format))).join(``);return`
    <h2 class="section-title">Recovery</h2>
    <section class="card">
      <p class="progress-stats"><span>Last check-in (${X(zr(n.date))}): ${wr(n)}</span></p>
      ${r?``:`<p class="hint">Check in on a few more mornings and your charts will appear here.</p>`}
    </section>
    ${r}`}function Vr(e,t,n){let r=e[e.length-1],i=_(e),a=e.length>=2?`${Ir(`Body weight over time`,e.map(e=>zr(e.date)),e.map(e=>p(e.pounds,t)),e=>`${c(e)} ${t}`)}
        <p class="hint">${i===null?``:`${v(i,t)} since ${X(zr(e[0].date))}`}</p>`:``;return`
    <details class="card switcher body-weight"${n?` open`:``}>
      <summary>
        <span>Body weight</span>
        ${r?`<span class="hint">Latest: ${m(r.pounds,t)}</span>`:``}
      </summary>
      <p class="hint">Optional. Log your weight now and then. It stays on this phone and is never part of Share my week.</p>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Today's weight (${t})</span>
          <input type="number" inputmode="decimal" step="0.1" min="0" data-field="body-weight" />
        </label>
      </div>
      <button type="button" class="secondary" data-action="log-body-weight">Log today's weight</button>
      <p class="form-error" role="alert" data-body-weight-error hidden></p>
      ${a}
    </details>`}var Hr=[50,55,55,60,65];function Ur(e,t){return`
    <div class="example-preview">
      <p class="example-label">Example</p>
      <h3 class="progress-name">Machine Chest Press</h3>
      ${Ir(`Example: chest press weight over five weeks`,Hr.map((t,n)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()-7*(Hr.length-1-n)).toISOString()),Hr.map(e=>o(e,t)),e=>`${c(e)} ${t}`)}
    </div>`}function Wr(e,t){let n=ut(e,t,[]);return n<2?``:`<p class="week-streak">${n} weeks in a row with 2 or more workouts</p>`}function Gr(e,t,n,r,i=`lb`,a={}){let o=`
    <header class="screen-header">
      <h1>Your progress</h1>
      <p class="lead">Everything here comes from the sets you log during a workout.</p>
    </header>`;if(Pn(e).length===0)return`${o}
      <section class="card empty">
        <p>No workouts yet. Log your sets during a workout and your progress shows up here, like this:</p>
        ${Ur(t,i)}
        <button type="button" class="secondary" data-nav="today">Go to today's workout</button>
      </section>
      ${Br(r)}
      ${Vr(a.bodyWeights??[],i,a.bodyWeightOpen??!1)}`;let s=Fn(e,t),c=Ln(e,t);return`${o}
    <section class="card week-card">
      <p class="week-count"><strong>${s}</strong> of ${n}</p>
      <p>workouts this week${s>=n?` — goal reached!`:``}</p>
      <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${s}">
        <div class="meter-fill" style="width: ${Math.min(100,Math.round(s/Math.max(1,n)*100))}%"></div>
      </div>
      <p class="week-sets">${c} ${c===1?`set`:`sets`} logged</p>
      ${Wr(a.workoutLog??[],t)}
      <button type="button" class="secondary" data-action="share-week">Share my week</button>
      <p class="hint small">Your goal is the workout days in your week plan. The week starts Monday.</p>
    </section>

    ${Fr(e,t,i)}

    ${Br(r)}

    ${Vr(a.bodyWeights??[],i,a.bodyWeightOpen??!1)}

    <h2 class="section-title">Progress by exercise</h2>
    ${Lr(e,t,i)}

    ${Rr(e,i)}
  `}var Kr=3;function qr(e,t,n=Kr){return(e[t]??[]).filter(e=>e.sets.length>0).slice(-n).reverse()}function Jr(e){return new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function Yr(e,t,n,r){let i=qr(e,t);if(i.length<2)return``;let a=i.map(e=>`<li><span class="recent-date">${Jr(e.date)}</span><span>${Y(e,n,r)}</span></li>`).join(``);return`
    <div class="recent-times">
      <h4>Your last ${i.length} times</h4>
      <ul>${a}</ul>
    </div>`}var Xr=[{id:`all`,label:`All`},{id:`push`,label:`Push`},{id:`pull`,label:`Pull`},{id:`legs`,label:`Legs`},{id:`home`,label:`Home`}];function Zr(e){if(e.custom)return e.custom.day;let t=Ar(e.id);return t===`mobility`?`home`:t}function Qr(e,t){let n=t.toLowerCase().split(/\s+/).filter(Boolean),r=`${e.name} ${e.muscles}`.toLowerCase();return n.every(e=>r.includes(e))}function $r(e,t){return Object.values(w).filter(e=>t===`all`||Zr(e)===t).filter(t=>Qr(t,e)).sort((e,t)=>e.name.localeCompare(t.name))}function ei(e){return Wt.filter(t=>e.includes(t.id)).map(e=>e.label.toLowerCase()).join(`, `)}function ti(e,t,n){let[r]=qr(t,e.id,1);if(!r)return{last:``,details:``};let i=e.timedSeconds?`seconds`:`reps`,a=e.weightKind??`load`,o=In(qr(t,e.id,2**53-1).reverse(),a),s=a===`assist`?Math.min(...o):Math.max(...o);return{last:`<small class="last-time">Last time: ${Y(r,i,n)}</small>`,details:`
        <p class="progress-stats"><span>Your best: <strong>${Nr(e,Mr(e,s,n),n)}</strong></span></p>
        ${Yr(t,e.id,i,n)}`}}function ni(e,{equipmentIds:t,protectedAreas:n,history:r,weightUnit:i}){let a=ti(e,r,i),o=e.equipment.filter(e=>!t.includes(e)).map(e=>et.find(t=>t.id===e)?.name??e),s=n.filter(t=>e.stress[t]===`high`),c={exercise:e,slot:{label:``,options:[]},cautionAreas:n.filter(t=>e.stress[t]===`moderate`)},l=[o.length>0?`<p class="notice">Not on your equipment list: ${B(o.join(`, `))}.</p>`:``,s.length>0?`<p class="caution">Left out of your workouts: it loads your ${ei(s)} too hard.</p>`:``,Le(c)].join(``);return`
    <article class="exercise">
      <details>
        <summary>
          <span class="exercise-title">
            <strong>${e.name}</strong>
            <small>${e.muscles}</small>
            ${e.custom?`<small class="library-mine">Added by you</small>`:``}
            ${a.last}
            ${o.length>0?`<small class="library-missing">Not at your gym</small>`:``}
          </span>
          <span class="chevron" aria-hidden="true"></span>
        </summary>
        ${a.details}
        ${l}
        ${Re(c)}
        ${e.custom?`<button type="button" class="link-button hurt-link" data-action="remove-custom-exercise" data-exercise="${e.id}">Remove this exercise</button>`:``}
      </details>
    </article>`}function ri(e,t,n){let r=$r(e,t);return r.length===0?`<p class="card empty" role="status">Nothing matches that. Try a muscle like "back", or a machine like "press".</p>`:`${`<p class="hint" role="status">${r.length} ${r.length===1?`exercise`:`exercises`}</p>`}<div class="exercise-list">${r.map(e=>ni(e,n)).join(``)}</div>`}function ii(){return`
    <details class="card switcher add-exercise">
      <summary>Add my own exercise</summary>
      <p class="hint">For a machine or move the app doesn't have. It is added to the end of the workout you choose. It won't have steps or a video.</p>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Name</span>
          <input type="text" maxlength="40" placeholder="e.g. Hammer Strength row" autocomplete="off" data-field="custom-name" />
        </label>
      </div>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>What it works (optional)</span>
          <input type="text" maxlength="60" placeholder="e.g. Back, biceps" autocomplete="off" data-field="custom-muscles" />
        </label>
      </div>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Add it to</span>
          <select data-field="custom-day">
            <option value="push">Push</option>
            <option value="pull">Pull</option>
            <option value="legs">Legs + Abs</option>
          </select>
        </label>
        <label class="calendar-field">
          <span>Log</span>
          <select data-field="custom-kind">
            <option value="weights">Weight + reps</option>
            <option value="bodyweight">Reps only</option>
          </select>
        </label>
      </div>
      <button type="button" class="secondary" data-action="add-custom-exercise">Add exercise</button>
      <p class="form-error" role="alert" data-custom-error hidden></p>
    </details>`}function ai(e,t,n){let r=Xr.map(({id:e,label:n})=>`<button type="button" class="chip${e===t?` active`:``}" data-action="library-group" data-value="${e}" aria-pressed="${e===t}">${n}</button>`).join(``);return`
    <header class="screen-header">
      <h1>Exercise library</h1>
      <p class="lead">Look up how any exercise works. Tap one to see the steps and a demo video.</p>
    </header>

    ${ii()}

    <label class="sr-only" for="library-search">Search exercises</label>
    <input id="library-search" type="search" class="library-search" data-field="library-search"
      placeholder="Search by name or muscle" autocomplete="off" value="${B(e)}" />

    <div class="chip-row library-groups" role="group" aria-label="Kind of exercise">${r}</div>

    <div class="library-list">${ri(e,t,n)}</div>

  `}var oi=`gymGuide.tab`,si=[`today`,`library`,`progress`,`fuel`,`profile`];function ci(e){if(si.includes(e))try{sessionStorage.setItem(oi,e)}catch{}}function li(){return performance.getEntriesByType?.(`navigation`)[0]?.type===`reload`}function ui(){if(!li())return null;try{let e=sessionStorage.getItem(oi);return si.find(t=>t===e)??null}catch{return null}}var di=`https://ashnasahni.github.io/gym-guide/`,fi=3;function pi(e,t){return`${e} ${t}${e===1?``:`s`}`}function mi(e,t,n,r){let i=[`My week on Gym Guide`,`${Fn(e,t)} of ${pi(n,`workout`)} · ${pi(Ln(e,t),`set`)}`],a=Rn(e,x(t).toISOString(),kr).filter(({exerciseId:e})=>w[e]);if(a.length>0){let e=a.slice(0,fi).map(({exerciseId:e,value:t})=>{let n=w[e];return`${n.name} ${Nr(n,Mr(n,t,r),r)}`}),t=a.length-e.length;i.push(`New bests: ${e.join(`, `)}${t>0?` and ${t} more`:``}`)}return i.push(``,`Try it: ${di}`),i.join(`
`)}function hi(e){let{state:t}=e;async function n(t){try{await navigator.clipboard.writeText(t),e.showToast(`Copied. Paste it into a message.`)}catch{e.showToast(`Couldn't share from this phone.`)}}async function r(){let e=(t.profile??W).weekPlan.filter(Boolean).length,r=mi(t.history,new Date,e,t.weightUnit);if(typeof navigator.share!=`function`){await n(r);return}try{await navigator.share({title:`My week on Gym Guide`,text:r})}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;await n(r)}}return{handleAction(e){return e===`share-week`&&(r(),!0)}}}function gi(e){let{root:t,state:n}=e,r=t.querySelector(`input[data-field="cal-time"]`)?.value??``;if(!Ue(r))return e.showToast(`Pick a start time first.`),null;let i=Number(t.querySelector(`select[data-field="cal-minutes"]`)?.value);n.calendar={time:r,minutes:Ve.includes(i)?i:n.calendar.minutes},J(n);let a=(n.profile??W).weekPlan;return er(`gym-guide-week.ics`,`text/calendar;charset=utf-8`,$e(a,n.calendar,new Date)),Ze(a,n.calendar)}function _i(e,t,n=null){let r=Ve.map(t=>`<option value="${t}"${t===e.minutes?` selected`:``}>${t} minutes</option>`).join(``);return`
    <section class="card">
      <h2>Add to your calendar</h2>
      <p class="hint">Adds your workout days as weekly repeating events. Tap the button, then open the file it downloads and your calendar app will offer to add them.</p>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Start time</span>
          <input type="time" data-field="cal-time" value="${e.time}" />
        </label>
        <label class="calendar-field">
          <span>Length</span>
          <select data-field="cal-minutes">${r}</select>
        </label>
      </div>
      ${t?`<p class="notice">You changed your week. Tap Save profile below first, then add it to your calendar.</p>`:``}
      ${n&&!t?vi(n):``}
      <button type="button" class="secondary" data-action="add-to-calendar"${t?` disabled`:``}>Add to calendar</button>
      <p class="hint small">This is a one-time copy. If you change your week later, delete the old events in your calendar and add it again. The events repeat every week until you delete them.</p>
    </section>
  `}function vi(e){return`
    <div class="notice" role="status">
      <p><strong>✓ File downloaded.</strong> Next, open it (from your downloads or the browser's download bar) and tap Add all in your calendar app. It holds:</p>
      <ul>${e.map(e=>`<li>${e}</li>`).join(``)}</ul>
    </div>`}function yi(e){return e.toLocaleDateString(void 0,{month:`long`,day:`numeric`})}function bi(e){return e.isToday?`Today`:`${D[e.weekdayIndex]}, ${yi(e.date)}`}function xi(e){let t=e.status===`done`&&e.workout?`${z[e.workout]} workout, done`:e.status===`planned`&&e.workout?`${z[e.workout]} planned`:e.status===`missed`&&e.workout?`${z[e.workout]} planned, not logged`:`rest day`;return`${D[e.weekdayIndex]} ${yi(e.date)}, ${t}${e.isToday?`, today`:``}`}function Si(e){return e.toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function Ci(e,t){return t===0?`This week`:t===1?`Next week`:t===-1?`Last week`:`${Si(e[0].date)} – ${Si(e[6].date)}`}function wi(e,t,n=0){let r=e.map(e=>{let n=e.workout?Ae[e.workout]:`Rest`,r=e.status===`done`?`✓`:e.status===`missed`?`○`:``;return`
        <button type="button" class="${[`cal-day`,e.workout?`type-${e.workout}`:``,`cal-${e.status}`,e.isToday?`today`:``,e.key===t?`selected`:``].filter(Boolean).join(` `)}" data-date="${e.key}"
                aria-pressed="${e.key===t}" aria-label="${xi(e)}">
          <span class="cal-weekday">${ne[e.weekdayIndex]}</span>
          <span class="cal-date">${e.date.getDate()}</span>
          <span class="cal-label">${n}</span>
          <span class="cal-mark" aria-hidden="true">${r}</span>
        </button>`}).join(``),i=Ci(e,n);return`
    <div class="week-nav">
      <button type="button" class="week-step" data-action="week-prev" aria-label="Previous week"${n<=-4?` disabled`:``}>‹</button>
      ${n===0?`<span class="week-title">${i}</span>`:`<button type="button" class="link-button week-title" data-action="week-today" aria-label="${i}. Tap to go back to this week">${i}</button>`}
      <button type="button" class="week-step" data-action="week-next" aria-label="Next week"${n>=12?` disabled`:``}>›</button>
    </div>
    <div class="calendar" role="group" aria-label="${i}">${r}</div>
  `}function Ti(e,t,n,r){return`
    <section class="card home-card">
      <h2>${e} <small>optional</small></h2>
      <p class="home-blurb">${t}</p>
      ${r?`<button type="button" class="secondary" data-day="${n}">Do ${z[n].toLowerCase()}</button>`:`<p class="hint">You can start it on the day.</p>`}
    </section>`}function Ei(e){return`
    <section class="card">
      <p>Rest day. Your muscles grow while you recover, so a walk or some stretching is plenty.</p>
    </section>

    ${e.isToday?`<section class="card train-anyway">
             <h2>Want to train anyway?</h2>
             <p class="picker-hint">Pick a gym workout for today. Your week plan stays as it is.</p>
             ${Ne(null,`Pick a gym workout for today`,O)}
           </section>`:``}`}function Di(e){return`
    ${Ti(`At-home abs`,`About 10 minutes, no equipment, gentle on your back and knees. Same voice and timer as a gym workout.`,`home`,e.isToday)}

    ${Ti(`Mobility reset`,`About 8 minutes of slow stretches for your neck, upper back and hips. No equipment.`,`mobility`,e.isToday)}`}function Oi(e,t){return t.flatMap((t,n)=>t&&e[n]?[`${ne[n]} ${E[t].label.toLowerCase()}`]:[]).join(` · `)}function ki(e,t,n,r){let i=te(n);if(i.length===0)return``;let a=[null,...i].map(n=>{let i=n?E[n].label:`Balanced`;return`<button type="button" class="focus-chip${n===r?` active`:``}"
          data-focus-day="${t}" data-focus="${n??`balanced`}"
          aria-pressed="${n===r}" aria-label="${e} focus: ${i}">${i}</button>`}).join(``);return`<p class="plan-focus-day">${`${e} · ${n?Ae[n]:``}`}</p><div class="plan-focus" role="group" aria-label="${e} focus">${a}</div>`}function Ai(e){return`<div class="chip-row week-presets" role="group" aria-label="Days a week">${Kt.map(t=>{let n=JSON.stringify(t.plan)===JSON.stringify(e);return`<button type="button" class="chip${n?` active`:``}" data-week-preset="${t.days}" aria-pressed="${n}">${t.days} days</button>`}).join(``)}</div>`}function ji(e){return e.flatMap((e,t)=>e?[`${ne[t]} ${Ae[e]}`]:[]).join(` · `)}function Mi(e,t,n=!1,r=!1){let i=[{value:`rest`,label:`Rest`,spoken:`Rest`},...ae.map(e=>({value:e,label:Ae[e],spoken:z[e]}))],a=D.map((t,n)=>{let r=e[n]??`rest`,a=i.map(e=>`
          <button type="button" class="plan-option${e.value===r?` active`:``}"
                  data-plan-day="${n}" data-plan-workout="${e.value}"
                  aria-pressed="${e.value===r}" aria-label="${t}: ${e.spoken}">${e.label}</button>`).join(``);return`
      <div class="plan-row">
        <span class="plan-day"><span aria-hidden="true">${t.slice(0,3)}</span><span class="sr-only">${t}</span></span>
        <div class="plan-options">${a}</div>
      </div>`}).join(``);return`
    ${Ai(e)}
    <details class="week-days"${r?` open`:``}>
      <summary><span>Choose days one by one</span><span class="hint">${ji(e)}</span></summary>
      <div class="plan-editor">${a}</div>
    </details>
    ${Ni(e,t,n)}`}function Ni(e,t,n){let r=D.map((n,r)=>ki(n,r,e[r],t[r]??null)).join(``);if(!r)return``;let i=Oi(e,t);return`
    <details class="focus-picker"${n?` open`:``}>
      <summary><span>Focus (optional)</span>${i?`<span class="hint">${i}</span>`:``}</summary>
      <p class="hint">Lean a Push or Pull day toward one muscle.</p>
      ${r}
    </details>`}function Pi(){return`
    <section class="card row-card easy-week-card">
      <div>
        <h2>Easy week</h2>
        <p class="hint">Fewer sets, same weights, until Sunday.</p>
      </div>
      <button type="button" class="secondary" data-action="easy-week-end">Turn off</button>
    </section>`}function Fi(e){return`
    <section class="card easy-week-card">
      <h2>Time for an easy week?</h2>
      <p>You've trained ${e} weeks in a row. An easier week (one fewer set, same weights) can help you recover and come back stronger. It's optional.</p>
      <div class="button-row">
        <button type="button" class="secondary" data-action="easy-week-dismiss">Not now</button>
        <button type="button" class="primary" data-action="easy-week-start">Make this week easier</button>
      </div>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function Ii(e){return`data-${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}`}function Li(e){return`"${e.replace(/["\\]/g,`\\$&`)}"`}function Ri(e,t){if(!(e instanceof HTMLElement)||e===t||!t.contains(e))return null;let n=Object.entries(e.dataset).map(([e,t])=>`[${Ii(e)}=${Li(t??``)}]`);return n.length===0?null:`${e.tagName.toLowerCase()}${n.join(``)}`}function zi(e,t){e.querySelector(t)?.focus({preventScroll:!0})}function Bi(e){let t=e.querySelector(`main h1`);t&&(t.tabIndex=-1,t.focus({preventScroll:!0}))}var Vi={name:``,grams:``,goal:``,error:``,calorieName:``,calories:``,calorieGoal:``,calorieError:``,proteinQuickOpen:!1,calorieQuickOpen:!1,proteinGoalOpen:!1,calorieGoalOpen:!1};function Hi(e,t){return`<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e}">
    <div class="meter-fill" style="width: ${Math.min(100,Math.round(e/t*100))}%"></div>
  </div>`}function Ui(e,t){let n=e.waterGoal;return`
    <section class="card fuel-water">
      <h2>Water</h2>
      <p class="fuel-total"><strong>${t}</strong> of ${n} glasses${t>=n?` — goal reached!`:``}</p>
      ${Hi(t,n)}
      <div class="button-row fuel-buttons">
        <button type="button" class="secondary" data-action="water" data-delta="-1" ${t===0?`disabled`:``} aria-label="Remove a glass">−1</button>
        <button type="button" class="primary" data-action="water" data-delta="1">+1 glass</button>
      </div>
      <div class="goal-row">
        <span>Daily goal</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="-1" aria-label="Lower water goal">−</button>
        <span>${n} glasses</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="1" aria-label="Raise water goal">+</button>
      </div>
    </section>
  `}function Wi(e){return e.proteinGoalOpen?`
    <p class="hint">A common target for building muscle is about 0.7 g per pound of body weight. A doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 100" value="${B(e.goal)}" data-field="protein-goal" aria-label="Daily protein goal in grams" />
      <span>g</span>
      <button type="button" class="secondary" data-action="set-protein-goal">Set goal</button>
    </div>
  `:`<button type="button" class="link-button" data-action="show-protein-goal">Set a daily goal (optional)</button>`}function Gi(e,t,n){let r=U(e,t),i=kt(r),a=e.proteinGoal,o=a===null?`<p class="fuel-total"><strong>${i}</strong> g today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} g${i>=a?` — goal reached!`:``}</p>${Hi(i,a)}`,s=r.protein.length===0?`<p class="hint">Nothing logged yet today. Tap Add food.</p>`:`<ul class="entry-list">${r.protein.map((e,t)=>`
          <li>
            <span>${B(e.name)}</span>
            <span class="entry-grams">${e.grams} g</span>
            <button type="button" class="link-button" data-action="remove-protein" data-index="${t}" aria-label="Remove ${B(e.name)}">Remove</button>
          </li>`).join(``)}</ul>`,c=vt.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-protein" data-index="${t}">
        <span>${e.name}</span><small>~${e.grams} g</small>
      </button>`).join(``);return`
    <section class="card fuel-protein">
      <h2>Protein</h2>
      ${o}
      ${s}

      <details class="quick-add" data-quick="protein"${n.proteinQuickOpen||n.error&&!n.proteinGoalOpen?` open`:``}>
        <summary>Add food</summary>
        <div class="quick-grid">${c}</div>
        <p class="hint small">Amounts are rough averages for a typical serving.</p>
        <h3>Something else</h3>
        <div class="inline-form">
          <input type="text" placeholder="What you ate" value="${B(n.name)}" data-field="protein-name" aria-label="Food name" maxlength="60" />
          <input type="number" inputmode="numeric" min="1" placeholder="g" value="${B(n.grams)}" data-field="protein-grams" aria-label="Protein in grams" class="grams-input" />
          <button type="button" class="secondary" data-action="add-protein">Add</button>
        </div>
        ${n.error&&!n.proteinGoalOpen?`<p class="form-error" role="alert">${n.error}</p>`:``}
      </details>
      ${n.error&&n.proteinGoalOpen?`<p class="form-error" role="alert">${n.error}</p>`:``}

      ${a===null?Wi(n):`<button type="button" class="link-button" data-action="clear-protein-goal">Change protein goal (${a} g)</button>`}
    </section>
  `}function Ki(e){return e.calorieGoalOpen?`
    <p class="hint">A doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 2400" value="${B(e.calorieGoal)}" data-field="calorie-goal" aria-label="Daily calorie goal" />
      <span>cal</span>
      <button type="button" class="secondary" data-action="set-calorie-goal">Set goal</button>
    </div>
  `:`<button type="button" class="link-button" data-action="show-calorie-goal">Set a daily goal (optional)</button>`}function qi(e,t,n){let r=U(e,t),i=Et(r),a=e.calorieGoal,o=a===null?`<p class="fuel-total"><strong>${i}</strong> cal today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} cal${i>=a?` — goal reached!`:``}</p>${Hi(i,a)}`,s=r.calories.length===0?`<p class="hint">Nothing logged yet today. Tap Add food.</p>`:`<ul class="entry-list">${r.calories.map((e,t)=>`
          <li>
            <span>${B(e.name)}</span>
            <span class="entry-grams">${e.kcal} cal</span>
            <button type="button" class="link-button" data-action="remove-calories" data-index="${t}" aria-label="Remove ${B(e.name)} calories">Remove</button>
          </li>`).join(``)}</ul>`,c=yt.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-calories" data-index="${t}">
        <span>${e.name}</span><small>~${e.kcal} cal</small>
      </button>`).join(``);return`
    <section class="card fuel-calories">
      <h2>Calories</h2>
      ${o}
      ${s}

      <details class="quick-add" data-quick="calories"${n.calorieQuickOpen||n.calorieError&&!n.calorieGoalOpen?` open`:``}>
        <summary>Add food</summary>
        <div class="quick-grid">${c}</div>
        <p class="hint small">Amounts are rough averages for a typical serving. Use the box below if you know the real number.</p>
        <h3>Something else</h3>
        <div class="inline-form">
          <input type="text" placeholder="What you ate" value="${B(n.calorieName)}" data-field="calorie-name" aria-label="Food name for calories" maxlength="60" />
          <input type="number" inputmode="numeric" min="1" placeholder="cal" value="${B(n.calories)}" data-field="calorie-amount" aria-label="Calories" class="grams-input" />
          <button type="button" class="secondary" data-action="add-calories">Add</button>
        </div>
        ${n.calorieError&&!n.calorieGoalOpen?`<p class="form-error" role="alert">${n.calorieError}</p>`:``}
      </details>
      ${n.calorieError&&n.calorieGoalOpen?`<p class="form-error" role="alert">${n.calorieError}</p>`:``}

      ${a===null?Ki(n):`<button type="button" class="link-button" data-action="clear-calorie-goal">Change calorie goal (${a} cal)</button>`}
    </section>
  `}function Ji(e,t,n){return`
    <header class="screen-header">
      <h1>Fuel</h1>
      <p class="lead">Tap to log water, protein and calories. Today's log starts fresh at midnight.</p>
    </header>
    ${Ui(e,U(e,t).glasses)}
    ${Gi(e,t,n)}
    ${qi(e,t,n)}
  `}function Yi(e){let{root:t,state:n}=e,r={...Vi};function i(e){return t.querySelector(`input[data-field="${e}"]`)?.value??``}function a(){r={name:i(`protein-name`),grams:i(`protein-grams`),goal:i(`protein-goal`),error:``,calorieName:i(`calorie-name`),calories:i(`calorie-amount`),calorieGoal:i(`calorie-goal`),calorieError:``,proteinQuickOpen:t.querySelector(`details[data-quick="protein"]`)?.open??r.proteinQuickOpen,calorieQuickOpen:t.querySelector(`details[data-quick="calories"]`)?.open??r.calorieQuickOpen,proteinGoalOpen:r.proteinGoalOpen,calorieGoalOpen:r.calorieGoalOpen}}function o(t,i,o){a();let s=y(new Date),c=n.nutrition;if(t===`water`)n.nutrition=xt(c,s,Number(i));else if(t===`water-goal`)n.nutrition={...c,waterGoal:Math.min(20,Math.max(1,c.waterGoal+Number(i)))};else if(t===`quick-protein`){let e=vt[Number(o)];e&&(n.nutrition=St(c,s,e))}else if(t===`add-protein`){let e=At(r.name,r.grams);e?r.error=e:(n.nutrition=St(c,s,{name:r.name.trim(),grams:Number(r.grams)}),r={...r,name:``,grams:``})}else if(t===`remove-protein`)n.nutrition=Ct(c,s,Number(o));else if(t===`show-protein-goal`)r.proteinGoalOpen=!0;else if(t===`show-calorie-goal`)r.calorieGoalOpen=!0;else if(t===`set-protein-goal`){let e=Number(r.goal);!Number.isInteger(e)||e<1||e>400?r.error=`Enter a protein goal in whole grams, between 1 and 400.`:(n.nutrition={...c,proteinGoal:e},r.proteinGoalOpen=!1)}else if(t===`clear-protein-goal`)r.goal=String(c.proteinGoal??``),r.proteinGoalOpen=!0,n.nutrition={...c,proteinGoal:null};else if(t===`quick-calories`){let e=yt[Number(o)];e&&(n.nutrition=wt(c,s,e))}else if(t===`add-calories`){let e=Dt(r.calorieName,r.calories);e?r.calorieError=e:(n.nutrition=wt(c,s,{name:r.calorieName.trim(),kcal:Number(r.calories)}),r={...r,calorieName:``,calories:``})}else if(t===`remove-calories`)n.nutrition=Tt(c,s,Number(o));else if(t===`set-calorie-goal`){let e=Ot(r.calorieGoal);e?r.calorieError=e:(n.nutrition={...c,calorieGoal:Number(r.calorieGoal)},r.calorieGoalOpen=!1)}else t===`clear-calorie-goal`&&(r.calorieGoal=String(c.calorieGoal??``),r.calorieGoalOpen=!0,n.nutrition={...c,calorieGoal:null});J(n)||(r.error=`Couldn't save on this device.`),e.render()}return{screen:()=>Ji(n.nutrition,y(new Date),r),handleAction:o}}var Xi=e=>`<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${e}</svg>`,Zi={today:Xi(`<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />`),library:Xi(`<circle cx="11" cy="11" r="6" /><path d="M16 16l5 5" />`),progress:Xi(`<path d="M4 4v16h16M8 15l4-5 3 3 5-7" />`),fuel:Xi(`<path d="M12 3c3 4.2 6 7.2 6 11a6 6 0 0 1-12 0c0-3.8 3-6.8 6-11z" />`),profile:Xi(`<circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />`)},Qi=[{title:`Your week`,text:`Tap a day to see its workout. Swipe sideways to look at other weeks.`,target:`.calendar`},{title:`Start workout`,text:`At the gym, tap this. It talks you through every set and times your rest.`,target:`[data-action="start-workout"]`},{title:`Exercises`,text:`Look up how to do any exercise, with a demo video.`,target:`[data-nav="library"]`},{title:`Progress`,text:`Your weights and charts show up here after you log sets.`,target:`[data-nav="progress"]`},{title:`Fuel`,text:`Log water, protein and calories with a tap.`,target:`[data-nav="fuel"]`},{title:`Profile`,text:`Change your goal, workout days and equipment, and back up your data here.`,target:`[data-nav="profile"]`}];function $i(e){let t=Qi[e];if(!t)return``;let n=e===Qi.length-1;return`
    <aside class="tour" role="region" aria-label="App tour, step ${e+1} of ${Qi.length}">
      <p class="tour-count">${e+1} of ${Qi.length}</p>
      <h2>${t.title}</h2>
      <p>${t.text}</p>
      <div class="tour-buttons">
        ${n?``:`<button type="button" class="link-button" data-action="tour-skip">Skip tour</button>`}
        <button type="button" class="primary" data-action="${n?`tour-skip`:`tour-next`}">${n?`Done`:`Next`}</button>
      </div>
    </aside>`}function ea(e,t){let n=Qi[t]?.target;n&&e.querySelector(n)?.classList.add(`tour-highlight`)}var ta={youtubeId:`zt8SEmJhFuY`,title:`How to pick the right weights`,channel:`Alloy Health`},na={youtubeId:`oBs-PE34x7g`,title:`How to use basic gym equipment`,channel:`SELF`};function ra(e){return`
    <a class="demo-link" href="https://www.youtube.com/watch?v=${e.youtubeId}" target="_blank" rel="noopener noreferrer">
      Watch: ${e.title} ↗<small>by ${e.channel}</small>
    </a>`}function ia(e){return`
    <header class="screen-header">
      <p class="eyebrow">New to working out?</p>
      <h1>Start here</h1>
      <p class="lead">No experience needed. Tap a topic to read it. This takes two minutes, and you can come back any time.</p>
    </header>

    <details class="card switcher guide-card" open>
      <summary>The words</summary>
      <dl class="guide-words">
        <dt>Rep</dt>
        <dd>One time doing a move, like pushing the handles forward once.</dd>
        <dt>Set</dt>
        <dd>A group of reps in a row. "3 sets of 10" means 10 reps, rest, 10 more, rest, 10 more.</dd>
        <dt>Rest</dt>
        <dd>The break between sets, usually 1 to 2 minutes. The app times it for you.</dd>
        <dt>Weight</dt>
        <dd>How heavy it is. On a machine, you set it with a pin in the weight stack.</dd>
      </dl>
    </details>

    <details class="card switcher guide-card">
      <summary>How much weight?</summary>
      <p>Start lighter than you think. Pick a weight where the last 2 reps feel hard but your form stays clean.</p>
      <ul>
        <li>If you could have done 5 or more extra reps, go heavier next time.</li>
        <li>If your form falls apart or you can't finish, go lighter.</li>
        <li>The app remembers what you did and suggests the next weight, so you don't have to work it out.</li>
      </ul>
      ${ra(ta)}
    </details>

    <details class="card switcher guide-card">
      <summary>Using a machine</summary>
      <ul>
        <li>Look at the picture on the machine. It shows the move and which muscles it works.</li>
        <li>Adjust the seat and pads first so the handles line up with your body, then pick a light weight.</li>
        <li>Move slowly and smoothly. Don't jerk the weight.</li>
        <li>Not sure how a machine works? Tap the exercise in the app for steps and a demo, or ask the staff at the front desk.</li>
      </ul>
      ${ra(na)}
    </details>

    <details class="card switcher guide-card">
      <summary>At the gym</summary>
      <ul>
        <li>Do the warm-up first, then the exercises in order, then the cool-down.</li>
        <li>If a machine is taken, tap <strong>Swap</strong> for another option, or do the next exercise and come back.</li>
        <li>Wipe the machine when you finish, and put weights back where you found them.</li>
        <li>Everyone started at the beginning. Most people at the gym are focused on their own workout.</li>
      </ul>
    </details>

    <details class="card switcher guide-card">
      <summary>Sore or hurt?</summary>
      <p>A dull, tired ache in your muscles for a day or two is normal. Sharp pain, pain in a joint, or pain that keeps coming back is not.</p>
      <ul>
        <li>If something hurts, stop, and tap <strong>This hurt</strong> so the app swaps in a gentler move.</li>
        <li>If it keeps happening, check with a doctor or physical therapist. This app isn't medical advice.</li>
      </ul>
    </details>

    <details class="card switcher guide-card">
      <summary>How this app helps</summary>
      <ul>
        <li>It plans each workout day using only the machines your gym has.</li>
        <li>Every exercise has steps, common mistakes and a demo video.</li>
        <li>Workout mode talks you through each set and runs the rest timer.</li>
        <li>It saves what you lift, so you can see your progress.</li>
      </ul>
    </details>

    <button type="button" class="primary big" data-action="close-guide">${e}</button>
  `}var aa=[{title:`Tell us about you`,detail:`Your goal, and any injuries or sore spots to protect.`},{title:`Pick your gym's equipment`,detail:`You only get exercises that use machines your gym has.`},{title:`Follow today's workout`,detail:`Step-by-step form, a rest timer, and a voice that talks you through each set.`}];function oa(e){return`
    <header class="screen-header">
      <h1>Welcome to Gym Guide</h1>
      <p class="lead">It tells you what to do at the gym today and shows exactly how to do each exercise. It takes about a minute to set up.</p>
    </header>

    <section class="card">
      <ol class="intro-steps">${aa.map((e,t)=>`
      <li>
        <span class="step-number" aria-hidden="true">${t+1}</span>
        <div>
          <strong>${e.title}</strong>
          <p class="hint">${e.detail}</p>
        </div>
      </li>`).join(``)}</ol>
    </section>

    <button type="button" class="primary big" data-action="start-setup">Get started</button>
    <p class="hint small center-text">No account needed. Everything is saved on this phone.</p>
    <button type="button" class="link-button center" data-action="open-guide">New to working out? Start here</button>

    ${e}
  `}var sa=`CC BY 4.0`,ca=`https://creativecommons.org/licenses/by/4.0/`,Z=`https://freemusicarchive.org/music`,la={file:`punjabi-bhangra.mp3`,title:`Punjabi Bhangra Energy Short Burst`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/kids-comedy-holiday/punjabi-bhangra-energy-short-burst/`},ua={file:`boom-bap.mp3`,title:`Boom Bap Old School Hip-Hop Beat`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/trap-hip-hop-beats/boom-bap-old-school-hip-hop-beat/`},da={file:`electronic-dance.mp3`,title:`Energetic Upbeat Electronic Dance`,artist:`Music for Creators`,source:`${Z}/fretbound/single/energetic-upbeat-electronic-dance/`},fa={file:`energetic-pop.mp3`,title:`Energetic Pop Background`,artist:`AurosonMusic`,source:`${Z}/aurosonmusic/single/energetic-pop-background/`},pa={file:`bright-pop.mp3`,title:`Bright Energetic Upbeat Pop`,artist:`Music for Creators`,source:`${Z}/fretbound/single/bright-energetic-upbeat-pop/`},ma={file:`disco-funk.mp3`,title:`Mirrorglow (Upbeat & Energetic Disco Funk)`,artist:`Vlad Annenkov`,source:`${Z}/vlad-annenkov/single/upbeat-energetic-disco-funk-mirrorglowmp3/`},ha={file:`pop-rock.mp3`,title:`Neon Pulse (Energetic Pop Rock)`,artist:`Vlad Annenkov`,source:`${Z}/vlad-annenkov/single/energetic-pop-rock-neon-pulsemp3/`},ga={file:`hype-trap.mp3`,title:`Hard Hype Trap for Sports Intros`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/trap-hip-hop-beats/hard-hype-trap-for-sports-intros/`},_a={file:`phonk-gym.mp3`,title:`Hard Phonk Gym Workout Track`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/phonk-drift/hard-phonk-gym-workout-track/`},va={file:`workout-edm.mp3`,title:`Workout Songs`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/epic-action-sports/workout-songs/`},ya={file:`masala-madness.mp3`,title:`Masala Madness`,artist:`Geoff Harvey - Purple Planet Music`,source:`${Z}/geoff-harvey-purple-planet-music/indian-life/masala-madness-1/`},ba={file:`mumbai-mood.mp3`,title:`Mumbai Mood`,artist:`Geoff Harvey - Purple Planet Music`,source:`${Z}/geoff-harvey-purple-planet-music/indian-life/mumbai-mood-1/`},xa={file:`bollywood-flame.mp3`,title:`Bollywood Flame With Bright Festive Drive`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/advertising-broadcast-vol-2/bollywood-flame-with-bright-festive-drive/`},Sa={file:`weekend-chill.mp3`,title:`Chill Hip Hop - Weekend Chill Beat`,artist:`AurosonMusic`,source:`${Z}/aurosonmusic/single/chill-hip-hop-weekend-chill-beat/`},Ca={push:{name:`Push day mix`,songs:[ga,la,ya,ua,da,ma,va]},pull:{name:`Pull day mix`,songs:[_a,ba,da,la,ha,ya,fa]},legs:{name:`Legs day mix`,songs:[ga,ya,ua,la,_a,ma,va]},home:{name:`At-home abs mix`,songs:[pa,ba,fa,xa,da,va]},mobility:{name:`Mobility mix`,songs:[Sa]}};function wa(){let e=new Map;for(let t of Object.values(Ca))for(let n of t.songs)e.set(n.file,n);return[...e.values()]}function Ta(e){return new URL(`music/${e.file}`,document.baseURI).href}var Ea=.3,Da=8e3;function Oa(e,t,n=()=>new Audio){let r=null,i=null,a=0,o=0,s=null,c;function l(e,t){if(!r)return;let n=Ca[e].songs;a=t%n.length,r.src=Ta(n[a]),r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`))}function u(e){i!==null&&(f(),t(e))}function d(){i!==null&&l(i,a+1)}function f(){window.clearTimeout(c),r&&=(r.pause(),null),i=null,s=null,o=0,e()}function p(){window.clearTimeout(c),r&&s!==null&&(r.volume=s,s=null)}function m(t){if(r&&i===t){r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`));return}r?.pause(),r=n(),r.addEventListener(`ended`,d),r.addEventListener(`playing`,()=>{o=0}),r.addEventListener(`error`,()=>{o+=1,o>=Ca[t].songs.length?u(`The music couldn't load. Check your connection and try again.`):d()}),i=t,o=0,s=null,l(t,0),e()}return{play:m,stop:f,current:()=>i,duck(){r&&s===null&&(s=r.volume,r.volume=s*Ea,c=window.setTimeout(p,Da))},restore:p}}var ka=`gym-guide-music`;function Aa(e){return{async savedCount(){let t=await e.open(ka),n=0;for(let e of wa())await t.match(Ta(e))&&(n+=1);return n},async save(t){navigator.storage?.persist?.().catch(()=>!1);let n=await e.open(ka),r=0;for(let e of wa()){let i=Ta(e);if(!await n.match(i)){let t=await fetch(i,{cache:`reload`});if(!t.ok)throw Error(`${e.file} could not be downloaded (${t.status})`);await n.put(i,t)}r+=1,t(r)}},async remove(){await e.delete(ka)}}}var ja=70;function Ma(e,t){if(e.kind===`checking`)return``;let n;return n=e.kind===`saved`?`
      <p class="music-status">✓ All ${t} songs are saved on this phone.</p>
      <button type="button" class="link-button" data-action="remove-music-offline">Remove saved music</button>`:e.kind===`saving`?`
      <p class="fuel-total" role="status">Saving song ${Math.min(e.done+1,t)} of ${t}…</p>
      <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e.done}">
        <div class="meter-fill" style="width: ${Math.round(e.done/t*100)}%"></div>
      </div>
      <p class="hint small">Keep this screen open until it finishes.</p>`:`
      ${e.saved>0?`<p class="hint">${e.saved} of ${t} songs are saved so far.</p>`:``}
      ${e.kind===`error`?`<p class="form-error" role="alert">${B(e.message)}</p>`:``}
      <button type="button" class="secondary" data-action="save-music-offline">${e.saved>0?`Finish saving the music`:`Save music for offline use`}</button>
      <p class="hint small">Uses about ${ja} MB on this phone. Do it on Wi-Fi.</p>`,`
    <section class="card offline-music">
      <h2>Music offline</h2>
      <p class="hint">Songs play from the internet. Save them on this phone to listen at the gym without signal.</p>
      ${n}
    </section>`}function Na(e){let t=`caches`in window?Aa(window.caches):null,n=wa().length,r={kind:`checking`};function i(){t?.savedCount().catch(()=>0).then(t=>{r=t===n?{kind:`saved`}:{kind:`idle`,saved:t},e.redrawProfile()})}async function a(){if(t&&r.kind!==`saving`){r={kind:`saving`,done:0},e.redrawProfile();try{await t.save(t=>{r={kind:`saving`,done:t},e.redrawProfile()}),r={kind:`saved`},e.redrawProfile(),e.showToast(`Music saved on this phone.`)}catch{r={kind:`error`,message:`Couldn't save all the music. Check your connection and free space on this phone, then try again.`,saved:await t.savedCount().catch(()=>0)},e.redrawProfile()}}}async function o(){await t?.remove(),r={kind:`idle`,saved:0},e.redrawProfile(),e.showToast(`Saved music removed. Songs will play from the internet.`)}return{card:()=>t?Ma(r,n):``,check:i,handleAction(e){if(e===`save-music-offline`)a();else if(e===`remove-music-offline`)o();else return!1;return!0}}}function Pa(e,t){let n=Ca[e],r=t===e,i=r?`<button type="button" class="secondary" data-action="stop-music" aria-label="Stop music">■ Stop</button>`:`<button type="button" class="secondary" data-action="play-music" data-workout="${e}" aria-label="Play ${n.name}">▶ Play</button>`;return`
    <section class="card music-card row-card">
      <p class="music-name">♪ ${r?`Playing now`:n.name}</p>
      ${i}
    </section>`}function Fa(){return`
    <details class="card music-credits">
      <summary>Music credits</summary>
      <ul>${wa().map(e=>`<li><a href="${e.source}" target="_blank" rel="noopener noreferrer">${B(e.title)}</a> by ${B(e.artist)}</li>`).join(``)}</ul>
      <p class="hint small">From the Free Music Archive, used under the <a href="${ca}" target="_blank" rel="noopener noreferrer">${sa}</a> license. The songs by Alex Morgan are listed there as AI-generated.</p>
    </details>`}var Ia={open:!1,feel:null,hours:``,readiness:``,error:``};function La(e){return`
    <section class="card recovery-card">
      <h2>Morning check-in</h2>
      <p class="feel-question" id="feel-question">How rested do you feel?</p>
      <div class="feel-row" role="group" aria-labelledby="feel-question">${mr.map(t=>`
      <button type="button" class="feel-option${e.feel===t?` active`:``}" data-action="checkin-feel" data-value="${t}" aria-pressed="${e.feel===t}">
        <strong>${t}</strong><small>${pr[t]}</small>
      </button>`).join(``)}</div>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Hours slept <small>(optional)</small></span>
          <input type="number" inputmode="decimal" step="0.5" min="0" max="24" placeholder="7.5" value="${e.hours}" data-field="checkin-hours" />
        </label>
        <label class="calendar-field">
          <span>Readiness <small>(optional)</small></span>
          <input type="number" inputmode="numeric" step="1" min="0" max="100" placeholder="0–100" value="${e.readiness}" data-field="checkin-readiness" />
        </label>
      </div>
      <p class="hint small">Readiness is the score from a ring or watch such as Oura, if you have one. Skip it if you don't.</p>
      ${e.error?`<p class="form-error" role="alert">${e.error}</p>`:``}
      <div class="button-row">
        <button type="button" class="secondary" data-action="checkin-cancel">Cancel</button>
        <button type="button" class="primary" data-action="checkin-save">Save check-in</button>
      </div>
    </section>`}function Ra(e,t){if(t.open)return La(t);if(!e)return`
      <section class="card recovery-card row-card">
        <div>
          <h2>Morning check-in</h2>
          <p class="hint">Ten seconds. Say how rested you feel, and a worn-out day gets an easier workout.</p>
        </div>
        <button type="button" class="secondary" data-action="checkin-open">Check in</button>
      </section>`;let n=xr(e);return`
    <section class="card recovery-card level-${n}">
      <h2>Today's recovery</h2>
      <p class="recovery-summary">${wr(e)}</p>
      <p class="recovery-advice">${Sr(n)}</p>
      <button type="button" class="link-button" data-action="checkin-open">Change check-in</button>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function za(e){let{root:t,state:n}=e,r={...Ia};function i(){return Tr(n.recovery,y(new Date))}function a(){let e=t.querySelector(`input[data-field="checkin-hours"]`),n=t.querySelector(`input[data-field="checkin-readiness"]`);e&&(r.hours=e.value),n&&(r.readiness=n.value)}function o(t,o){if(a(),t===`checkin-open`){let e=i();r={open:!0,feel:e?.feel??null,hours:e?.hours===null||e===void 0?``:String(e.hours),readiness:e?.readiness===null||e===void 0?``:String(e.readiness),error:``}}else if(t===`checkin-feel`)r={...r,feel:Number(o),error:``};else if(t===`checkin-cancel`)r={...Ia};else if(t===`checkin-save`){let t=Dr(r.feel,r.hours,r.readiness);if(!t.ok)r={...r,error:t.error};else{n.recovery=Er(n.recovery,{date:y(new Date),feel:t.feel,hours:t.hours,readiness:t.readiness}),r={...Ia},J(n),e.render(),e.showToast(`Check-in saved.`);return}}e.render()}return{today:i,card:()=>Ra(i(),r),handleAction(e,t){return e.startsWith(`checkin-`)?(o(e,t),!0):!1}}}var Ba=240;function Va(e,t){let n=e.exercises.map(n=>(t[n.exercise.id]??[]).find(t=>t.date===e.startedAt)?.sets.length??0),r=e.finishedAt===void 0?null:Math.round((e.finishedAt-Date.parse(e.startedAt))/6e4);return{sets:n.reduce((e,t)=>e+t,0),exercisesDone:n.filter(e=>e>0).length,exercisesPlanned:e.exercises.length,minutes:r!==null&&r>=1&&r<=Ba?r:null}}function Ha(e,t){let n=(t.getDay()+6)%7;for(let t=1;t<=7;t++){let r=(n+t)%7,i=e[r];if(!i)continue;let a=t===1?`tomorrow`:t===7?`next ${D[r]}`:`on ${D[r]}`;return`Next up: ${z[i]} ${a}`}return null}function Ua(e){let t=[`<strong>${e.sets}</strong> ${e.sets===1?`set`:`sets`}`,e.exercisesDone===e.exercisesPlanned?`<strong>${e.exercisesDone}</strong> ${e.exercisesDone===1?`exercise`:`exercises`}`:`<strong>${e.exercisesDone}</strong> of ${e.exercisesPlanned} exercises`];return e.minutes!==null&&t.push(`<strong>${e.minutes}</strong> min`),t.join(` · `)}function Wa(e,t,n=null){return{day:e.day,startedAt:t.toISOString(),exercises:e.exercises,prescription:Cr(e.prescription,n),index:0,setNumber:1,phase:e.exercises.length>0?`lift`:`done`,restEndsAt:null,recoveryLevel:n}}function Q(e){return e.exercises[e.index]}function Ga(e){return e.setNumber>=e.prescription.sets}function Ka(e){return e.index>=e.exercises.length-1}function qa(e){return{...e,phase:`log`}}function Ja(e,t){if(Ga(e)&&Ka(e))return{...e,phase:`done`,restEndsAt:null};let n=t+e.prescription.restSeconds*1e3;return Ga(e)?{...e,index:e.index+1,setNumber:1,phase:`rest`,restEndsAt:n}:{...e,setNumber:e.setNumber+1,phase:`rest`,restEndsAt:n}}function Ya(e){return{...e,phase:`lift`,restEndsAt:null}}function Xa(e,t,n){let r=Math.max(e.restEndsAt??n,n);return{...e,restEndsAt:r+t*1e3}}function Za(e){return Ka(e)?{...e,phase:`done`,restEndsAt:null}:{...e,index:e.index+1,setNumber:1,phase:`lift`,restEndsAt:null}}function Qa(e,t){let n=e.exercises.map((n,r)=>r===e.index?t:n);return{...e,exercises:n,setNumber:1,phase:`lift`,restEndsAt:null}}function $a(e,t){return e.restEndsAt===null?0:Math.max(0,Math.ceil((e.restEndsAt-t)/1e3))}function $(e,t,n){let r=An(e,n);return r&&r.date===t.startedAt?r.sets:[]}function eo(e,t,n){let r=(e[n]??[]).filter(e=>e.date!==t.startedAt);return r[r.length-1]}function to(e,t,n,r=`lb`){let i=j(n.exercise,t.prescription);return jn(eo(e,t,n.exercise.id),i,n.exercise.weightKind??`load`,{holdWeight:t.recoveryLevel===`easy`,weightUnit:r})}function no(e,t){let n=j(t.exercise,e.prescription);return`${n.min}–${n.max} ${n.unit}`}function ro(e){return`Exercise ${e.index+1} of ${e.exercises.length} · ${Me(e.day)}`}function io(e,t=!1){return`
    <div class="session-controls">
      <button type="button" class="link-button" data-action="toggle-voice" aria-pressed="${e}">Voice: ${e?`on`:`off`}</button>
      ${t?`<button type="button" class="link-button" data-action="skip-exercise">Skip exercise</button>`:``}
      <button type="button" class="link-button" data-action="end-workout">End workout</button>
    </div>
  `}function ao(e,t,n,r,i,a=`lb`,o=``){let s=Q(e);if(!s)return``;let c=eo(t,e,s.exercise.id),l=j(s.exercise,e.prescription),u=to(t,e,s,a),d=$(t,e,s.exercise.id);return`
    <header class="screen-header">
      <p class="eyebrow">${ro(e)}</p>
      <h1>${s.exercise.name}</h1>
    </header>

    ${r?`<p class="notice" role="status">${r}</p>`:``}
    ${e.recoveryLevel===`easy`?`<p class="notice">Easy day: fewer sets, and your weights stay where they were.</p>`:``}

    <section class="card set-card">
      <p class="set-label">Set ${e.setNumber} of ${e.prescription.sets}</p>
      <p class="set-target">${no(e,s)}</p>
      ${c?`<p class="last-time">Last time: ${Y(c,l.unit,a)}</p>`:``}
      ${e.setNumber===1?`<p class="suggestion">${u.message}</p>`:``}
      ${d.length>0?`<p class="last-time">Today so far: ${Y({date:``,sets:d},l.unit,a)}</p>`:``}
    </section>

    ${Le(s)}

    <button type="button" class="primary big" data-action="set-done">Set done</button>

    ${it(s.exercise.id,o,!0)}

    <details class="card how-to">
      <summary>How to do it</summary>
      ${Re(s)}
    </details>

    <div class="button-row">
      <button type="button" class="secondary" data-action="open-swap">Swap</button>
      <button type="button" class="secondary" data-action="hurt">This hurt</button>
    </div>
    ${Pa(e.day,i)}
    ${io(n,!0)}
  `}function oo(e,t){let n=e.exercises.reduce((n,r)=>n+$(t,e,r.exercise.id).length,0),r=n>0?`You've logged ${n} ${n===1?`set`:`sets`}. They're saved, and this workout will show as done on your calendar.`:`You haven't logged any sets yet, so nothing will be saved.`;return`
    <header class="screen-header">
      <p class="eyebrow">${ro(e)}</p>
      <h1>End this workout?</h1>
      <p class="lead">${r}</p>
    </header>

    <button type="button" class="primary big" data-action="confirm-end">Yes, end workout</button>
    <button type="button" class="secondary" data-action="cancel-end">Keep going</button>
  `}function so(e,t){let n=Q(e);if(!n)return``;let r=t.length===0?`<section class="card empty"><p>There's no other exercise for this spot with your gym's equipment. You can skip it instead.</p></section>`:t.map((e,t)=>`
        <button type="button" class="swap-option" data-action="choose-swap" data-index="${t}">
          <strong>${e.exercise.name}</strong>
          <small>${e.exercise.muscles}</small>
          ${e.cautionAreas.length>0?`<small class="swap-caution">Go easy: has a caution for you</small>`:``}
        </button>`).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">${ro(e)}</p>
      <h1>Swap ${n.exercise.name}</h1>
      <p class="lead">Pick another exercise that works the same muscles. ${n.exercise.name} stays in future workouts.</p>
    </header>

    <div class="swap-list">${r}</div>

    <button type="button" class="secondary" data-action="cancel-swap">Keep ${n.exercise.name}</button>
  `}function co(e,t,n,r=`lb`,i=!1){let a=Q(e);if(!a)return``;let o=a.exercise.weightKind??`load`,s=j(a.exercise,e.prescription),c=a.exercise.equipment.includes(`dumbbells`),l=o===`assist`?`Help from the machine (${r})`:c?`Weight (${r}, per dumbbell)`:`Weight (${r})`,d=(e,t,n,r)=>`
    <label class="stepper-label" for="log-${e}">${t}</label>
    <div class="stepper">
      <button type="button" class="step-button" data-step="${e}" data-delta="${-r}" aria-label="Less">−</button>
      <input id="log-${e}" type="number" inputmode="decimal" min="0" value="${n}" data-field="${e}" />
      <button type="button" class="step-button" data-step="${e}" data-delta="${r}" aria-label="More">+</button>
    </div>
  `;return`
    <header class="screen-header">
      <p class="eyebrow">${ro(e)}</p>
      <h1>${i?`Fix set ${e.setNumber}`:`Set ${e.setNumber} done`}</h1>
      <p class="lead">${a.exercise.name}: ${i?`what should it say?`:`what did you do?`}</p>
    </header>

    <section class="card">
      ${o===`bodyweight`?``:d(`weight`,l,t.weight,u(r))}
      ${d(`amount`,s.unit===`seconds`?`Seconds held`:`Reps`,t.amount,1)}
      ${n?`<p class="form-error" role="alert">${n}</p>`:``}
    </section>

    ${i?`<button type="button" class="primary big" data-action="save-fix">Save change</button>
    <button type="button" class="secondary" data-action="cancel-fix">Cancel</button>`:`<button type="button" class="primary big" data-action="save-set">Save set</button>
    <button type="button" class="secondary" data-action="cancel-log">Back to the set</button>`}
  `}function lo(e,t){return e.exercises.flatMap(n=>$(t,e,n.exercise.id).map((e,t)=>({planned:n,setIndex:t,set:e})))}function uo(e,t,n=`lb`){let r=e.phase===`rest`,i=lo(e,t).map(({planned:t,setIndex:r,set:i},a)=>{let o=j(t.exercise,e.prescription).unit===`seconds`?`sec`:`reps`,s=i.weight===null?``:`${l(i.weight,n)} × `;return`<button type="button" class="swap-option" data-action="choose-fix" data-index="${a}">
        <strong>${t.exercise.name}</strong>
        <small>Set ${r+1}: ${s}${i.amount} ${o}</small>
      </button>`});return`
    <header class="screen-header">
      <p class="eyebrow">${ro(e)}</p>
      <h1>Fix a set</h1>
      <p class="lead">Tap the set you logged wrong.${r?` Your rest timer keeps going.`:``}</p>
    </header>

    <div class="swap-list">${i.join(``)}</div>

    <button type="button" class="secondary" data-action="cancel-fix">${r?`Back to rest`:`Back`}</button>
  `}function fo(e,t,n,r,i=!1){let a=Q(e);if(!a)return``;let o=e.setNumber===1?`Next exercise: <strong>${a.exercise.name}</strong>`:`Next: set ${e.setNumber} of ${e.prescription.sets}, ${a.exercise.name}`;return`
    <header class="screen-header">
      <p class="eyebrow">${ro(e)}</p>
      <h1>Rest</h1>
    </header>

    <section class="card rest-card">
      <p class="timer" data-timer aria-live="off">${V($a(e,t))}</p>
      <p>${o}</p>
    </section>

    <div class="button-row">
      <button type="button" class="secondary" data-action="add-rest">+30 seconds</button>
      <button type="button" class="primary" data-action="skip-rest">Skip rest</button>
    </div>

    <details class="rest-more"${i?` open`:``}>
      <summary>More</summary>
      <div class="rest-more-body">
        <button type="button" class="secondary" data-action="fix-set">Fix a set</button>
        ${Pa(e.day,r)}
        ${io(n)}
      </div>
    </details>
  `}function po(e,t,n){let r=Rn(t,e.startedAt,e=>w[e]?w[e].weightKind??`load`:null);if(r.length===0)return``;let i=r.map(({exerciseId:e,value:t,previous:r})=>{let i=w[e],a=i.weightKind??`load`,s=a===`bodyweight`?i.timedSeconds?`sec`:`reps`:n,l=e=>c(a===`bodyweight`?e:o(e,n));return`<li><strong>${i.name}</strong>: ${l(t)} ${s} <span class="hint">(was ${l(r)} ${s})</span></li>`}).join(``);return`
    <section class="card highlights-card">
      <h2>🏆 New personal best${r.length===1?``:`s`}</h2>
      <ul class="summary">${i}</ul>
    </section>`}function mo(e,t,n,r=`lb`,i=null){let a=e.exercises.map(n=>{let i=$(t,e,n.exercise.id),a=j(n.exercise,e.prescription).unit,o=i.length>0?Y({date:``,sets:i},a,r):`skipped`;return`<li><strong>${n.exercise.name}</strong><br /><span class="hint">${o}</span></li>`}).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">Workout done</p>
      <h1>Nice work!</h1>
      <p class="lead">Your sets are saved, so next time you'll see what you did today.</p>
    </header>

    <section class="card finish-summary">
      <p class="finish-stats">${Ua(Va(e,t))}</p>
      ${i?`<p class="hint">${i}</p>`:``}
      <button type="button" class="secondary" data-action="share-week">Share my week</button>
    </section>

    ${po(e,t,r)}

    <section class="card">
      <h2>Today</h2>
      <ul class="summary">${a}</ul>
    </section>

    <section class="card">
      <h2>Cool down</h2>
      <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
      ${sr}
      ${Ie(n,`warm-up`)}
    </section>

    <button type="button" class="secondary" data-action="fix-set">Fix a set</button>
    <button type="button" class="primary" data-action="close-session">Back to workouts</button>
  `}function ho(e,t){let n=j(t.exercise,e.prescription);return`${n.min} to ${n.max} ${n.unit}`}function go(e,t,n=`lb`){let r=Q(e);if(!r)return``;let i=[e.setNumber===1?`${r.exercise.name}.`:``,`Set ${e.setNumber} of ${e.prescription.sets}.`,`${ho(e,r)}.`],a=to(t,e,r,n);return e.setNumber===1&&a.weight!==null&&i.push(`Try ${c(o(a.weight,n))} ${d(n)}.`),i.filter(Boolean).join(` `)}function _o(e){return`Rest ${e.prescription.restSeconds} seconds.`}function vo(e){let t=Q(e);return t?e.setNumber===1?`10 seconds. Next up, ${t.exercise.name}.`:`10 seconds. Get ready for set ${e.setNumber}.`:``}var yo=10,bo=900,xo=30,So=`If the pain was sharp or keeps coming back, stop and get it checked.`;function Co(e,t){let{root:n,state:r,music:i}=e,a=!0,s={weight:``,amount:``},c=``,l,u=!1,d=``,f=null,p=!1,m=null;function h(e){a&&e&&$n(e,{onStart:i.duck,onEnd:i.restore})}function g(){let n=r.session;if(!n)return``;if(p)return oo(n,r.history);if(m){let e=m.editing,t=e?n.exercises.findIndex(t=>t.exercise.id===e.exerciseId):-1;return e&&t>=0?co({...n,index:t,setNumber:e.setIndex+1},s,c,r.weightUnit,!0):uo(n,r.history,r.weightUnit)}switch(n.phase){case`lift`:return f?so(n,f):ao(n,r.history,a,d,i.current(),r.weightUnit,r.machineNotes[Q(n)?.exercise.id??``]??``);case`log`:return co(n,s,c,r.weightUnit);case`rest`:return fo(n,Date.now(),a,i.current(),e.root.querySelector(`details.rest-more`)?.open??!1);case`done`:return mo(n,r.history,t.workoutFor(n.day).coolDown,r.weightUnit,Ha((r.profile??W).weekPlan,new Date))}}function _(){let e=r.session,t=e&&Q(e);if(!e||!t)return;let n=$(r.history,e,t.exercise.id),i=n[n.length-1],a=to(r.history,e,t,r.weightUnit),l=j(t.exercise,e.prescription),u=i?.weight??a.weight;s={weight:u==null?``:String(o(u,r.weightUnit)),amount:String(i?.amount??l.max)},c=``}function v(e){return n.querySelector(`input[data-field="${e}"]`)?.value.trim()??``}function y(t){let n=(t.exercise.weightKind??`load`)===`bodyweight`;s={weight:v(`weight`),amount:v(`amount`)};let i=Wn(s.weight,s.amount,n,r.weightUnit);return`error`in i?(c=i.error,e.render(),null):i.set}function b(t,n){let i=r.session,a=i&&$(r.history,i,t)[n];i&&a&&m&&(m={editing:{exerciseId:t,setIndex:n}},s={weight:a.weight===null?``:String(o(a.weight,r.weightUnit)),amount:String(a.amount)},c=``,e.render(),window.scrollTo(0,0))}function x(){m=null;let t=r.session;if(t?.phase===`rest`&&$a(t,Date.now())===0){r.session=Ya(t),J(r),C();return}e.render(),window.scrollTo(0,0)}function S(){let e=r.session,t=m?.editing,n=e?.exercises.find(e=>e.exercise.id===t?.exerciseId);if(!e||!t||!n)return;let i=y(n);i&&(r.history=Nn(r.history,t.exerciseId,e.startedAt,t.setIndex,i),J(r),x())}function ee(){let e=r.session,t=e&&Q(e);if(!e||!t)return;let n=y(t);n&&(r.history=Mn(r.history,t.exercise.id,e.startedAt,n),r.session=Ja(e,Date.now()),J(r),C())}function C(n=!0){window.clearInterval(l);let i=r.session;i&&(i.phase===`rest`?(u=$a(i,Date.now())<=yo,h(_o(i)),l=window.setInterval(w,250)):i.phase===`lift`?n&&h(go(i,r.history,r.weightUnit)):i.phase===`done`&&(ar(!1),i.finishedAt===void 0&&(r.session={...i,finishedAt:Date.now()}),t.completeWorkout(i.day),J(r),h(`Workout complete. Nice work!`),tr([200,100,200])),e.render(),window.scrollTo(0,0))}function w(){let e=r.session;if(!e||e.phase!==`rest`){window.clearInterval(l);return}let t=$a(e,Date.now()),i=n.querySelector(`[data-timer]`);i&&(i.textContent=V(t)),!u&&t<=yo&&t>0&&(u=!0,h(vo(e))),t===0&&!m&&(tr([300]),r.session=Ya(e),J(r),h(`Go.`),i&&(i.textContent=`Go!`,i.closest(`.rest-card`)?.classList.add(`rest-over`)),window.setTimeout(()=>{(!i||n.querySelector(`.rest-over`))&&C()},bo),window.clearInterval(l))}function T(){window.clearInterval(l),m=null,f=null,p=!1,ar(!1),r.session=null,e.resetCalendarSelection(),J(r),e.go(`today`)}function E(){let e=r.session,n=e&&Q(e);if(!e||!n||!r.profile)return;t.setAvoided(n.exercise.id,!0);let i=e.exercises.map(e=>e.exercise.id),[a]=Ce(n,r.profile,r.equipmentIds,i);a?(r.session=Qa(e,a),d=`Switched from ${n.exercise.name} to ${a.exercise.name}, which works the same muscles. ${So}`,h(`Switched to ${a.exercise.name}.`)):(r.session=Za(e),d=`Skipped ${n.exercise.name}. There's no gentler option for it with your equipment. ${So}`),J(r),C(!a)}function te(o,s){let c=r.session;if(c){if(o!==`hurt`&&o!==`toggle-voice`&&(d=``),o===`open-swap`){let t=Q(c);if(!t||!r.profile)return;let n=c.exercises.map(e=>e.exercise.id);f=Ce(t,r.profile,r.equipmentIds,n),e.render(),window.scrollTo(0,0)}else if(o===`choose-swap`){let e=f?.[Number(s)];if(f=null,!e)return;r.session=Qa(c,e),J(r),C()}else if(o===`cancel-swap`)f=null,e.render();else if(o===`hurt`)E();else if(o===`set-done`)r.session=qa(c),_(),e.render(),n.querySelector(`input[data-field="amount"]`)?.select();else if(o===`cancel-log`)r.session={...c,phase:`lift`},J(r),e.render(),window.scrollTo(0,0);else if(o===`save-set`)ee();else if(o===`fix-set`)m={editing:null},e.render(),window.scrollTo(0,0);else if(o===`choose-fix`){let e=lo(c,r.history)[Number(s)];e&&b(e.planned.exercise.id,e.setIndex)}else o===`save-fix`?S():o===`cancel-fix`?x():o===`add-rest`?(r.session=Xa(c,xo,Date.now()),u=!1,J(r),w()):o===`skip-rest`?(r.session=Ya(c),J(r),C()):o===`skip-exercise`?(r.session=Za(c),J(r),C()):o===`play-music`?i.play(c.day):o===`stop-music`?i.stop():o===`toggle-voice`?(a=!a,a||window.speechSynthesis?.cancel(),e.render()):o===`end-workout`?(p=!0,e.render(),window.scrollTo(0,0)):o===`cancel-end`?(p=!1,e.render()):o===`confirm-end`?(c.exercises.some(e=>$(r.history,c,e.exercise.id).length>0)&&t.completeWorkout(c.day),T()):o===`close-session`&&T()}}return{screen:g,handleAction:te,begin(e,t){r.session=Wa(e,new Date,t),J(r),ar(!0),C()},resume(){r.session&&(r.session.phase===`rest`&&$a(r.session,Date.now())===0&&(r.session=Ya(r.session)),r.session.phase===`log`&&_(),ar(r.session.phase!==`done`),r.session.phase===`rest`&&(l=window.setInterval(w,250)))}}}var wo=`<p class="notice save-warning" role="alert">This phone isn't letting the app save right now, so what you log could be lost when you close this page. Free up some storage, or open the app outside a private tab.</p>`;function To(e){let t=Cn();zt(t.customExercises);let a=t.profile?t.equipmentConfirmed?ui()??`today`:`equipment`:`intro`,o=y(new Date),s=null,c=0,l=null,u=t.profile?{...t.profile}:{...W},f,p=!1,m=!1,h=!1,g=!1,_=null,v=``,b=`all`,x=!1,S=`today`,ee=null;Dn(()=>queueMicrotask(R));let C=Oa(R,N),T={root:e,state:t,music:C,render:R,showToast:N,go:P,redrawProfile:le,resetCalendarSelection:de},E=or(T),te=hi(T),ne=On(T),ie=kn(T),ae=Gn(T),O=ur(T),oe=Na(T),k=Yi(T),se=za(T),ce=Co(T,{workoutFor:z,completeWorkout:Pe,setAvoided:Te});function M(e){J(t)?e&&N(e):N(`Couldn't save on this device — changes last until you close the page.`)}function N(t){let n=e.querySelector(`.toast`);n&&(n.textContent=t,n.classList.add(`visible`),window.clearTimeout(f),f=window.setTimeout(()=>n.classList.remove(`visible`),2500))}function P(n){a=n,ci(n),_=null,ee=null,n===`profile`&&(u=t.profile?{...t.profile}:{...W}),R(),Bi(e),window.scrollTo(0,0)}function F(){return S===`profile`?`Back to your profile`:S===`today`?`Back to your workout`:`Back`}function I(){return`
      <section class="card row-card">
        <div>
          <h2>New to working out?</h2>
        </div>
        <button type="button" class="secondary" data-action="open-guide">Start here</button>
      </section>`}function le(){a===`profile`&&!t.session&&R()}function L(){return t.workoutLog.length===0&&Object.keys(t.history).length===0}function ue(n){let r=e.querySelector(`input[data-field="machine-note"][data-exercise="${n}"]`);if(!r||!w[n])return;let i=rt(r.value),a={...t.machineNotes};i?a[n]=i:delete a[n],t.machineNotes=a,J(t),r.value=i,N(i?`Saved. It will show here next time.`:`Note cleared.`)}function de(){o=y(new Date),c=0,l=null}function fe(e){let n=Math.min(12,Math.max(-4,e));if(n===c)return;c=n,l=null;let r=re(new Date,(t.profile??W).weekPlan,t.workoutLog,c);o=(r.find(e=>e.isToday)??r[0]).key,R()}function pe(e){let n=e?t.session?.day:a===`today`?Me().shown:null;return n?` type-${n}`:``}function R(){let n=e.querySelector(`details.profile-more`);n&&(p=n.open);let r=e.querySelector(`details.setup-options`);r&&(x=r.open);let i=e.querySelector(`details.focus-picker`);i&&(m=i.open);let a=e.querySelector(`details.week-days`);a&&(h=a.open);let o=e.querySelector(`details.body-weight`);o&&(g=o.open);let c=t.profile!==null&&t.equipmentConfirmed,l=t.session!==null;document.body.classList.toggle(`has-nav`,c&&!l);let u=Ri(document.activeElement,e);e.innerHTML=`
      <main class="screen${pe(l)}">${En()?wo:``}${l?ce.screen():he()}</main>
      ${c&&!l?Be():``}
      ${s!==null&&c&&!l?$i(s):``}
      <div class="toast" role="status" aria-live="polite"></div>
    `,s!==null&&c&&!l&&ea(e,s),O.fill(),u&&zi(e,u)}function me(){return{equipmentIds:t.equipmentIds,protectedAreas:t.profile?.protectedAreas??[],history:t.history,weightUnit:t.weightUnit}}function he(){if(a===`intro`)return oa(E.card(!0));if(a===`guide`)return ia(F());if(a===`profile`)return be();if(a===`equipment`)return De();if(a===`edit-workout`)return Un(t.history,ae.date(),t.weightUnit);if(a===`library`)return ai(v,b,me());if(a===`progress`){let e=(t.profile??W).weekPlan.filter(Boolean).length;return Gr(t.history,new Date,e,t.recovery,t.weightUnit,{workoutLog:t.workoutLog,bodyWeights:t.bodyWeights,bodyWeightOpen:g})}return a===`fuel`?k.screen():ze()}function ge(e,t,n,r,i=``){return`<button type="button" class="chip${r?` active`:``}" data-group="${e}" data-value="${t}" aria-pressed="${r}">
      <span>${n}</span>${i?`<small>${i}</small>`:``}
    </button>`}function _e(){return`
      <details class="card switcher profile-more"${p?` open`:``}>
        <summary>More: calendar, backup, home screen</summary>
        <div class="more-body">
          ${fr(dr())}
          ${_i(t.calendar,Ce(t.profile??W),ee)}
          ${oe.card()}
          ${E.card(!1)}
          ${Fa()}
        </div>
      </details>`}function ve(){return`
      <section class="card">
        ${je(`⚖️`,`gold`,`Weight units`)}
        <div class="chip-row two">
          ${i.map(e=>`<button type="button" class="chip${t.weightUnit===e?` active`:``}" data-action="set-weight-unit" data-value="${e}" aria-pressed="${t.weightUnit===e}">${e===`lb`?`Pounds (lb)`:`Kilograms (kg)`}</button>`).join(``)}
        </div>
        <p class="hint small">Only changes how weights are shown and typed. Your logged weights are kept.</p>
      </section>

      <section class="card">
        ${je(`📅`,`purple`,`Your week`)}
        <p class="hint">Choose how many days a week, or pick each day yourself. Push is chest, shoulders and triceps. Pull is back and biceps. Legs days include abs. Home is a short abs routine you can do anywhere.</p>
        ${Mi(u.weekPlan,u.focusPlan,m,h)}
      </section>`}function ye(e){return`
      <details class="card switcher setup-options"${x?` open`:``}>
        <summary>Optional: weight units and workout days</summary>
        <div class="more-body">${e}</div>
      </details>`}function be(){let e=t.profile===null,n=ve();return`
      <header class="screen-header">
        ${e?`<p class="eyebrow">Step 1 of 2</p>`:``}
        <h1>${e?`Let's set up your workouts`:`Your profile`}</h1>
        <p class="lead">This shapes which exercises you get and how many sets and reps. It stays on this phone.</p>
      </header>

      ${Se()}

      ${e||!L()?``:I()}

      <section class="card">
        ${je(`🎯`,`teal`,`Your goal`)}
        <div class="chip-col">
          ${Ht.map(e=>ge(`goal`,e.id,e.label,u.goal===e.id,e.detail)).join(``)}
        </div>
      </section>

      <section class="card">
        ${je(`🏋️`,`blue`,`Lifting experience`)}
        <div class="chip-row three">
          ${Ut.map(e=>ge(`experience`,e.id,e.label,u.experience===e.id)).join(``)}
        </div>
      </section>

      ${e?``:n}

      <section class="card">
        ${je(`🛡️`,`green`,`Areas to protect`)}
        <p class="hint">Tick anything that's injured, painful, or tight. Risky exercises for these areas are left out, and gentler ones are picked instead.</p>
        <div class="chip-row">
          ${Wt.map(e=>ge(`area`,e.id,e.label,u.protectedAreas.includes(e.id))).join(``)}
        </div>
        <p class="disclaimer">This app isn't medical advice. If something hurts beyond normal muscle tiredness, stop, and check with a doctor or physical therapist about what's safe for you.</p>
      </section>

      ${e?ye(n):``}

      ${we()}

      ${e?``:_e()}

      <button type="button" class="primary" data-action="save-profile">${e?`Next: your gym's equipment`:`Save profile`}</button>
      ${e?``:`<button type="button" class="secondary" data-nav="equipment">Edit gym equipment</button>`}
      ${e||L()?``:`<button type="button" class="link-button center" data-action="open-guide">Read the Start here guide</button>`}
      ${e?``:`<button type="button" class="link-button center" data-action="start-tour">Take a quick tour of the app</button>`}
    `}function xe(){let e=t.profile;if(!e)return!1;let n=e=>[...e.protectedAreas].sort().join(`,`);return u.goal!==e.goal||u.experience!==e.experience||n(u)!==n(e)||Ce(e)}function Se(){return _===null?``:`
      <section class="notice" role="alert">
        <p><strong>You changed your profile but haven't saved it.</strong></p>
        <div class="button-row">
          <button type="button" class="primary" data-action="save-and-leave">Save and go</button>
          <button type="button" class="secondary" data-action="leave-profile">Leave without saving</button>
        </div>
      </section>`}function Ce(e){return JSON.stringify(u.weekPlan)!==JSON.stringify(e.weekPlan)||JSON.stringify(u.focusPlan)!==JSON.stringify(e.focusPlan)}function we(){let e=t.profile?.avoidedExerciseIds??[];if(e.length===0)return``;let n=e.filter(e=>w[e]).map(e=>`
        <li class="avoided-item">
          <span>${w[e].name}</span>
          <button type="button" class="link-button" data-action="unavoid" data-exercise="${e}">Bring back</button>
        </li>`).join(``);return`
      <section class="card">
        ${je(`⚠️`,`pink`,`Exercises that hurt`)}
        <p class="hint">You marked these as hurting, so they're left out of your workouts.</p>
        <ul class="avoided-list">${n}</ul>
      </section>
    `}function Te(e,n){if(!t.profile)return;let r=t.profile.avoidedExerciseIds.filter(t=>t!==e);t.profile={...t.profile,avoidedExerciseIds:n?[...r,e]:r},u={...u,avoidedExerciseIds:t.profile.avoidedExerciseIds}}function Ee(e,t){let n=et.filter(t=>e.ids.includes(t.id));return`
      <section class="card equipment-list">
        <h2>${e.title}</h2>
        ${n.map(e=>`
          <label class="equipment-item">
            <input type="checkbox" data-equipment="${e.id}" ${t.has(e.id)?`checked`:``} />
            <span><strong>${e.name}</strong><small>${e.hint}</small></span>
          </label>`).join(``)}
      </section>`}function De(){let e=!t.equipmentConfirmed,n=new Set(t.equipmentIds);return`
      <header class="screen-header">
        ${e?`<p class="eyebrow">Step 2 of 2</p>`:``}
        <h1>What does your gym have?</h1>
        <p class="lead">Untick anything your gym doesn't have. You'll only get exercises you can actually do there. Not sure what something is? Leave it ticked: you can change this any time in Profile.</p>
      </header>

      ${nt.map(e=>Ee(e,n)).join(``)}

      <button type="button" class="primary" data-action="save-equipment">${e?`See today's workout`:`Save equipment`}</button>
    `}function Oe(e,n,r){let{exercise:i}=e,a=An(t.history,i.id);return`
      <article class="exercise">
        <details>
          <summary>
            <span class="exercise-number">${n+1}</span>
            <span class="exercise-title">
              <strong>${i.name}</strong>
              <small>${i.muscles}</small>
              ${a?`<small class="last-time">Last time: ${Y(a,r,t.weightUnit)}</small>`:``}
            </span>
            <span class="chevron" aria-hidden="true"></span>
          </summary>
          ${Yr(t.history,i.id,r,t.weightUnit)}
          ${Le(e)}
          ${Re(e)}
          ${it(i.id,t.machineNotes[i.id]??``)}
          <button type="button" class="link-button hurt-link" data-action="avoid" data-exercise="${i.id}">This hurts me, replace it</button>
        </details>
      </article>
    `}function z(e,n=null){return ke(e,t.profile??W,t.equipmentIds,n,Bt(t.customExercises,e))}function Ae(e,n){let r=t.profile??W;return n!==null&&r.weekPlan[e]===n?r.focusPlan[e]??null:null}function Me(){let e=re(new Date,(t.profile??W).weekPlan,t.workoutLog,c),n=e.find(e=>e.key===o)??e.find(e=>e.isToday)??e[0];return{week:e,selected:n,shown:(n.isToday&&n.status!==`done`?l:null)??n.workout}}function Pe(e){t.workoutLog=[...t.workoutLog,{date:new Date().toISOString(),day:e}],l=null}function Fe(e){return`
      <details class="card switcher">
        <summary>Switch today's workout</summary>
        <p class="hint">Want a different one today? Pick it here. Your week plan stays as it is.</p>
        ${Ne(e,`Workout for today`)}
      </details>`}function B(e){if(!e)return``;let i=new Date;return lt(t.deload,i)?Pi():n(t,i)?r():dt(t.workoutLog,i,t.deload)?Fi(ut(t.workoutLog,i,t.deload.easyWeeks)):``}function V(e){return e?se.card():``}function ze(){let{week:e,selected:n,shown:r}=Me(),i=wi(e,n.key,c);if(r===null)return`
        <header class="screen-header">
          <p class="eyebrow">${bi(n)}</p>
          <h1>Rest day</h1>
        </header>
        ${i}
        ${Ei(n)}
        ${L()?I():``}
        ${V(n.isToday)}
        ${B(n.isToday)}
        ${Di(n)}
      `;let a=z(r,Ae(n.weekdayIndex,r)),o=n.status===`done`,s=n.status===`missed`,l=n.isToday&&!o,u=e.some(e=>e.isToday&&e.status!==`done`),d=a.exercises.length>0,f=d?a.exercises.map((e,t)=>Oe(e,t,j(e.exercise,a.prescription).unit)).join(``):`<section class="card empty">
           <p>None of your gym's equipment fits this day yet.</p>
           <button type="button" class="secondary" data-action="go-equipment">Check your equipment</button>
         </section>`,p=d?o?`<p class="notice done-note">✓ Done. Your sets from this workout are saved.</p>
           <button type="button" class="secondary" data-nav="progress">See your weights and progress</button>`:l?`<button type="button" class="primary big" data-action="start-workout">Start workout</button>
             <p class="hint start-hint">Talks you through each set with a rest timer. Headphones recommended.</p>`:s?`<p class="notice">○ This one wasn't logged. It was planned for ${D[n.weekdayIndex]}.</p>
               ${u?`<button type="button" class="secondary" data-action="do-today" data-workout="${r}">Do it today instead</button>`:``}`:`<p class="hint start-hint">Coming up. You can start it on the day.</p>`:``;return`
      <header class="screen-header">
        <p class="eyebrow">${n.isToday?`Today's workout`:bi(n)}</p>
        <h1>${a.title}</h1>
        ${t.profile?`<p class="hint plan-summary">${Xt(t.profile)}</p>`:``}
      </header>

      ${i}

      ${p}

      ${L()?I():``}
      ${V(n.isToday)}
      ${B(n.isToday)}

      <details class="card switcher">
        <summary>Warm up first</summary>
        ${Ie(a.warmUp,`warm-up`)}
      </details>

      <p class="tap-hint">Tap an exercise to see how to do it. ${A(a.prescription)}</p>
      <div class="exercise-list">${f}</div>

      <details class="card switcher">
        <summary>Cool down</summary>
        <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
        ${sr}
        ${Ie(a.coolDown,`warm-up`)}
      </details>

      ${Pa(r,C.current())}
      ${l?Fe(r):``}

      ${d&&l?`<button type="button" class="link-button center" data-action="finish-workout">Mark done without the timer</button>`:``}
    `}function Be(){let e=a===`guide`?S:a===`edit-workout`?`progress`:a,t=t=>e===t||t===`profile`&&e===`equipment`,n=(e,n)=>`<button type="button" class="nav-item${t(e)?` active`:``}"${t(e)?` aria-current="page"`:``} data-nav="${e}">${Zi[e]??``}<span>${n}</span></button>`;return`<nav class="bottom-nav" aria-label="Main">${n(`today`,`Workout`)}${n(`library`,`Exercises`)}${n(`progress`,`Progress`)}${n(`fuel`,`Fuel`)}${n(`profile`,`Profile`)}</nav>`}e.addEventListener(`change`,e=>{let n=e.target;if(n.dataset.field===`restore-file`){let e=n.files?.[0];e&&E.handleFileChosen(e);return}n.dataset.field===`cal-time`&&Ue(n.value)?(t.calendar={...t.calendar,time:n.value},J(t)):n.dataset.field===`cal-minutes`&&Ve.includes(Number(n.value))&&(t.calendar={...t.calendar,minutes:Number(n.value)},J(t))});let He=null;e.addEventListener(`input`,t=>{let n=t.target;if(n.dataset.field!==`library-search`)return;v=n.value;let r=e.querySelector(`.library-list`);r&&(r.innerHTML=ri(v,b,me()))}),e.addEventListener(`touchstart`,e=>{let t=e.touches[0];He=e.target.closest(`.calendar, .week-nav`)&&t?{x:t.clientX,y:t.clientY}:null}),e.addEventListener(`touchend`,e=>{let n=e.changedTouches[0],r=He;if(He=null,!r||!n||t.session)return;let i=n.clientX-r.x,a=n.clientY-r.y;Math.abs(i)>=50&&Math.abs(i)>1.5*Math.abs(a)&&fe(c+(i<0?1:-1))}),e.addEventListener(`click`,n=>{let r=n.target.closest(`[data-point]`);if(r){let e=r.closest(`.progress-card`)?.querySelector(`.chart-caption`);e&&(e.textContent=r.dataset.point??``);return}let f=n.target.closest(`button`);if(!f)return;let{group:p,value:m,action:h,day:g,date:v,nav:x,step:D,delta:re,exercise:A,index:j,planDay:F,planWorkout:I,weekPreset:le,workoutDate:L,workout:pe,focusDay:me,focus:he}=f.dataset;if(D&&re){let t=e.querySelector(`input[data-field="${D}"]`);t&&(t.value=String(Math.max(0,(Number(t.value)||0)+Number(re))));return}if(h===`edit-workout`&&L){ae.begin(L);return}if(le){let e=Kt.find(e=>String(e.days)===le);e&&(u.weekPlan=[...e.plan],u.focusPlan=[...qt],R());return}if(F!==void 0&&I){let e=Number(F),t=I===`rest`?null:I,n=u.weekPlan.map((n,r)=>r===e?t:n);if(!n.some(Boolean)){N(`Keep at least one workout day.`);return}u.weekPlan=n,u.focusPlan=u.focusPlan.map((t,n)=>n===e?null:t),R();return}if(me!==void 0&&he){let e=Number(me),t=he===`balanced`?null:he;u.focusPlan=u.focusPlan.map((n,r)=>r===e?t:n),R();return}if(p&&m){if(p===`goal`&&(u.goal=m),p===`experience`&&(u.experience=m),p===`area`){let e=m,t=u.protectedAreas;u.protectedAreas=t.includes(e)?t.filter(t=>t!==e):[...t,e]}R();return}if(v){o=v,l=null,R();return}if(g){l=g,R();return}if(x){if(x!==`profile`&&a===`profile`&&xe()){_=x,R(),window.scrollTo(0,0);return}P(x);return}if(h){if(h===`library-group`&&m){b=m,R();return}if(h===`tour-next`||h===`tour-skip`){s=h===`tour-next`&&s!==null&&s+1<Qi.length?s+1:null,R();return}if(!t.session&&(h===`week-prev`||h===`week-next`||h===`week-today`)){fe(h===`week-today`?0:c+(h===`week-next`?1:-1));return}if(h===`save-note`&&A){ue(A);return}if(t.session){!te.handleAction(h)&&!O.handleAction(h)&&ce.handleAction(h,j);return}if(a===`fuel`){k.handleAction(h,re,j);return}if(!(se.handleAction(h,m)||E.handleAction(h)||te.handleAction(h)||ne.handleAction(h)||ie.handleAction(h,A)||ae.handleAction(h,f)||O.handleAction(h)||oe.handleAction(h))){if(h===`save-profile`){let e=t.profile===null;t.profile={...u},e?(J(t),P(`equipment`)):(P(`today`),M(`Profile saved — your workouts are updated.`))}else if(h===`save-and-leave`&&_!==null){let e=_;t.profile={...u},P(e),M(`Profile saved — your workouts are updated.`)}else if(h===`leave-profile`&&_!==null)P(_);else if(h===`save-equipment`){t.equipmentIds=[...e.querySelectorAll(`input[data-equipment]`)].filter(e=>e.checked).map(e=>e.dataset.equipment??``);let n=!t.equipmentConfirmed;t.equipmentConfirmed=!0,n&&(s=0),P(`today`),M(n?null:`Equipment saved.`)}else if(h===`avoid`&&A)Te(A,!0),R(),M(`${w[A]?.name??`That exercise`} won't be planned again. Bring it back any time in Profile.`);else if(h===`unavoid`&&A)Te(A,!1),R(),M(`${w[A]?.name??`That exercise`} is back in your workouts.`);else if(h===`start-tour`)s=0,de(),P(`today`);else if(h===`go-equipment`)P(`equipment`);else if(h===`add-to-calendar`){let e=gi(T);e&&(ee=e,R(),N(`Calendar file downloaded. Open it to add your workouts.`))}else if(h===`easy-week-start`)t.deload=ft(t.deload,new Date),J(t),R(),N(`Easy week is on. Every workout this week has one fewer set.`);else if(h===`easy-week-dismiss`)t.deload=mt(t.deload,new Date),J(t),R();else if(h===`easy-week-end`)t.deload=pt(t.deload,new Date),J(t),R(),N(`Back to your normal sets.`);else if(h===`set-weight-unit`){let e=i.find(e=>e===m);if(!e)return;t.weightUnit=e,J(t),R(),N(`Weights are now in ${d(e)}.`)}else if(h===`dismiss-backup-nudge`)t.backupNudgeDismissedAt=new Date().toISOString(),J(t),R();else if(h===`open-guide`)a!==`guide`&&(S=a),P(`guide`);else if(h===`close-guide`)a=S,ci(a),R(),Bi(e),window.scrollTo(0,0);else if(h===`start-setup`)P(`profile`);else if(h===`play-music`&&pe)C.play(pe);else if(h===`stop-music`)C.stop();else if(h===`do-today`&&pe)o=y(new Date),l=pe,R(),window.scrollTo(0,0);else if(h===`start-workout`){let{selected:e,shown:n}=Me();if(!n)return;let r=se.today(),i=lt(t.deload,new Date)?`easy`:r?xr(r):null;ce.begin(z(n,Ae(e.weekdayIndex,n)),i)}else if(h===`finish-workout`){let{shown:e}=Me();if(!e)return;Pe(e),P(`today`),M(`Nice work! It's marked done on your calendar.`)}}}}),oe.check(),ce.resume(),R()}var Eo=document.querySelector(`#app`);Eo&&To(Eo),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});