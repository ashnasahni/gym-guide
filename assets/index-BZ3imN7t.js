(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=864e5;function t(t,n){return t===null?1/0:(n.getTime()-new Date(t).getTime())/e}function n(e,n){return e.workoutLog.length>=3&&t(e.lastBackupAt,n)>30&&t(e.backupNudgeDismissedAt,n)>14}function r(){return`
    <section class="card backup-nudge">
      <h2>Save a backup</h2>
      <p class="hint">Your workouts live only on this phone. If you clear your browser or get a new phone, they are gone. A backup file keeps them safe.</p>
      <div class="button-row">
        <button type="button" class="primary" data-action="save-backup">Save a backup</button>
        <button type="button" class="secondary" data-action="dismiss-backup-nudge">Not now</button>
      </div>
    </section>`}var i=[`lb`,`kg`],a=2.2046226218;function o(e,t){return t===`kg`?Math.round(e/a*2)/2:e}function s(e,t){return t===`kg`?Math.round(e*a*100)/100:e}function c(e){return Number.isInteger(e)?String(e):e.toFixed(1)}function l(e,t){return`${c(o(e,t))} ${t}`}function u(e){return e===`kg`?2.5:5}function d(e){return e===`kg`?`kilograms`:`pounds`}function f(e,t){return Math.round((t===`kg`?e*a:e)*100)/100}function p(e,t){return Math.round((t===`kg`?e/a:e)*10)/10}function m(e,t){return`${c(p(e,t))} ${t}`}function h(e,t){let n=Number(e.trim());if(e.trim()===``||!Number.isFinite(n))return`Enter your weight in ${t}.`;let r=f(n,t);return r<60||r>700?`Enter a weight between ${Math.ceil(p(60,t))} and ${Math.floor(p(700,t))} ${t}.`:null}function g(e,t,n){return[...e.filter(e=>e.date!==t),{date:t,pounds:n}].sort((e,t)=>e.date.localeCompare(t.date)).slice(-730)}function _(e){return e.length<2?null:e[e.length-1].pounds-e[0].pounds}function v(e,t){let n=Math.round(Math.abs(p(Math.abs(e),t))*10)/10;return n===0?`No change`:`${e<0?`Down`:`Up`} ${c(n)} ${t}`}var y={"machine-chest-press":{id:`machine-chest-press`,name:`Machine Chest Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`chest-press`],setup:[`Set the seat so the handles line up with the middle of your chest.`,`Sit with your back and head flat against the pad, feet flat on the floor.`],steps:[`Grip the handles and press them forward until your arms are almost straight.`,`Bring them back slowly, about 2 seconds, until you feel a light stretch in your chest.`],mistakes:[`Seat too low, so your shoulders do the work instead of your chest.`,`Letting the weight stack slam between reps.`],stress:{shoulders:`moderate`},video:{youtubeId:`B-zyH8OTlsg`,channel:`Hammer Fitness`}},"dumbbell-bench-press":{id:`dumbbell-bench-press`,name:`Dumbbell Bench Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit on the end of a flat bench with dumbbells on your thighs.`,`Lie back, bringing the dumbbells to the sides of your chest.`],steps:[`Press both dumbbells up until your arms are straight above your chest.`,`Lower slowly until your elbows are a little below the bench.`],mistakes:[`Elbows flared straight out to the sides — keep them at about 45° from your body.`,`Arching your lower back off the bench.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`sTYWWaunX8o`,channel:`Born Fitness`}},"incline-dumbbell-press":{id:`incline-dumbbell-press`,name:`Incline Dumbbell Press`,muscles:`Upper chest, front shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline, about 30°.`,`Sit back with a dumbbell at each shoulder.`],steps:[`Press up and slightly in until your arms are straight.`,`Lower slowly back to shoulder level.`],mistakes:[`Bench set too steep, which turns it into a shoulder exercise.`,`Bouncing the weights at the bottom.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`c1ZX5ZXMQVk`,channel:`Vivian Ngo`}},"pec-deck-fly":{id:`pec-deck-fly`,name:`Pec Deck Fly`,muscles:`Chest`,equipment:[`pec-deck`],setup:[`Set the seat so the handles are at chest height.`,`Set the arms so you start with a comfortable stretch, not a deep one.`],steps:[`With a slight bend in your elbows, bring the handles together in front of you.`,`Squeeze for a second, then open slowly.`],mistakes:[`Starting with the arms pulled too far back.`,`Shrugging your shoulders up toward your ears.`],stress:{shoulders:`moderate`},video:{youtubeId:`hZ0CGRaKwbQ`,channel:`Hammer Fitness`}},"cable-fly":{id:`cable-fly`,name:`Cable Chest Fly`,muscles:`Chest`,equipment:[`cable`],setup:[`Set both pulleys at shoulder height with single handles.`,`Step forward into a split stance.`],steps:[`With soft elbows, bring the handles together in front of your chest.`,`Open back out slowly until your hands are in line with your chest.`],mistakes:[`Bending and straightening your elbows — it should be a hug, not a press.`],stress:{shoulders:`moderate`},video:{youtubeId:`pJDbn8Kyx0o`,channel:`StrengthLog`}},"machine-shoulder-press":{id:`machine-shoulder-press`,name:`Machine Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`shoulder-press`],setup:[`Set the seat so the handles start at about shoulder height.`,`Sit with your back flat against the pad.`],steps:[`Press the handles up until your arms are almost straight.`,`Lower slowly back to shoulder height.`],mistakes:[`Arching your lower back off the pad.`,`Pushing your head forward.`],stress:{shoulders:`moderate`},video:{youtubeId:`e5gJP7quyGk`,channel:`Vivian Ngo`}},"seated-dumbbell-shoulder-press":{id:`seated-dumbbell-shoulder-press`,name:`Seated Dumbbell Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench upright with your back supported.`,`Hold a dumbbell at each shoulder, palms forward.`],steps:[`Press up until your arms are straight overhead.`,`Lower slowly back to your shoulders.`],mistakes:[`Leaning back and arching to push heavier weight.`],stress:{shoulders:`moderate`,lowerBack:`moderate`},video:{youtubeId:`fuQpuu--bMI`,channel:`That Fit Friend`}},"dumbbell-lateral-raise":{id:`dumbbell-lateral-raise`,name:`Seated Lateral Raise`,muscles:`Side shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench holding light dumbbells at your sides.`],steps:[`Raise your arms out to the side until they are level with your shoulders.`,`Lower slowly over about 2 seconds.`],mistakes:[`Shrugging — keep your shoulders pressed down, away from your ears.`,`Going too heavy and swinging the weights up.`],stress:{neckUpperBack:`moderate`},video:{youtubeId:`yKAxVcU3nfw`,channel:`Vivian Ngo`}},"cable-tricep-pushdown":{id:`cable-tricep-pushdown`,name:`Cable Tricep Pushdown`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley high with a rope or straight bar.`,`Stand close with your elbows tucked at your sides.`],steps:[`Push down until your arms are straight, without moving your elbows.`,`Let it rise slowly back to about chest height.`],mistakes:[`Elbows drifting forward.`,`Leaning your whole body over the bar.`],stress:{},video:{youtubeId:`d-ySLTHUgQA`,channel:`Vivian Ngo`}},"overhead-cable-extension":{id:`overhead-cable-extension`,name:`Overhead Cable Tricep Extension`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley low with a rope.`,`Face away from the machine, rope behind your head.`],steps:[`Straighten your arms overhead.`,`Bend your elbows slowly to lower the rope behind your head.`],mistakes:[`Elbows flaring wide.`,`Arching your lower back.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`mRozZKkGIfg`,channel:`Bodybuilding.com`}},"assisted-dip":{id:`assisted-dip`,name:`Assisted Dip`,muscles:`Triceps, chest`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the dip handles.`],steps:[`Lower until your elbows are at about 90°.`,`Push back up to straight arms.`],mistakes:[`Going too deep, which strains the front of the shoulder.`],stress:{shoulders:`high`,wrists:`moderate`},video:{youtubeId:`slD5hhM_thg`,channel:`UMW Campus Recreation`},weightKind:`assist`},"lat-pulldown":{id:`lat-pulldown`,name:`Lat Pulldown`,muscles:`Upper back (lats), biceps`,equipment:[`lat-pulldown`],setup:[`Set the knee pad so your thighs are snug underneath it.`,`Grip the bar a little wider than your shoulders.`],steps:[`Pull the bar down to your upper chest, leading with your elbows.`,`Let it rise slowly until your arms are straight.`],mistakes:[`Pulling the bar behind your neck — always pull to the front.`,`Leaning far back and using momentum.`],stress:{wrists:`moderate`},video:{youtubeId:`oMJmAHRZXBk`,channel:`UC Davis Health`}},"assisted-pullup":{id:`assisted-pullup`,name:`Assisted Pull-Up`,muscles:`Upper back (lats), biceps`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the top handles.`],steps:[`Pull yourself up until your chin is over the handles.`,`Lower slowly to straight arms.`],mistakes:[`Craning your neck to get your chin over.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`fnHeovkmkkk`,channel:`Fitness 19`},weightKind:`assist`},"chest-supported-row":{id:`chest-supported-row`,name:`Chest-Supported Dumbbell Row`,muscles:`Mid back, rear shoulders, biceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline and lie face down on it, chest on the pad.`,`Let a dumbbell hang straight down from each hand.`],steps:[`Pull the dumbbells up toward your hips, squeezing your shoulder blades together.`,`Lower slowly until your arms are straight.`],mistakes:[`Lifting your chest off the pad.`,`Shrugging the weights up instead of rowing.`],stress:{},video:{youtubeId:`Nx0TzjgsI-0`,channel:`PureGym`}},"seated-cable-row":{id:`seated-cable-row`,name:`Seated Cable Row`,muscles:`Mid back, biceps`,equipment:[`seated-row`],setup:[`Sit with feet on the footplates and knees slightly bent.`,`Grip the handle and sit up tall.`],steps:[`Pull the handle to your belly button, squeezing your shoulder blades together.`,`Let your arms straighten slowly without rounding your back.`],mistakes:[`Rocking your torso back and forth.`,`Rounding your lower back as the handle goes forward.`],stress:{lowerBack:`moderate`},video:{youtubeId:`oFtfkSElE0s`,channel:`Hammer Fitness`}},"face-pull":{id:`face-pull`,name:`Cable Face Pull`,muscles:`Rear shoulders, upper back`,equipment:[`cable`],setup:[`Set the pulley at about face height with a rope.`,`Hold the rope ends with thumbs pointing back.`],steps:[`Pull the rope toward your face, splitting the ends apart beside your ears.`,`Return slowly with control.`],mistakes:[`Going heavy — this is a light, controlled exercise.`,`Shrugging toward your ears.`],stress:{},video:{youtubeId:`eTCBSFlCJ_s`,channel:`NASM`}},"reverse-pec-deck":{id:`reverse-pec-deck`,name:`Reverse Pec Deck`,muscles:`Rear shoulders, upper back`,equipment:[`pec-deck`],setup:[`Sit facing the pad, chest against it.`,`Set the handles so your arms start in front of you.`],steps:[`With slightly bent elbows, open your arms out to the side.`,`Return slowly.`],mistakes:[`Shrugging your shoulders up.`,`Swinging the weight.`],stress:{},video:{youtubeId:`v0rJuhEa59c`,channel:`FIT.nl`}},"dumbbell-curl":{id:`dumbbell-curl`,name:`Seated Dumbbell Curl`,muscles:`Biceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench with a dumbbell in each hand, palms forward.`],steps:[`Curl the weights up, keeping your elbows at your sides.`,`Lower slowly to straight arms.`],mistakes:[`Swinging your body to lift the weight.`,`Elbows drifting forward.`],stress:{wrists:`moderate`},video:{youtubeId:`SW5JS2Wf2uQ`,channel:`Horton Barbell`}},"cable-curl":{id:`cable-curl`,name:`Cable Curl`,muscles:`Biceps`,equipment:[`cable`],setup:[`Set the pulley low with a straight bar.`,`Stand close with elbows at your sides.`],steps:[`Curl the bar up toward your shoulders.`,`Lower slowly.`],mistakes:[`Leaning back to help the weight up.`],stress:{wrists:`moderate`},video:{youtubeId:`0TtZgAuC8Vw`,channel:`Holly Perkins`}},"hammer-curl":{id:`hammer-curl`,name:`Seated Hammer Curl`,muscles:`Biceps, forearms`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright with dumbbells at your sides, palms facing each other.`],steps:[`Curl up keeping your palms facing each other.`,`Lower slowly.`],mistakes:[`Swinging the weights.`],stress:{},video:{youtubeId:`bdlqQAVdcEk`,channel:`Vivian Ngo`}},"leg-press":{id:`leg-press`,name:`Leg Press`,muscles:`Thighs, glutes`,equipment:[`leg-press`],setup:[`Sit back with your lower back flat against the pad.`,`Feet shoulder-width apart, in the middle or slightly high on the platform.`],steps:[`Release the safety handles and lower the platform slowly.`,`Stop when your knees reach about 90°, before your lower back starts to lift off the pad.`,`Push back up through your whole foot, without locking your knees.`],mistakes:[`Going so deep your hips curl up off the seat.`,`Knees caving inward — keep them pointing the same way as your toes.`],stress:{knees:`moderate`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`90NY9tka1TQ`,channel:`Vivian Ngo`}},"barbell-back-squat":{id:`barbell-back-squat`,name:`Barbell Back Squat`,muscles:`Thighs, glutes, core`,equipment:[`squat-rack`],setup:[`Set the bar at upper-chest height.`,`Step under it and rest it across your upper back.`],steps:[`Squat down until your thighs are about parallel to the floor.`,`Drive back up through your feet.`],mistakes:[`Knees caving in.`,`Rounding your back at the bottom.`],stress:{knees:`high`,lowerBack:`high`,neckUpperBack:`moderate`,feet:`moderate`},video:{youtubeId:`8PMjqgR8Wa8`,channel:`Barbell Rehab`}},"goblet-squat":{id:`goblet-squat`,name:`Goblet Squat`,muscles:`Thighs, glutes`,equipment:[`dumbbells`],setup:[`Hold one dumbbell upright against your chest.`,`Feet slightly wider than shoulders, toes turned out a little.`],steps:[`Sit down between your heels, keeping your chest up.`,`Stand back up.`],mistakes:[`Heels lifting off the floor.`,`Knees caving in.`],stress:{knees:`high`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`zsN2WvklwDk`,channel:`Janice Liang`}},"glute-bridge":{id:`glute-bridge`,name:`Dumbbell Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[`dumbbells`,`mat`],setup:[`Lie on your back on a mat, knees bent, feet flat and hip-width apart.`,`Rest a dumbbell across your hips and hold it in place.`],steps:[`Squeeze your glutes and lift your hips until your body is straight from knees to shoulders.`,`Hold for a second, then lower slowly.`],mistakes:[`Arching your lower back at the top — the lift should come from your glutes.`],stress:{},video:{youtubeId:`PSMW7iSi2BU`,channel:`Holly Perkins`}},"dumbbell-romanian-deadlift":{id:`dumbbell-romanian-deadlift`,name:`Dumbbell Romanian Deadlift`,muscles:`Hamstrings, glutes`,equipment:[`dumbbells`],setup:[`Stand holding dumbbells in front of your thighs, knees slightly bent.`],steps:[`Push your hips back and lower the weights along your legs, back flat.`,`Stand back up by squeezing your glutes.`],mistakes:[`Rounding your back.`,`Turning it into a squat by bending your knees a lot.`],stress:{lowerBack:`high`},video:{youtubeId:`dNQucsVf90I`,channel:`Vivian Ngo`}},"seated-leg-curl":{id:`seated-leg-curl`,name:`Leg Curl`,muscles:`Hamstrings`,equipment:[`leg-curl`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit just above your heels.`],steps:[`Bend your knees to pull the pad down and back.`,`Return slowly to almost straight.`],mistakes:[`Letting the weight snap your legs straight.`,`Lifting your hips to cheat the weight.`],stress:{knees:`moderate`},video:{youtubeId:`_2Kd0d-JEUM`,channel:`NASM`}},"hip-abduction":{id:`hip-abduction`,name:`Hip Abduction Machine`,muscles:`Outer glutes`,equipment:[`hip-abduction`],setup:[`Sit with your back against the pad, pads on the outside of your knees.`],steps:[`Push your knees outward.`,`Return slowly without letting the weights touch.`],mistakes:[`Rocking your body to move the weight.`],stress:{},video:{youtubeId:`5O_Y9l__iao`,channel:`Hammer Fitness`}},"leg-extension":{id:`leg-extension`,name:`Leg Extension`,muscles:`Front of thighs`,equipment:[`leg-extension`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit on your lower shins.`],steps:[`Straighten your legs.`,`Lower slowly.`],mistakes:[`Kicking the weight up fast.`],stress:{knees:`high`},video:{youtubeId:`MXvSzXEBOTI`,channel:`Steev`}},"dead-bug":{id:`dead-bug`,name:`Dead Bug`,muscles:`Deep core`,equipment:[`mat`],setup:[`Lie on your back with arms pointing up and knees bent at 90° above your hips.`],steps:[`Press your lower back gently into the mat.`,`Slowly lower one arm and the opposite leg toward the floor, then return. Switch sides.`],mistakes:[`Letting your lower back lift off the mat — make the movement smaller if it does.`],stress:{},video:{youtubeId:`bxn9FBrt4-A`,channel:`NASM`},weightKind:`bodyweight`},"pallof-press":{id:`pallof-press`,name:`Cable Pallof Press`,muscles:`Core, obliques`,equipment:[`cable`],setup:[`Set a cable at chest height with a single handle.`,`Stand side-on to the machine, holding the handle at your chest with both hands.`],steps:[`Press the handle straight out in front of you without letting it pull you sideways.`,`Hold for 2 seconds, bring it back. Do both sides.`],mistakes:[`Twisting toward the machine.`],stress:{},video:{youtubeId:`SY5lRzBPtM4`,channel:`Fitness Lab`}},"cable-crunch":{id:`cable-crunch`,name:`Cable Crunch`,muscles:`Abs`,equipment:[`cable`],setup:[`Set the pulley high with a rope.`,`Kneel facing the machine, rope beside your head.`],steps:[`Crunch down, bringing your elbows toward your knees.`,`Rise back up slowly.`],mistakes:[`Pulling with your arms instead of your abs.`,`Yanking your neck forward.`],stress:{lowerBack:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`0KEP6A1deBE`,channel:`Travis Tarrant`}},"side-plank":{id:`side-plank`,name:`Side Plank`,muscles:`Obliques, core`,equipment:[`mat`],setup:[`Lie on your side, propped up on your forearm, elbow under your shoulder.`],steps:[`Lift your hips so your body is a straight line.`,`Hold for 20–30 seconds. Switch sides.`],mistakes:[`Hips sagging toward the floor.`],stress:{shoulders:`moderate`},video:{youtubeId:`0M-erHBl48U`,channel:`Heal Fit Physio`},weightKind:`bodyweight`,timedSeconds:{min:20,max:30}}},b={"home-dead-bug":{...y[`dead-bug`],id:`home-dead-bug`,name:`Dead Bug (at home)`,equipment:[]},"home-side-plank":{...y[`side-plank`],id:`home-side-plank`,name:`Side Plank (at home)`,equipment:[]},"bird-dog":{id:`bird-dog`,name:`Bird Dog`,muscles:`Deep core, lower back, glutes`,equipment:[],setup:[`Kneel on all fours on a mat, towel, or carpet, with your hands under your shoulders and your knees under your hips.`,`Keep your back flat and your neck long, eyes on the floor.`],steps:[`Tighten your belly and slowly reach one arm forward and the opposite leg straight back.`,`Hold for a second without letting your hips tilt or your back sag.`,`Bring them back with control, then switch sides.`],mistakes:[`Arching your lower back as the leg lifts: only raise it as high as your back stays flat.`,`Rushing and swinging the arm and leg.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`KA0ekfSePrQ`,channel:`Tone and Tighten`},weightKind:`bodyweight`},"forearm-plank":{id:`forearm-plank`,name:`Forearm Plank`,muscles:`Abs, shoulders, glutes`,equipment:[],setup:[`Lie face down, then prop yourself up on your forearms with your elbows right under your shoulders.`,`Tuck your toes and lift your hips so your body makes one straight line.`],steps:[`Squeeze your glutes and brace your abs, as if bracing for a light punch.`,`Breathe steadily and hold. Stop when your form starts to slip.`,`Lower your knees to rest.`],mistakes:[`Letting your hips sag so your lower back arches.`,`Piking your hips up, which takes the work off your abs.`,`Holding your breath or craning your neck up.`],stress:{lowerBack:`moderate`,shoulders:`moderate`},video:{youtubeId:`gSDNblPRh1U`,channel:`Masterpiece Training`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"home-glute-bridge":{id:`home-glute-bridge`,name:`Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[],setup:[`Lie on your back with your knees bent and your feet flat on the floor, hip-width apart.`,`Rest your arms at your sides, palms down.`],steps:[`Press your lower back gently toward the floor, then push through your heels to lift your hips.`,`Stop when your shoulders, hips and knees make a straight line, and squeeze your glutes.`,`Lower slowly.`],mistakes:[`Lifting so high that your lower back arches: the lift should come from your glutes.`,`Pushing through your toes instead of your heels.`],stress:{},video:{youtubeId:`evOnUDkq9f4`,channel:`Girls Gone Strong`},weightKind:`bodyweight`},"bicycle-crunch":{id:`bicycle-crunch`,name:`Bicycle Crunch`,muscles:`Abs, obliques`,equipment:[],setup:[`Lie on your back with your hands lightly behind your head and your knees lifted.`,`Press your lower back gently into the floor.`],steps:[`Bring one elbow toward the opposite knee while you straighten the other leg.`,`Switch sides slowly, like pedaling a bike.`,`Keep your shoulders lifted off the floor the whole time.`],mistakes:[`Pulling on your neck with your hands: keep them light.`,`Going fast, which uses momentum instead of your abs.`,`Letting your lower back arch off the floor.`],stress:{neckUpperBack:`high`,lowerBack:`moderate`},video:{youtubeId:`eqg47ZuGZXQ`,channel:`UCLA Health`},weightKind:`bodyweight`},"mountain-climber":{id:`mountain-climber`,name:`Mountain Climber`,muscles:`Abs, shoulders, hips`,equipment:[],setup:[`Start in a high plank with your hands under your shoulders and your body in one straight line.`],steps:[`Drive one knee toward your chest, then switch legs, like running in place on the floor.`,`Keep your hips level and your core tight. Start slowly and speed up only if your form holds.`],mistakes:[`Hips bouncing up and down.`,`Letting your lower back sag.`,`Shoulders drifting behind your hands.`],stress:{knees:`high`,wrists:`moderate`,shoulders:`moderate`},video:{youtubeId:`gW-q50V6Z_0`,channel:`Born Fitness`},weightKind:`bodyweight`}},ee={"chin-tuck":{id:`chin-tuck`,name:`Chin Tuck`,muscles:`Deep neck muscles`,equipment:[],setup:[`Sit or stand tall with your shoulders relaxed and your eyes looking straight ahead.`],steps:[`Slide your head straight back, as if making a double chin. Keep your chin level, not nodding down.`,`Hold for about 3 seconds, then relax.`,`Repeat slowly.`],mistakes:[`Tipping your chin down or up instead of sliding straight back.`,`Shrugging your shoulders or holding your breath.`,`Pushing into pain: go only as far as a gentle stretch.`],stress:{},video:{youtubeId:`h_1-7H0eOfo`,channel:`PhysioExercise`},weightKind:`bodyweight`},"open-book":{id:`open-book`,name:`Open Book`,muscles:`Upper back, chest, shoulders`,equipment:[],setup:[`Lie on your side with your knees bent and stacked, and your arms straight out in front with palms together.`],steps:[`Keeping your knees together, lift the top arm and open it toward the ceiling and behind you, letting your eyes follow your hand.`,`Pause for a breath, then bring it back slowly.`,`Do all your reps, then switch sides.`],mistakes:[`Letting your knees and hips roll back: the turn should come from your upper back.`,`Forcing your arm to the floor: stop where it feels comfortable.`],stress:{},video:{youtubeId:`917w2gqZwZQ`,channel:`Petroski Physio`},weightKind:`bodyweight`},"wall-slide":{id:`wall-slide`,name:`Wall Slide`,muscles:`Upper back, shoulders`,equipment:[],setup:[`Stand with your heels a few inches from a wall and press your head, upper back and hips against it.`,`Bend your elbows and rest your forearms and the backs of your hands on the wall, like a goalpost.`],steps:[`Slowly slide your arms up the wall as far as you can keep contact.`,`Slide them back down with control.`],mistakes:[`Arching your lower back or flaring your ribs to reach higher.`,`Letting your forearms leave the wall: go only as high as you can keep contact.`],stress:{shoulders:`moderate`},video:{youtubeId:`Eaj_NG5_hIo`,channel:`British Elbow & Shoulder Society`},weightKind:`bodyweight`},"cat-cow":{id:`cat-cow`,name:`Cat-Cow`,muscles:`Spine, hips`,equipment:[],setup:[`Get on your hands and knees, with your hands under your shoulders and your knees under your hips.`,`Put a folded towel or mat under your knees if the floor is hard.`],steps:[`Breathe in and let your belly drop as you gently lift your chest and tailbone.`,`Breathe out and round your back toward the ceiling, tucking your chin and tailbone.`,`Move slowly, letting your breath lead.`],mistakes:[`Forcing a bigger arch than feels good.`,`Rushing: let each breath lead the movement.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`xyNwxiuERXc`,channel:`FIT.nl`},weightKind:`bodyweight`},"figure-four-stretch":{id:`figure-four-stretch`,name:`Figure-4 Stretch`,muscles:`Glutes, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat.`,`Cross one ankle over the opposite knee to make a 4.`],steps:[`Keep your head and shoulders relaxed on the floor.`,`For more stretch, hold behind the lower thigh and draw it gently toward your chest.`,`Hold, breathing slowly, then switch sides.`],mistakes:[`Forcing the knee down.`,`Lifting your head or tensing your shoulders.`,`Stretching into sharp pain or tingling down your leg: stop if that happens.`],stress:{},video:{youtubeId:`PiJ_5AXTLOw`,channel:`Rapid Fitness`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"supine-twist":{id:`supine-twist`,name:`Lying Twist`,muscles:`Lower back, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat, arms out to the sides.`],steps:[`Let both knees fall slowly to one side while your shoulders stay on the floor.`,`Hold, breathing slowly, then bring them back and switch sides.`],mistakes:[`Letting the opposite shoulder lift off the floor.`,`Twisting past where it feels good: a pillow under your knees helps.`],stress:{},video:{youtubeId:`mNdJti7ZwKI`,channel:`Vive Health`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}}},x={...y,...b,...ee},S={push:{title:`Push — chest, shoulders, triceps`,slots:[{label:`Chest`,options:[`machine-chest-press`,`dumbbell-bench-press`]},{label:`Shoulders`,options:[`machine-shoulder-press`,`seated-dumbbell-shoulder-press`]},{label:`Upper chest`,options:[`incline-dumbbell-press`,`cable-fly`,`pec-deck-fly`]},{label:`Triceps`,options:[`cable-tricep-pushdown`,`overhead-cable-extension`,`assisted-dip`]},{label:`Side shoulders`,options:[`dumbbell-lateral-raise`]},{label:`Chest squeeze`,options:[`pec-deck-fly`,`cable-fly`]}]},pull:{title:`Pull — back, biceps`,slots:[{label:`Upper back`,options:[`lat-pulldown`,`assisted-pullup`]},{label:`Mid back`,options:[`chest-supported-row`,`seated-cable-row`]},{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]},{label:`Biceps`,options:[`dumbbell-curl`,`cable-curl`]},{label:`Second back`,options:[`seated-cable-row`,`assisted-pullup`,`chest-supported-row`]},{label:`Biceps & forearms`,options:[`hammer-curl`,`cable-curl`]}]},legs:{title:`Legs + Abs`,slots:[{label:`Thighs`,options:[`leg-press`,`barbell-back-squat`,`goblet-squat`]},{label:`Glutes`,options:[`glute-bridge`,`dumbbell-romanian-deadlift`]},{label:`Hamstrings`,options:[`seated-leg-curl`,`dumbbell-romanian-deadlift`]},{label:`Core`,options:[`dead-bug`,`pallof-press`]},{label:`Outer glutes`,options:[`hip-abduction`]},{label:`Abs`,options:[`pallof-press`,`side-plank`,`cable-crunch`]},{label:`Front thighs`,options:[`leg-extension`]}]},home:{title:`At-home abs — no equipment`,slots:[{label:`Deep core`,options:[`home-dead-bug`]},{label:`Back side`,options:[`bird-dog`]},{label:`Front core`,options:[`forearm-plank`,`home-dead-bug`]},{label:`Obliques`,options:[`home-side-plank`]},{label:`Hips`,options:[`home-glute-bridge`]},{label:`Lower abs`,options:[`bicycle-crunch`,`forearm-plank`]},{label:`Challenge`,options:[`mountain-climber`,`bicycle-crunch`]}]},mobility:{title:`Mobility reset — neck, upper back, hips`,slots:[{label:`Neck`,options:[`chin-tuck`]},{label:`Upper back`,options:[`open-book`]},{label:`Shoulders`,options:[`wall-slide`]},{label:`Spine`,options:[`cat-cow`,`supine-twist`]},{label:`Hips`,options:[`figure-four-stretch`]},{label:`Lower back`,options:[`supine-twist`,`cat-cow`]}]}},C={chest:{label:`Chest`,day:`push`,slotLabels:[`Chest`,`Upper chest`,`Chest squeeze`],extraSlots:[]},shoulders:{label:`Shoulders`,day:`push`,slotLabels:[`Shoulders`,`Side shoulders`],extraSlots:[{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]}]},triceps:{label:`Triceps`,day:`push`,slotLabels:[`Triceps`],extraSlots:[{label:`More triceps`,options:[`overhead-cable-extension`,`cable-tricep-pushdown`,`assisted-dip`]}]},back:{label:`Back`,day:`pull`,slotLabels:[`Upper back`,`Mid back`,`Second back`],extraSlots:[]},biceps:{label:`Biceps`,day:`pull`,slotLabels:[`Biceps`,`Biceps & forearms`],extraSlots:[{label:`More biceps`,options:[`dumbbell-curl`,`cable-curl`,`hammer-curl`]}]}};function w(e){return Object.keys(C).filter(t=>C[t].day===e)}var T=[`push`,`pull`,`legs`,`home`,`mobility`],te=[`push`,`pull`,`legs`,`home`],E=[`push`,`pull`,`legs`],ne={new:4,some:5,experienced:7},re=`Pick a weight where the last 2 reps feel hard but your form stays clean.`,ie={"lean-muscle":{new:{sets:3,repMin:10,repMax:12,restSeconds:90,tip:re},some:{sets:3,repMin:8,repMax:12,restSeconds:90,tip:re},experienced:{sets:4,repMin:8,repMax:12,restSeconds:90,tip:`Take the last set close to failure with good form.`}},strength:{new:{sets:3,repMin:8,repMax:10,restSeconds:120,tip:`Learn the movement before going heavy.`},some:{sets:4,repMin:6,repMax:8,restSeconds:120,tip:re},experienced:{sets:4,repMin:5,repMax:6,restSeconds:150,tip:re}},general:{new:{sets:2,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},some:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},experienced:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Keep rests short.`}}};function ae(e){return`${e.sets} sets of ${e.repMin}–${e.repMax} reps, resting about ${e.restSeconds} seconds between sets. ${e.tip}`}function D(e,t){return e.timedSeconds?{...e.timedSeconds,unit:`seconds`}:{min:t.repMin,max:t.repMax,unit:`reps`}}var oe={new:{sets:2,repMin:10,repMax:12,restSeconds:45,tip:`Go slowly: quality matters more than speed.`},some:{sets:3,repMin:10,repMax:15,restSeconds:45,tip:`Go slowly and keep your lower back steady.`},experienced:{sets:3,repMin:12,repMax:20,restSeconds:30,tip:`Keep tension in your abs the whole time.`}},se={sets:2,repMin:8,repMax:10,restSeconds:15,tip:`Move slowly and stop short of any pain.`},O=(e,t)=>({text:e,video:t}),k=(e,t)=>({youtubeId:e,channel:t}),A=e=>{let t=x[e].video;if(!t)throw Error(`The built-in exercise ${e} has no demo video`);return t},ce=O(`One light set of your first exercise at about half your usual weight.`),le=O(`Arm circles: 10 forward, then 10 backward.`,k(`4TJv9YmECjc`,`Leap Fitness`)),ue=O(`Cross-body arm swings: swing your arms wide open, then hug yourself, 10 times.`,k(`AsMMF3YWIIM`,`Live Lean TV`)),j=O(`Walking knee hugs: step forward and hug one knee to your chest, then the other, 10 steps in all.`,k(`m9vsPdnG3JQ`,`Total Health Systems`)),M=O(`Pelvic tilts: on your back with knees bent, gently flatten your lower back to the floor and release, 10 reps.`,k(`n8DU1desCy8`,`Rehab My Patient`)),de=O(`Open books: lie on your side, knees bent, and slowly rotate your top arm open, 8 per side.`,A(`open-book`)),fe=O(`Child's pose: sit back on your heels with your arms reaching forward and breathe slowly for 20–30 seconds.`,k(`LEW-CfuMCbw`,`Zion Physical Therapy`)),pe={mobility:[O(`Take 5 slow breaths: in through your nose, out through your mouth, shoulders relaxed.`)],home:[O(`Cat-cow on the floor: 10 slow reps, staying in a pain-free range.`,A(`cat-cow`)),M],push:[le,ue,O(`Wall slides: stand with your back to a wall and slowly slide your arms up and down, 10 reps.`,A(`wall-slide`)),de,ce],pull:[le,O(`Shoulder rolls: 10 slow rolls backward.`,k(`X7NtgY9kCCM`,`Rehab My Patient`)),O(`Cat-cow: on hands and knees, slowly round and arch your back, 10 reps, staying in a pain-free range.`,A(`cat-cow`)),de,ce],legs:[O(`Leg swings: hold onto something steady and swing each leg forward and back 10 times, then side to side 10 times.`,k(`difYoBtZi2s`,`PureGym`)),O(`Hip circles: hands on hips, 10 slow circles each way.`,k(`qkrJXGVj_OQ`,`Live to Move Physical Therapy & Wellness`)),j,O(`Bodyweight glute bridges: 10 slow reps on a mat.`,A(`home-glute-bridge`)),ce]},N=O(`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,k(`aIq0fLi8iak`,`React Physical Therapy`)),me={mobility:[O(`Lie on your back with your knees bent and take 5 slow, deep belly breaths.`)],home:[fe,O(`Lying twist: on your back, let both knees fall to one side for 20–30 seconds. Each side.`,A(`supine-twist`)),O(`Slow breathing: lie on your back and take 5 slow, deep belly breaths.`)],push:[O(`Doorway chest stretch: forearm on a door frame or post, step through until you feel your chest stretch. Each side.`,k(`069o76BafTk`,`OMPT Specialists`)),N,O(`Overhead triceps stretch: reach one hand down your back and gently press the elbow with the other hand. Each side.`,k(`cPTrm13hSSo`,`PureGym`))],pull:[O(`Lat stretch: hold a post at chest height and sit your hips back until you feel it along your side.`,k(`vuUFADwPkXs`,`Nick Brattain`)),N,O(`Biceps stretch: palm flat on a wall behind you at shoulder height, then turn your body away. Each side.`,k(`BzPzDuIn1PA`,`LIVESTRONG`))],legs:[O(`Lying hamstring stretch: on your back, lift one straight leg and hold behind the thigh. Each side.`,k(`5P3E8Pec_L8`,`PureGym`)),O(`Figure-4 glute stretch: on your back, cross one ankle over the other knee and pull the bottom leg in. Each side.`,A(`figure-four-stretch`)),O(`Lying quad stretch: on your side, hold your top ankle and bring your heel toward you, only as far as is comfortable. Each side.`,k(`uRRwljV-Nlk`,`AskDoctorJo`))]},he={neckUpperBack:[O(`Gentle neck stretch: tilt one ear toward your shoulder without pulling. Each side.`,k(`-r0eoFS7_5Q`,`AskDoctorJo`))],lowerBack:[O(`Knees to chest: on your back, hug both knees in gently and breathe slowly.`,k(`5R7eWaNWO3U`,`AskDoctorJo`))]},ge={neckUpperBack:[O(`Chin tucks: sit tall and gently slide your chin straight back, 10 slow reps.`,A(`chin-tuck`)),de],lowerBack:[O(`Cat-cow on a mat: slowly round and arch your back, 10 reps, staying in a pain-free range.`,A(`cat-cow`))],knees:[O(`Keep the bike seat high enough that your knee is only slightly bent at the bottom.`)]},_e={knees:`Go easy on your knees: use a shorter range and stop before any knee pain.`,lowerBack:`Go easy on your lower back: keep it pressed against the pad and lift lighter.`,neckUpperBack:`Go easy on your neck: keep your shoulders down and your head still.`,feet:`Go easy on your feet: keep your whole foot flat and wear supportive shoes.`,shoulders:`Go easy on your shoulders: use a smaller range and lighter weight.`,wrists:`Go easy on your wrists: keep them straight, not bent back.`};function P(e,t){return e.equipment.every(e=>t.has(e))}function F(e,t){return t.filter(t=>e.stress[t]===`moderate`)}function ve(e,t){return t.some(t=>e.stress[t]===`high`)}function I(e,t,n,r){return e.options.map(e=>x[e]).filter(e=>!r.has(e.id)&&!t.avoidedExerciseIds.includes(e.id)).filter(e=>P(e,n)).filter(e=>!ve(e,t.protectedAreas)).sort((e,n)=>F(e,t.protectedAreas).length-F(n,t.protectedAreas).length).map(n=>({exercise:n,slot:e,cautionAreas:F(n,t.protectedAreas)}))}function ye(e,t,n,r){return I(e.slot,t,new Set(n),new Set([...r,e.exercise.id]))}function be(e,t,n){if(e===`mobility`)return pe.mobility;if(e===`home`){let e=t.protectedAreas.includes(`neckUpperBack`)?ge.neckUpperBack??[]:[];return[O(`2 minutes of marching in place to warm up.`),...e,...pe.home]}let r=[O(n?`2 minutes on the stationary bike at an easy pace, just to get warm.`:`2 minutes of brisk walking, just to get warm.`),...t.protectedAreas.flatMap(e=>ge[e]??[]),...pe[e]];return r.filter((e,t)=>!e.video||r.findIndex(t=>t.video?.youtubeId===e.video?.youtubeId)===t)}function xe(e,t){return e===`home`?oe[t.experience]:e===`mobility`?se:ie[t.goal][t.experience]}function Se(e,t){return e===`mobility`?me.mobility:[...me[e],...t.protectedAreas.flatMap(e=>he[e]??[])]}var Ce={push:`Push`,pull:`Pull`};function we(e,t){let n=S[e],r=t?C[t]:null;if(!r||r.day!==e)return n.slots;let i=n.slots.filter(e=>r.slotLabels.includes(e.label)),a=n.slots.filter(e=>!r.slotLabels.includes(e.label));return[...i,...r.extraSlots,...a]}function Te(e,t,n,r=null,i=[]){let a=new Set(n),o=S[e],s=e===`mobility`?o.slots.length:ne[t.experience],c=we(e,r).slice(0,s),l=new Set,u=[];for(let e of c){let[n]=I(e,t,a,l);n&&(l.add(n.exercise.id),u.push(n))}for(let e of i){let n=x[e];n&&!t.avoidedExerciseIds.includes(e)&&u.push({exercise:n,slot:{label:`My exercise`,options:[e]},cautionAreas:[]})}let d=be(e,t,a.has(`bike`)),f=Se(e,t);return{day:e,title:r&&C[r].day===e?`${Ce[e]} — ${C[r].label.toLowerCase()} focus`:o.title,prescription:xe(e,t),warmUp:d,exercises:u,coolDown:f}}var L={push:`Push`,pull:`Pull`,legs:`Legs + Abs`,home:`At-home abs`,mobility:`Mobility reset`},Ee={push:`Push`,pull:`Pull`,legs:`Legs`,home:`Home`,mobility:`Reset`};function De(e,t,n){return`<h2 class="icon-title tone-${t}" data-icon="${e}">${n}</h2>`}function Oe(e){return L[e]}function ke(e,t,n=T){return`<nav class="day-tabs" aria-label="${t}">${n.map(t=>`
      <button type="button" class="day-tab${t===e?` active`:``}" data-day="${t}" aria-pressed="${t===e}">
        ${L[t]}
      </button>`).join(``)}</nav>`}function Ae(e){return`https://www.youtube.com/watch?v=${e}`}function je(e,t=``){return`<ul class="${t}">${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function Me(e,t=``){return`<ul class="${t}">${e.map(({text:e,video:t})=>{let n=e.split(`:`)[0];return`<li>${e}${t?` <a class="watch-link" href="${Ae(t.youtubeId)}" target="_blank" rel="noopener noreferrer" aria-label="Watch a demo of ${R(n)}, by ${R(t.channel)}">Watch ↗</a>`:``}</li>`}).join(``)}</ul>`}function Ne(e){return e.cautionAreas.map(e=>`<p class="caution">${_e[e]}</p>`).join(``)}function Pe(e){let{exercise:t}=e,n=e=>`<ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol>`,r=(e,t,n)=>t.length>0?`<h3>${e}</h3>${n(t)}`:``,i=t.video?`<a class="demo-link" href="${Ae(t.video.youtubeId)}" target="_blank" rel="noopener noreferrer">
      Watch the demo video ↗<small>by ${t.video.channel}</small>
    </a>`:``,a=t.custom?`<p class="hint">You added this exercise, so it has no steps or video. Use My machine settings to note how you set it up.</p>`:``;return`
    ${r(`Set up`,t.setup,n)}
    ${r(`How to do it`,t.steps,n)}
    ${r(`Avoid`,t.mistakes,e=>je(e,`mistakes`))}
    ${i}
    ${a}
  `}function R(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Fe(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}var Ie=2.54,Le=12,Re=new Map([[`about-weight`,`weight`],[`about-feet`,`feet`],[`about-inches`,`inches`],[`about-cm`,`cm`]]),ze={weight:``,feet:``,inches:``,cm:``,error:null};function Be(e,t,n){let r={...ze};if(e!==null&&(r.weight=c(p(e,n))),t!==null){if(n===`kg`)r.cm=String(Math.round(t));else{let e=Math.round(t/Ie);r.feet=String(Math.floor(e/Le)),r.inches=String(e%Le)}}return r}function z(e){return e.trim()!==``}function Ve(e){return z(e)?Number(e.trim()):0}function He(e,t){if(t===`kg`){if(!z(e.cm))return null;let t=Ve(e.cm);return Number.isFinite(t)&&t>=90&&t<=250?Math.round(t):NaN}if(!z(e.feet)&&!z(e.inches))return null;let n=Ve(e.feet),r=Ve(e.inches);if(!(z(e.feet)&&Number.isInteger(n)&&n>=0&&n<=8&&Number.isFinite(r)&&r>=0&&r<Le))return NaN;let i=Math.round((n*Le+r)*Ie);return i>=90&&i<=250?i:NaN}function Ue(e,t){if(z(e.weight)){let n=h(e.weight,t);if(n)return n}let n=He(e,t);return n!==null&&Number.isNaN(n)?t===`kg`?`Enter your height in centimetres, between 90 and 250.`:`Enter your height as feet and inches, such as 5 feet 6 inches.`:null}function We(e,t){let n=(e,t,n,r,i)=>`<label class="calendar-field"><span>${e}</span><input type="number" inputmode="decimal" step="${r}" min="0"${i?` max="${i}"`:``} data-field="${t}" value="${R(n)}" /></label>`,r=t===`kg`?n(`Height (cm)`,`about-cm`,e.cm,`1`):`${n(`Height (feet)`,`about-feet`,e.feet,`1`,`8`)}${n(`and inches`,`about-inches`,e.inches,`0.5`,`11.5`)}`;return`
    <section class="card about-you">
      ${De(`🙂`,`pink`,`About you (optional)`)}
      <p class="hint">Skip anything you like. Your weight starts your Progress chart. It all stays on this phone and is never part of Share my week.</p>
      <div class="calendar-fields">${n(`Your weight (${t})`,`about-weight`,e.weight,`0.1`)}</div>
      <div class="calendar-fields">${r}</div>
      <p class="form-error" role="alert"${e.error?``:` hidden`}>${e.error??``}</p>
    </section>`}function B(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function Ge(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function V(e){let t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t}var Ke=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],H=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];function qe(e,t,n,r=0){let i=B(e),a=Ge(V(e),7*r),o=new Map;for(let e of n)o.set(B(new Date(e.date)),e.day);return Array.from({length:7},(e,n)=>{let r=Ge(a,n),s=B(r),c={key:s,date:r,weekdayIndex:n,isToday:s===i},l=o.get(s);if(l)return{...c,status:`done`,workout:l};let u=t[n];return u?s<i?{...c,status:`missed`,workout:u}:{...c,status:`planned`,workout:u}:{...c,status:`rest`,workout:null}})}var Je=`https://ashnasahni.github.io/gym-guide/`,Ye={time:`18:00`,minutes:60},Xe=[30,45,60,90,120],Ze=[`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`];function Qe(e){return/^([01]\d|2[0-3]):[0-5]\d$/.test(e)}function $e(e){return{time:e?.time!==void 0&&Qe(e.time)?e.time:Ye.time,minutes:e?.minutes!==void 0&&Xe.includes(e.minutes)?e.minutes:Ye.minutes}}function U(e){return String(e).padStart(2,`0`)}function et(e){return`${`${e.getFullYear()}${U(e.getMonth()+1)}${U(e.getDate())}`}T${U(e.getHours())}${U(e.getMinutes())}00`}function tt(e){return`${`${e.getUTCFullYear()}${U(e.getUTCMonth()+1)}${U(e.getUTCDate())}`}T${U(e.getUTCHours())}${U(e.getUTCMinutes())}${U(e.getUTCSeconds())}Z`}function nt(e){return e.replace(/\\/g,`\\\\`).replace(/;/g,`\\;`).replace(/,/g,`\\,`).replace(/\r?\n/g,`\\n`)}function rt(e){let t=new TextEncoder,n=[],r=``,i=0,a=75;for(let o of e){let e=t.encode(o).length;i+e>a&&(n.push(r),r=``,i=0,a=74),r+=o,i+=e}return n.push(r),n.join(`\r
 `)}function it(e){return E.includes(e)?`${L[e]} day`:L[e]}function at(e){let[t,n]=e.split(`:`).map(Number);return`${t%12==0?12:t%12}:${String(n).padStart(2,`0`)} ${t<12?`AM`:`PM`}`}function ot(e,t){return e.flatMap((e,n)=>e?[`${it(e)} on ${H[n]} at ${at(t.time)}`]:[])}function st(e,t,n){let[r,i]=n.split(`:`).map(Number),a=Ge(e,(t-(e.getDay()+6)%7+7)%7);return a.setHours(r,i,0,0),a<=e?Ge(a,7):a}function ct(e,t,n){return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Gym Guide//Weekly plan//EN`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`X-WR-CALNAME:Gym Guide`,...e.flatMap((e,r)=>{if(!e)return[];let i=st(n,r,t.time),a=new Date(i.getTime()+t.minutes*6e4);return[`BEGIN:VEVENT`,`UID:gym-guide-${r}@ashnasahni.github.io`,`DTSTAMP:${tt(n)}`,`DTSTART:${et(i)}`,`DTEND:${et(a)}`,`RRULE:FREQ=WEEKLY;BYDAY=${Ze[r]}`,`SUMMARY:${nt(it(e))}`,`DESCRIPTION:${nt(`${S[e].title}\nOpen Gym Guide: ${Je}`)}`,`END:VEVENT`]}),`END:VCALENDAR`].map(rt).join(`\r
`)+`\r
`}var lt=[{id:`dumbbells`,name:`Dumbbells`,hint:`Rack of free weights`},{id:`bench`,name:`Adjustable bench`,hint:`Flat or tilted bench`},{id:`mat`,name:`Floor mat`,hint:`Stretching / ab area`},{id:`cable`,name:`Cable machine`,hint:`Pulley tower with handles`},{id:`lat-pulldown`,name:`Lat pulldown`,hint:`Seated, pull a bar down`},{id:`seated-row`,name:`Seated cable row`,hint:`Seated, pull a handle in`},{id:`chest-press`,name:`Chest press machine`,hint:`Seated, push handles forward`},{id:`shoulder-press`,name:`Shoulder press machine`,hint:`Seated, push handles up`},{id:`pec-deck`,name:`Pec deck / rear delt fly`,hint:`Seated, arms swing together`},{id:`assisted-pullup`,name:`Assisted pull-up / dip`,hint:`Kneel on a pad that helps lift you`},{id:`leg-press`,name:`Leg press`,hint:`Seated, push a platform with your feet`},{id:`leg-curl`,name:`Leg curl machine`,hint:`Bend knees against a pad`},{id:`leg-extension`,name:`Leg extension machine`,hint:`Straighten knees against a pad`},{id:`hip-abduction`,name:`Hip abduction machine`,hint:`Seated, push knees outward`},{id:`squat-rack`,name:`Squat rack + barbell`,hint:`Barbell resting on hooks`},{id:`bike`,name:`Stationary bike`,hint:`For warm-ups`}],ut=lt.map(e=>e.id),dt=[{title:`Free weights and floor`,ids:[`dumbbells`,`bench`,`mat`,`squat-rack`]},{title:`Upper body`,ids:[`cable`,`lat-pulldown`,`seated-row`,`chest-press`,`shoulder-press`,`pec-deck`,`assisted-pullup`]},{title:`Lower body`,ids:[`leg-press`,`leg-curl`,`leg-extension`,`hip-abduction`]},{title:`Warm-up`,ids:[`bike`]}];function ft(e){return e.replace(/\s+/g,` `).trim().slice(0,120)}function pt(e,t,n=!1){let r=`
      <div class="machine-note-row">
        <input id="note-${e}" type="text" maxlength="120" data-field="machine-note"
          data-exercise="${e}" value="${R(t)}" placeholder="Seat 4, pin at 60" autocomplete="off" />
        <button type="button" class="secondary" data-action="save-note" data-exercise="${e}">Save</button>
      </div>`;return n?`
    <details class="card switcher machine-note folded">
      <summary><span>My machine settings</span>${t?`<span class="hint">${R(t)}</span>`:``}</summary>${r}
    </details>`:`
    <div class="machine-note">
      <label for="note-${e}">My machine settings</label>${r}
    </div>`}var mt={easyWeeks:[],dismissedWeek:null},ht=6048e5;function gt(e){return B(V(e))}function _t(e){return V(new Date(e.getTime()-ht+432e5))}function vt(e,t){return e.easyWeeks.includes(gt(t))}function yt(e,t,n){let r=new Map;for(let t of e){let e=gt(new Date(t.date));r.set(e,(r.get(e)??0)+1)}let i=V(t);if(n.includes(B(i)))return 0;let a=0;for((r.get(B(i))??0)>=2&&(a+=1);;){i=_t(i);let e=B(i);if(n.includes(e)||(r.get(e)??0)<2)return a;a+=1}}function bt(e,t,n){return vt(n,t)||n.dismissedWeek===gt(t)?!1:yt(e,t,n.easyWeeks)>=6}function xt(e,t){let n=gt(t);return{...e,easyWeeks:e.easyWeeks.includes(n)?e.easyWeeks:[...e.easyWeeks,n]}}function St(e,t){let n=gt(t);return{...e,easyWeeks:e.easyWeeks.filter(e=>e!==n)}}function Ct(e,t){return{...e,dismissedWeek:gt(t)}}var wt={waterGoal:8,proteinGoal:null,calorieGoal:null,days:{}},Tt=6e3,Et=Tt,Dt=[{name:`2 eggs`,grams:12},{name:`Chicken breast (palm-size)`,grams:30},{name:`Greek yogurt (1 cup)`,grams:20},{name:`Protein shake (1 scoop)`,grams:25},{name:`Paneer (100 g)`,grams:18},{name:`Tofu (half block)`,grams:20},{name:`Dal / lentils (1 cup)`,grams:18},{name:`Milk (1 glass)`,grams:8}],Ot=[{name:`2 eggs`,kcal:140},{name:`Roti (1)`,kcal:100},{name:`Rice (1 cup cooked)`,kcal:205},{name:`Dal / lentils (1 cup)`,kcal:230},{name:`Banana`,kcal:105},{name:`Greek yogurt (1 cup)`,kcal:130},{name:`Paneer (100 g)`,kcal:265},{name:`Chicken breast (palm-size)`,kcal:165},{name:`Protein shake (1 scoop)`,kcal:120},{name:`Peanut butter (2 tbsp)`,kcal:190},{name:`Oats (1 cup cooked)`,kcal:150},{name:`Milk (1 glass)`,kcal:150}];function W(e,t){let n=e.days[t]??{};return{glasses:n.glasses??0,protein:n.protein??[],calories:n.calories??[]}}function kt(e,t,n){return{...e,days:{...e.days,[t]:n}}}function At(e,t,n){let r=W(e,t);return kt(e,t,{...r,glasses:Math.max(0,r.glasses+n)})}function jt(e,t,n){let r=W(e,t);return kt(e,t,{...r,protein:[...r.protein,n]})}function Mt(e,t,n){let r=W(e,t);return kt(e,t,{...r,protein:r.protein.filter((e,t)=>t!==n)})}function Nt(e,t,n){let r=W(e,t);return kt(e,t,{...r,calories:[...r.calories,n]})}function Pt(e,t,n){let r=W(e,t);return kt(e,t,{...r,calories:r.calories.filter((e,t)=>t!==n)})}function Ft(e){return e.calories.reduce((e,t)=>e+t.kcal,0)}function It(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isInteger(n)||n<=0||n>6e3?`Enter the calories as a whole number, between 1 and ${Et}.`:null}function Lt(e){let t=Number(e);return e.trim()===``||!Number.isInteger(t)||t<500||t>6e3?`Enter a calorie goal as a whole number, between 500 and ${Tt}.`:null}function Rt(e){return e.protein.reduce((e,t)=>e+t.grams,0)}function zt(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isFinite(n)||n<=0||n>300?`Enter the protein in grams, between 1 and 300.`:null}var Bt=[`push`,`pull`,`legs`],Vt=/^custom-[a-z0-9]{3,24}$/;function Ht(e,t){return e.replace(/[^\p{L}\p{N} '’.,()/+-]/gu,``).replace(/\s+/g,` `).trim().slice(0,t)}function Ut(e){return Ht(e,40)}function Wt(e){return Ht(e,60)}function Gt(e,t,n){if(n>=30)return`You can add up to 30 of your own exercises. Remove one first.`;let r=Ut(e);return r.length<2?`Type a name for the exercise (at least 2 letters or numbers).`:t.some(e=>e.toLowerCase()===r.toLowerCase())?`There is already an exercise with that name. Try a different one.`:null}function Kt(e,t,n,r,i){let a=Math.floor(Math.random()*36**3).toString(36).padStart(3,`0`);return{id:`custom-${i.getTime().toString(36)}${a}`,name:Ut(e),muscles:Wt(t),day:n,bodyweight:r}}function qt(e){return{id:e.id,name:e.name,muscles:e.muscles||`Added by you`,equipment:[],setup:[],steps:[],mistakes:[],stress:{},weightKind:e.bodyweight?`bodyweight`:`load`,custom:{day:e.day}}}function Jt(e){for(let e of Object.keys(x))e.startsWith(`custom-`)&&delete x[e];for(let t of e)x[t.id]=qt(t)}function Yt(e,t){return e.filter(e=>e.day===t).map(e=>e.id)}function Xt(e){if(!Array.isArray(e))return[];let t=new Set,n=new Set,r=[];for(let i of e.slice(0,60)){if(typeof i!=`object`||!i)continue;let{id:e,name:a,muscles:o,day:s,bodyweight:c}=i;if(typeof e!=`string`||!Vt.test(e)||t.has(e)||typeof a!=`string`||!Bt.includes(s))continue;let l=Ut(a);if(!(l.length<2||n.has(l.toLowerCase()))&&(t.add(e),n.add(l.toLowerCase()),r.push({id:e,name:l,muscles:typeof o==`string`?Wt(o):``,day:s,bodyweight:c===!0}),r.length>=30))break}return r}var Zt=[{id:`lean-muscle`,label:`Build lean muscle`,detail:`Gain muscle for a toned look`},{id:`strength`,label:`Get stronger`,detail:`Lift heavier, fewer reps`},{id:`general`,label:`General fitness`,detail:`Lighter, steady routine`}],Qt=[{id:`new`,label:`New to lifting`},{id:`some`,label:`Some experience`},{id:`experienced`,label:`Experienced`}],$t=[{id:`knees`,label:`Knees`},{id:`lowerBack`,label:`Lower back`},{id:`neckUpperBack`,label:`Neck / upper back`},{id:`feet`,label:`Feet / ankles`},{id:`shoulders`,label:`Shoulders`},{id:`wrists`,label:`Wrists`}],en=[`push`,null,`pull`,null,`legs`,null,null],tn=[{days:3,plan:[`push`,null,`pull`,null,`legs`,null,null]},{days:4,plan:[`push`,`pull`,null,`legs`,null,`push`,null]},{days:5,plan:[`push`,`pull`,`legs`,null,`push`,`pull`,null]}],nn=[null,null,null,null,null,null,null],G={goal:`lean-muscle`,experience:`new`,protectedAreas:[],avoidedExerciseIds:[],weekPlan:en,focusPlan:nn};function rn(e){let t=[null,null,null,null,null,null,null];return[...e].filter(e=>Number.isInteger(e)&&e>=0&&e<=6).sort((e,t)=>e-t).forEach((e,n)=>{t[e]=E[n%E.length]}),t}function an(e){let{gymDays:t,...n}=e,r={...G,...n};if(!n.weekPlan&&Array.isArray(t)){let e=rn(t);e.some(Boolean)&&(r.weekPlan=e)}return r}function on(e){let t=Zt.find(t=>t.id===e.goal)?.label.toLowerCase()??`general fitness`,n=e.weekPlan.filter(Boolean).length,r=[t,`${n} ${n===1?`day`:`days`} a week`],i=$t.filter(t=>e.protectedAreas.includes(t.id)).map(e=>e.label.toLowerCase());return i.length>0&&r.push(`protecting ${i.join(`, `)}`),`Planned for: ${r.join(` · `)}`}function sn(e,t){let n=Array.isArray(e)?e:[];return t.map((e,t)=>{let r=n[t];return typeof r==`string`&&r in C&&C[r].day===e?r:null})}var cn=`gymGuide.v1`;function ln(){return{profile:null,equipmentIds:[...ut],equipmentConfirmed:!1,history:{},session:null,nutrition:wt,workoutLog:[],calendar:Ye,recovery:[],bodyWeights:[],heightCm:null,customExercises:[],lastBackupAt:null,backupNudgeDismissedAt:null,weightUnit:`lb`,deload:{...mt,easyWeeks:[]},machineNotes:{}}}var un=5e3,dn=50,fn=60,pn=/^[A-Za-z0-9][A-Za-z0-9_-]{0,59}$/,mn=/^\d{4}-\d{2}-\d{2}$/;function K(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function hn(e){return typeof e==`string`&&pn.test(e)}function q(e,t,n){return typeof e==`number`&&Number.isFinite(e)&&e>=t&&e<=n}function J(e,t,n){return q(e,t,n)&&Number.isInteger(e)}function gn(e){return typeof e==`string`&&e.length<=40&&!Number.isNaN(Date.parse(e))}function _n(e){return typeof e==`string`&&mn.test(e)&&!Number.isNaN(Date.parse(e))}function Y(e){return Array.isArray(e)?e.slice(0,un):[]}function vn(e){if(!K(e))return null;let t=e.weight===null?null:q(e.weight,0,1e3)?e.weight:void 0;return t===void 0||!q(e.amount,0,1e4)?null:{weight:t,amount:e.amount}}function yn(e){let t={};if(!K(e))return t;for(let[n,r]of Object.entries(e)){if(!hn(n)||typeof r!=`string`)continue;let e=ft(r);e&&(t[n]=e)}return t}function bn(e){let t={};if(!K(e))return t;for(let[n,r]of Object.entries(e)){if(!hn(n))continue;let e=[];for(let t of Y(r)){if(!K(t)||!gn(t.date))continue;let n=Y(t.sets).slice(0,dn).map(vn).filter(e=>e!==null);e.push({date:t.date,sets:n})}e.length>0&&(t[n]=e)}return t}function xn(e){let t=T;return Y(e).flatMap(e=>K(e)&&gn(e.date)&&typeof e.day==`string`&&t.includes(e.day)?[{date:e.date,day:e.day}]:[])}function Sn(e){let t=new Map;for(let n of Y(e))K(n)&&_n(n.date)&&q(n.pounds,60,700)&&t.set(n.date,n.pounds);return[...t.entries()].sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>({date:e,pounds:t}))}function Cn(e){return Y(e).flatMap(e=>{if(!K(e)||!_n(e.date)||!J(e.feel,1,5))return[];let t=e.hours===null?null:q(e.hours,0,24)?e.hours:null,n=e.readiness===null?null:q(e.readiness,0,100)?e.readiness:null;return[{date:e.date,feel:e.feel,hours:t,readiness:n}]})}function wn(e){if(typeof e!=`string`)return null;let t=e.trim().slice(0,fn);return t===``?null:t}function Tn(e){let t=K(e)?e:{},n=Y(t.protein).flatMap(e=>{let t=K(e)?wn(e.name):null;return K(e)&&t&&q(e.grams,0,300)?[{name:t,grams:e.grams}]:[]}),r=Y(t.calories).flatMap(e=>{let t=K(e)?wn(e.name):null;return K(e)&&t&&q(e.kcal,0,6e3)?[{name:t,kcal:e.kcal}]:[]});return{glasses:J(t.glasses,0,100)?t.glasses:0,protein:n,calories:r}}function En(e){let t=K(e)?e:{},n={};if(K(t.days))for(let[e,r]of Object.entries(t.days))_n(e)&&(n[e]=Tn(r));return{waterGoal:J(t.waterGoal,1,20)?t.waterGoal:wt.waterGoal,proteinGoal:J(t.proteinGoal,1,400)?t.proteinGoal:null,calorieGoal:J(t.calorieGoal,500,6e3)?t.calorieGoal:null,days:n}}function Dn(e){let t=T;return!Array.isArray(e)||e.length!==7?[...G.weekPlan]:e.map(e=>typeof e==`string`&&t.includes(e)?e:null)}function On(e){if(!K(e))return null;let t=an(e),n=Dn(t.weekPlan),r=Zt.map(e=>e.id),i=Qt.map(e=>e.id),a=$t.map(e=>e.id);return{goal:r.includes(t.goal)?t.goal:G.goal,experience:i.includes(t.experience)?t.experience:G.experience,protectedAreas:Y(t.protectedAreas).filter(e=>typeof e==`string`&&a.includes(e)),avoidedExerciseIds:Y(t.avoidedExerciseIds).filter(hn),weekPlan:n,focusPlan:sn(t.focusPlan,n)}}function kn(e){let t=K(e)?e:{};return{easyWeeks:Y(t.easyWeeks).filter(_n).slice(-200),dismissedWeek:_n(t.dismissedWeek)?t.dismissedWeek:null}}var An=[`lift`,`log`,`rest`,`done`],jn=[`easy`,`normal`,`push`];function Mn(e,t){if(!K(e)||!K(e.exercise)||!K(e.slot))return null;let n=e.exercise.id;if(typeof n!=`string`)return null;let r=t.find(e=>e.id===n),i=r?qt(r):x[n],{label:a,options:o}=e.slot;if(!i||typeof a!=`string`||!Array.isArray(o)||!o.every(e=>typeof e==`string`))return null;let s=Array.isArray(e.cautionAreas)?e.cautionAreas.filter(e=>typeof e==`string`):[];return{exercise:i,slot:{label:a.slice(0,80),options:o.slice(0,un)},cautionAreas:s}}function Nn(e,t){if(!K(e)||!K(e.prescription))return null;let{prescription:n}=e,r=Y(e.exercises).map(e=>Mn(e,t));if(r.length===0||r.some(e=>e===null))return null;let i=An.find(t=>t===e.phase),a=T.find(t=>t===e.day);if(!i||!a||!gn(e.startedAt)||!J(n.sets,1,20)||!J(n.repMin,1,200)||!J(n.repMax,1,200)||!J(n.restSeconds,0,3600)||typeof n.tip!=`string`||!J(e.index,0,r.length-1)||!J(e.setNumber,1,n.sets)||e.restEndsAt!==null&&!q(e.restEndsAt,0,2**53-1))return null;let o=jn.find(t=>t===e.recoveryLevel);return{day:a,startedAt:e.startedAt,exercises:r,prescription:{sets:n.sets,repMin:n.repMin,repMax:n.repMax,restSeconds:n.restSeconds,tip:n.tip.slice(0,300)},index:e.index,setNumber:e.setNumber,phase:i,restEndsAt:e.restEndsAt,recoveryLevel:o,...q(e.finishedAt,0,2**53-1)?{finishedAt:e.finishedAt}:{}}}function Pn(e,t={}){let n=ln();if(!K(e))return n;let r=e,a=Xt(r.customExercises);return{profile:On(r.profile),equipmentIds:Array.isArray(r.equipmentIds)&&r.equipmentIds.every(e=>typeof e==`string`)?Y(r.equipmentIds).filter(hn):n.equipmentIds,equipmentConfirmed:r.equipmentConfirmed===!0,history:bn(r.history),session:t.keepSession?Nn(r.session,a):null,nutrition:En(r.nutrition),workoutLog:xn(r.workoutLog),calendar:$e(K(r.calendar)?r.calendar:void 0),recovery:Cn(r.recovery),bodyWeights:Sn(r.bodyWeights),heightCm:J(r.heightCm,90,250)?r.heightCm:null,customExercises:a,lastBackupAt:gn(r.lastBackupAt)?r.lastBackupAt:null,backupNudgeDismissedAt:gn(r.backupNudgeDismissedAt)?r.backupNudgeDismissedAt:null,weightUnit:i.find(e=>e===r.weightUnit)??n.weightUnit,deload:kn(r.deload),machineNotes:yn(r.machineNotes)}}function Fn(){try{let e=localStorage.getItem(cn);return e?Pn(JSON.parse(e),{keepSession:!0}):ln()}catch{return ln()}}var In=!1,Ln=null;function Rn(){return In}function zn(e){Ln=e}function X(e){let t=!0;try{localStorage.setItem(cn,JSON.stringify(e))}catch{t=!1}return In===t&&(In=!t,Ln?.()),t}function Bn(e){let{root:t,state:n}=e;function r(e){let n=t.querySelector(`[data-body-weight-error]`);n&&(n.textContent=e,n.hidden=!1)}function i(){let i=t.querySelector(`input[data-field="body-weight"]`)?.value??``,a=h(i,n.weightUnit);if(a){r(a);return}let o=f(Number(i.trim()),n.weightUnit);n.bodyWeights=g(n.bodyWeights,B(new Date),o),X(n),e.render(),e.showToast(`Logged ${m(o,n.weightUnit)} for today.`)}return{handleAction(e){return e===`log-body-weight`&&(i(),!0)}}}function Vn(e){let{root:t,state:n}=e,r=e=>t.querySelector(e)?.value??``;function i(e){let n=t.querySelector(`[data-custom-error]`);n&&(n.textContent=e,n.hidden=!1)}function a(){let t=r(`[data-field="custom-name"]`),a=Gt(t,Object.values(x).map(e=>e.name),n.customExercises.length);if(a){i(a);return}let o=r(`[data-field="custom-day"]`),s=Bt.find(e=>e===o)??`push`,c=r(`[data-field="custom-kind"]`)===`bodyweight`,l=Kt(t,r(`[data-field="custom-muscles"]`),s,c,new Date);n.customExercises=[...n.customExercises,l],Jt(n.customExercises),X(n),e.render(),e.showToast(`Added ${l.name} to your ${L[s]} workout.`)}function o(t){let r=n.customExercises.find(e=>e.id===t);r&&(n.customExercises=n.customExercises.filter(e=>e.id!==r.id),Jt(n.customExercises),X(n),e.render(),e.showToast(`Removed ${r.name}.`))}return{handleAction(e,t){return e===`add-custom-exercise`?(a(),!0):e===`remove-custom-exercise`&&(o(t),!0)}}}function Hn(e,t){let n=e[t];return n?.[n.length-1]}function Z(e,t,n=`lb`){let r=e.sets.map(e=>e.amount).join(`, `),i=e.sets[e.sets.length-1]?.weight,a=t===`seconds`?` sec`:` reps`;return i==null?`${r}${a}`:`${l(i,n)} × ${r}${a}`}function Un(e,t,n,r={}){if(!e||e.sets.length===0)return{weight:null,message:n===`bodyweight`?`First time: aim for ${t.min}–${t.max} ${t.unit}.`:`First time: start light. Find a weight where the last 2 reps feel hard but your form stays clean.`};let i=e.sets.every(e=>e.amount>=t.max),a=e.sets.reduce((e,t)=>e+t.amount,0)/e.sets.length<t.min-2,l=e.sets[e.sets.length-1].weight;if(n===`bodyweight`||l===null)return{weight:null,message:i?`You hit ${t.max} on every set. Try a couple more ${t.unit} each set.`:`Aim for ${t.max} ${t.unit} on every set.`};let d=r.weightUnit??`lb`,f=o(l,d),p=u(d),m=e=>`${c(e)} ${d}`,h=n===`assist`?Math.max(0,f-p):f+p,g=n===`assist`?f+p:Math.max(0,f-p),_=s(h,d),v=s(g,d);return i?r.holdWeight?{weight:l,message:`Easy day: stay at ${m(f)} and keep the reps smooth.`}:{weight:_,message:n===`assist`?`You hit ${t.max} reps every set. Try ${m(h)} of help (a little less).`:`You hit ${t.max} reps every set. Try ${m(h)}.`}:a?{weight:v,message:`That was heavy. Try ${m(g)} and aim for ${t.min}–${t.max} reps.`}:{weight:l,message:`Stay at ${m(f)} and aim for ${t.max} reps on every set.`}}function Wn(e,t,n,r){let i=e[t]??[],a=i[i.length-1],o=a&&a.date===n?[...i.slice(0,-1),{...a,sets:[...a.sets,r]}]:[...i,{date:n,sets:[r]}];return{...e,[t]:o}}function Gn(e,t,n,r,i){let a=(e[t]??[]).map(e=>e.date===n&&r>=0&&r<e.sets.length?{...e,sets:e.sets.map((e,t)=>t===r?i:e)}:e);return{...e,[t]:a}}function Kn(e){let t=new Map;for(let[n,r]of Object.entries(e))for(let e of r){if(e.sets.length===0)continue;let r=t.get(e.date)??{date:e.date,entries:[]};r.entries.push({exerciseId:n,session:e}),t.set(e.date,r)}return[...t.values()].sort((e,t)=>t.date.localeCompare(e.date))}function qn(e,t){let n=V(t);return Kn(e).filter(e=>new Date(e.date)>=n).length}function Jn(e,t){return e.filter(e=>e.sets.length>0).map(e=>{if(t===`bodyweight`)return Math.max(...e.sets.map(e=>e.amount));let n=e.sets.map(e=>e.weight??0);return t===`assist`?Math.min(...n):Math.max(...n)})}function Yn(e,t){let n=V(t),r=0;for(let t of Object.values(e))for(let e of t)new Date(e.date)>=n&&(r+=e.sets.length);return r}function Xn(e,t,n){let r=[];for(let[i,a]of Object.entries(e)){let e=n(i),o=a.filter(e=>e.sets.length>0);if(e===null||o.length<2||o[o.length-1].date<t)continue;let s=Jn(o,e),c=s[s.length-1],l=s.slice(0,-1),u=e===`assist`?Math.min(...l):Math.max(...l);(e===`assist`?c<u:c>u)&&r.push({exerciseId:i,value:c,previous:u})}return r}function Zn(e,t,n){let r={};for(let[i,a]of Object.entries(e)){let e=n[i];if(!e){r[i]=a;continue}let o=a.filter(e=>e.date!==t),s=e.length>0?[...o,{date:t,sets:e}]:o;s.length>0&&(r[i]=s.sort((e,t)=>e.date.localeCompare(t.date)))}return r}function Qn(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function $n(e,t,n,r,i){return`
      <label class="edit-field">
        <span class="sr-only">${e}</span>
        <input type="number" inputmode="${i}" min="0" value="${n}" data-field="${t}" />
        <span class="edit-unit">${r}</span>
      </label>`}function er(e,t,n,r){let i=(e.weightKind??`load`)===`bodyweight`,a=!!e.timedSeconds,s=i||t.weight===null?``:$n(`Weight in ${r}`,`edit-weight`,c(o(t.weight,r)),r,`decimal`),l=$n(a?`Seconds`:`Reps`,`edit-amount`,String(t.amount),a?`sec`:`reps`,`numeric`);return`
    <div class="edit-set" data-exercise="${e.id}">
      <span class="edit-set-label">Set ${n+1}</span>${s}${l}
      <button type="button" class="link-button" data-action="remove-edit-set" aria-label="Remove set ${n+1} of ${e.name}">Remove</button>
    </div>`}function tr(e,t,n){let r=t===null?void 0:Kn(e).find(e=>e.date===t);if(!r)return`
      <header class="screen-header">
        <h1>Edit workout</h1>
        <p class="lead">That workout isn't in your history any more.</p>
      </header>
      <button type="button" class="primary" data-action="cancel-workout-edit">Back to Progress</button>`;let i=r.entries.filter(({exerciseId:e})=>x[e]).map(({exerciseId:e,session:t})=>{let r=x[e],i=t.sets.map((e,t)=>er(r,e,t,n)).join(``);return`
        <section class="card edit-card" data-exercise="${r.id}">
          <h2>${r.name}</h2>
          ${i}
        </section>`}).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">Edit workout</p>
      <h1>${Qn(r.date)}</h1>
      <p class="lead">Fix any weight or reps you logged wrong. Remove a set that shouldn't be there.</p>
    </header>

    ${i}

    <p class="form-error" role="alert" data-edit-error hidden></p>
    <button type="button" class="primary big" data-action="save-workout-edit">Save changes</button>
    <button type="button" class="secondary" data-action="cancel-workout-edit">Cancel</button>
    <p class="hint small">Removing every set of an exercise takes it out of this workout.</p>`}function nr(e,t,n,r){let i=Number(t);if(t.trim()===``||!Number.isInteger(i)||i<1||i>300)return{error:`Enter how many reps (or seconds) you did, as a whole number.`};if(n)return{set:{weight:null,amount:i}};let a=Number(e);return e.trim()===``||!Number.isFinite(a)||a<0||a>1e3?{error:`Enter the weight in ${d(r)}. Use 0 if there was no added weight.`}:{set:{weight:s(a,r),amount:i}}}function rr(e){let{root:t,state:n}=e,r=null;function i(e){let n=t.querySelector(`[data-edit-error]`);n&&(n.textContent=e,n.hidden=!1)}function a(){let e={};for(let r of t.querySelectorAll(`.edit-card`)){let t=r.dataset.exercise??``,i=x[t];if(!i)continue;let a=(i.weightKind??`load`)===`bodyweight`;e[t]=[];for(let o of r.querySelectorAll(`.edit-set`)){let r=nr(o.querySelector(`input[data-field="edit-weight"]`)?.value??``,o.querySelector(`input[data-field="edit-amount"]`)?.value??``,a,n.weightUnit);if(`error`in r){let e=o.querySelector(`.edit-set-label`)?.textContent??`A set`;return{error:`${i.name}, ${e}: ${r.error}`}}e[t].push(r.set)}}return{updated:e}}function o(){if(r===null)return;let t=a();if(`error`in t){i(t.error);return}if(Object.values(t.updated).every(e=>e.length===0)){i(`A workout needs at least one set. Keep one, or press Cancel to leave this workout as it is.`);return}n.history=Zn(n.history,r,t.updated),X(n),r=null,e.go(`progress`),e.showToast(`Workout updated.`)}return{date:()=>r,begin(t){r=t,e.go(`edit-workout`)},handleAction(t,n){if(t===`remove-edit-set`)n.closest(`.edit-set`)?.remove();else if(t===`save-workout-edit`)o();else if(t===`cancel-workout-edit`)r=null,e.go(`progress`);else return!1;return!0}}}var ir=`gym-guide`,ar=1;function or(e,t){let n={app:ir,format:ar,savedAt:t.toISOString(),state:{...e,session:null}};return{fileName:`gym-guide-backup-${B(t)}.json`,text:JSON.stringify(n,null,2)}}function sr(e){if(e.length>5e6)return{ok:!1,error:`That file is too big to be a Gym Guide backup.`};let t;try{t=JSON.parse(e)}catch{return{ok:!1,error:`That file isn't a Gym Guide backup. Pick the .json file you saved from this app.`}}let n=t;if(typeof n!=`object`||!n||n.app!==ir||typeof n.state!=`object`||n.state===null)return{ok:!1,error:`That file isn't a Gym Guide backup. Pick the .json file you saved from this app.`};if(n.format!==ar)return{ok:!1,error:`That backup is from a different version of the app, so it can't be restored here.`};let r=Pn(n.state);return{ok:!0,state:r,summary:{workouts:r.workoutLog.length,savedAt:typeof n.savedAt==`string`?n.savedAt:null}}}function cr(e){return new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function lr(e,t,n){let r=e?`Last backup: ${cr(e)}.`:`You haven't made a backup yet.`,i=``;if(t.kind===`error`)i=`<p class="form-error" role="alert">${R(t.message)}</p>`;else if(t.kind===`confirm`){let{workouts:e,savedAt:n}=t.summary;i=`
      <p class="notice">This backup ${n?`from ${cr(n)} `:``}has ${e} finished ${e===1?`workout`:`workouts`}. Restoring replaces everything on this phone right now.</p>
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
    </section>`}var ur=0;function dr(e,t){if(!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e);n.rate=1;let r=++ur;n.onstart=()=>t?.onStart();let i=()=>{r===ur&&t?.onEnd()};n.onend=i,n.onerror=i,window.speechSynthesis.speak(n)}function fr(e,t,n){let r=URL.createObjectURL(new Blob([n],{type:t})),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e4)}function pr(e){`vibrate`in navigator&&navigator.vibrate(e)}var mr=null,hr=!1;async function gr(){if(`wakeLock`in navigator&&document.visibilityState===`visible`)try{mr=await navigator.wakeLock.request(`screen`)}catch{mr=null}}document.addEventListener(`visibilitychange`,()=>{hr&&document.visibilityState===`visible`&&gr()});function _r(e){hr=e,e?gr():(mr?.release(),mr=null)}function vr(e){let{state:t}=e,n={kind:`none`},r=null;function i(){let n=new Date;t.lastBackupAt=n.toISOString();let{fileName:r,text:i}=or(t,n);X(t),fr(r,`application/json`,i),e.render(),e.showToast(`Backup saved. Keep the file somewhere safe.`)}function a(t){let i=new FileReader;i.onload=()=>{let t=sr(String(i.result??``));t.ok?(r={state:t.state,summary:t.summary},n={kind:`confirm`,summary:t.summary}):(r=null,n={kind:`error`,message:t.error}),e.render()},i.onerror=()=>{n={kind:`error`,message:`Couldn't read that file. Try picking it again.`},e.render()},i.readAsText(t)}function o(){if(!r)return;e.music.stop(),Object.assign(t,r.state),Jt(t.customExercises),r=null,n={kind:`none`},e.resetCalendarSelection();let i=X(t);e.go(t.profile&&t.equipmentConfirmed?`today`:`profile`),e.showToast(i?`Backup restored.`:`Restored, but couldn't save on this device — changes last until you close the page.`)}return{card:e=>lr(t.lastBackupAt,n,e),handleAction(t){if(t===`save-backup`)i();else if(t===`choose-backup`)n={kind:`none`},e.root.querySelector(`input[data-field="restore-file"]`)?.click();else if(t===`cancel-restore`)r=null,n={kind:`none`},e.render();else if(t===`confirm-restore`)o();else return!1;return!0},handleFileChosen:a}}var yr=`<div class="hold-timer" data-hold-slot></div>`;function br(e){return e===null?`<button type="button" class="secondary" data-action="hold-toggle">Time a 30-second hold</button>`:`
    <button type="button" class="secondary" data-action="hold-toggle">Stop</button>
    <span class="hold-clock" data-hold-clock aria-label="${e} seconds left">${Fe(e)}</span>`}var xr=250;function Sr(e){let t=null,n;function r(){return t===null?null:Math.max(0,Math.ceil((t-Date.now())/1e3))}function i(){for(let t of e.root.querySelectorAll(`[data-hold-slot]`))t.innerHTML=br(r())}function a(){window.clearInterval(n),t=null}function o(){let t=e.root.querySelector(`[data-hold-clock]`);if(!t){a();return}let n=r()??0;if(n>0){t.textContent=Fe(n);return}a(),dr(`Time.`),pr([200,100,200]),i(),e.showToast(`Time! Switch sides or move on.`)}return{fill:i,handleAction(r){return r===`hold-toggle`&&(t===null?(t=Date.now()+3e4,n=window.setInterval(o,xr)):a(),i(),e.root.querySelector(`[data-action="hold-toggle"]`)?.focus(),!0)}}}function Cr(){return typeof window.matchMedia==`function`&&window.matchMedia(`(display-mode: standalone)`).matches||navigator.standalone===!0}function wr(e){return e?``:`
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
    </section>`}var Tr={1:`Wrecked`,2:`Tired`,3:`Okay`,4:`Good`,5:`Great`},Er=[1,2,3,4,5],Dr=2,Or=70,kr=6,Ar=4,jr=85,Mr=7;function Nr(e){return e.feel<=Dr||e.readiness!==null&&e.readiness<Or||e.hours!==null&&e.hours<kr?`easy`:e.feel>=Ar&&(e.readiness===null||e.readiness>=jr)&&(e.hours===null||e.hours>=Mr)?`push`:`normal`}function Pr(e){return e===`easy`?`Take it easy today. If you work out, the workout drops a set from each exercise and keeps your weights where they were. Resting is fine too.`:e===`push`?`You're well recovered, so it's a good day to aim for the top of your rep range. Keep your form clean.`:`A normal day: train as planned.`}function Fr(e,t){return t===`easy`?{...e,sets:Math.max(1,e.sets-1)}:e}function Ir(e){let t=[`Felt ${Tr[e.feel].toLowerCase()} (${e.feel}/5)`];return e.hours!==null&&t.push(`slept ${e.hours} h`),e.readiness!==null&&t.push(`readiness ${e.readiness}`),t.join(` · `)}function Lr(e,t){return e.find(e=>e.date===t)}function Rr(e,t){return[...e.filter(e=>e.date!==t.date),t].sort((e,t)=>e.date.localeCompare(t.date)).slice(-180)}function zr(e,t,n){if(e===null||!Er.includes(e))return{ok:!1,error:`Tap a number for how rested you feel.`};let r=null;if(t.trim()!==``&&(r=Number(t),!Number.isFinite(r)||r<0||r>24))return{ok:!1,error:`Hours slept should be a number between 0 and 24, or leave it blank.`};let i=null;return n.trim()!==``&&(i=Number(n),!Number.isInteger(i)||i<0||i>100)?{ok:!1,error:`Readiness should be a whole number from 0 to 100, or leave it blank.`}:{ok:!0,feel:e,hours:r,readiness:i}}var Br=10;function Vr(e){let t=x[e];return t?t.weightKind??`load`:null}function Hr(e){return Object.keys(S).find(t=>S[t].slots.some(t=>t.options.includes(e)))??null}function Ur(e){return e.timedSeconds?`seconds`:`reps`}function Wr(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function Gr(e,t,n){return(e.weightKind??`load`)===`bodyweight`?t:o(t,n)}function Kr(e,t,n){let r=e.weightKind??`load`;return r===`bodyweight`?`${t} ${e.timedSeconds?`sec`:`reps`}`:r===`assist`?`${c(t)} ${n} of help`:`${c(t)} ${n}`}function qr(e,t,n,r=``){return`
    <details class="card progress-card ${r}">
      <summary>
        <span class="progress-title">
          <strong class="progress-name">${e}</strong>
          <span class="progress-stats">${t}</span>
        </span>
        <span class="chevron" aria-hidden="true"></span>
      </summary>
      ${n}
    </details>`}function Jr(e,t,n){let r=Xn(e,V(t).toISOString(),Vr).filter(({exerciseId:e})=>x[e]);return r.length===0?``:`
    <section class="card highlights-card">
      <h2>🏆 New personal bests this week</h2>
      <ul class="summary">${r.map(({exerciseId:e,value:t,previous:r})=>{let i=x[e];return`<li><strong>${i.name}</strong>: ${Kr(i,Gr(i,t,n),n)} <span class="hint">(was ${Kr(i,Gr(i,r,n),n)})</span></li>`}).join(``)}</ul>
    </section>`}function Yr(e,t,n,r){let i={top:22,right:20,bottom:22,left:20},a=Math.min(...n),o=Math.max(...n),s=o-a||1,c=e=>i.left+e*(300-i.left-i.right)/(n.length-1),l=e=>i.top+(o-e)*(110-i.top-i.bottom)/s,u=n.map((e,t)=>`${t===0?`M`:`L`}${c(t).toFixed(1)},${l(e).toFixed(1)}`).join(` `),d=n.map((e,n)=>{let i=`${Wr(t[n])}: ${r(e)}`;return`
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
      <text x="${i.left}" y="106" class="axis-label">${Wr(t[0])}</text>
      <text x="${300-i.right}" y="106" class="axis-label" text-anchor="end">${Wr(t[t.length-1])}</text>
    </svg>
    <p class="chart-caption" aria-live="polite">Tap a dot to see that day.</p>
  `}function Xr(e,t,n){let r=new Set(Xn(e,V(t).toISOString(),Vr).map(({exerciseId:e})=>e));return Object.entries(e).filter(([e,t])=>x[e]&&t.some(e=>e.sets.length>0)).map(([e,t])=>{let i=x[e],a=t.filter(e=>e.sets.length>0),o=Jn(a,i.weightKind??`load`).map(e=>Gr(i,e,n)),s=a[a.length-1],c=r.has(e),l=Hr(e),u=(i.weightKind??`load`)===`assist`?Math.min(...o):Math.max(...o),d=o.length>=2?Yr(i.name,a.map(e=>e.date),o,e=>Kr(i,e,n)):`<p class="hint">Log it again to start a chart.</p>`;return qr(i.name,`<span>Best: <strong>${Kr(i,u,n)}</strong>${c?` <span class="new-best">New best!</span>`:``}</span>
         <span>Last: ${Z(s,Ur(i),n)}</span>`,d,l?`type-${l}`:``)}).join(``)}function Zr(e,t){let n=Kn(e).slice(0,Br);if(n.length===0)return``;let r=n.map(e=>{let n=e.entries.filter(({exerciseId:e})=>x[e]).map(({exerciseId:e,session:n})=>{let r=x[e];return`<li>${r.name}: <span class="hint">${Z(n,Ur(r),t)}</span></li>`}).join(``);return`
        <div class="recent-heading">
          <h3 class="progress-name">${Wr(e.date)}</h3>
          <button type="button" class="link-button" data-action="edit-workout" data-workout-date="${e.date}"
            aria-label="Edit the workout from ${Wr(e.date)}">Edit</button>
        </div>
        <ul class="summary">${n}</ul>`});return`
    <details class="card switcher recent-workouts">
      <summary>Recent workouts (${n.length})</summary>
      ${r.join(``)}
    </details>`}function Qr(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r,12).toISOString()}function $r(e){if(e.length===0)return``;let t=e.slice(-14),n=t[t.length-1],r=[{name:`How rested you felt`,points:t.map(e=>({date:e.date,value:e.feel})),format:e=>`${Tr[e]??e} (${e}/5)`},{name:`Hours slept`,points:t.flatMap(e=>e.hours===null?[]:[{date:e.date,value:e.hours}]),format:e=>`${e} h`},{name:`Readiness`,points:t.flatMap(e=>e.readiness===null?[]:[{date:e.date,value:e.readiness}]),format:e=>String(e)}].filter(e=>e.points.length>=2).map(e=>qr(e.name,`<span>Latest: ${e.format(e.points[e.points.length-1].value)}</span>`,Yr(e.name,e.points.map(e=>Qr(e.date)),e.points.map(e=>e.value),e.format))).join(``);return`
    <h2 class="section-title">Recovery</h2>
    <section class="card">
      <p class="progress-stats"><span>Last check-in (${Wr(Qr(n.date))}): ${Ir(n)}</span></p>
      ${r?``:`<p class="hint">Check in on a few more mornings and your charts will appear here.</p>`}
    </section>
    ${r}`}function ei(e,t,n){let r=e[e.length-1],i=_(e),a=e.length>=2?`${Yr(`Body weight over time`,e.map(e=>Qr(e.date)),e.map(e=>p(e.pounds,t)),e=>`${c(e)} ${t}`)}
        <p class="hint">${i===null?``:`${v(i,t)} since ${Wr(Qr(e[0].date))}`}</p>`:``;return`
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
    </details>`}var ti=[50,55,55,60,65];function ni(e,t){return`
    <div class="example-preview">
      <p class="example-label">Example</p>
      <h3 class="progress-name">Machine Chest Press</h3>
      ${Yr(`Example: chest press weight over five weeks`,ti.map((t,n)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()-7*(ti.length-1-n)).toISOString()),ti.map(e=>o(e,t)),e=>`${c(e)} ${t}`)}
    </div>`}function ri(e,t){let n=yt(e,t,[]);return n<2?``:`<p class="week-streak">${n} weeks in a row with 2 or more workouts</p>`}function ii(e,t,n,r,i=`lb`,a={}){let o=`
    <header class="screen-header">
      <h1>Your progress</h1>
      <p class="lead">Everything here comes from the sets you log during a workout.</p>
    </header>`;if(Kn(e).length===0)return`${o}
      <section class="card empty">
        <p>No workouts yet. Log your sets during a workout and your progress shows up here, like this:</p>
        ${ni(t,i)}
        <button type="button" class="secondary" data-nav="today">Go to today's workout</button>
      </section>
      ${$r(r)}
      ${ei(a.bodyWeights??[],i,a.bodyWeightOpen??!1)}`;let s=qn(e,t),c=Yn(e,t);return`${o}
    <section class="card week-card">
      <p class="week-count"><strong>${s}</strong> of ${n}</p>
      <p>workouts this week${s>=n?` — goal reached!`:``}</p>
      <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${s}">
        <div class="meter-fill" style="width: ${Math.min(100,Math.round(s/Math.max(1,n)*100))}%"></div>
      </div>
      <p class="week-sets">${c} ${c===1?`set`:`sets`} logged</p>
      ${ri(a.workoutLog??[],t)}
      <button type="button" class="secondary" data-action="share-week">Share my week</button>
      <p class="hint small">Your goal is the workout days in your week plan. The week starts Monday.</p>
    </section>

    ${Jr(e,t,i)}

    ${$r(r)}

    ${ei(a.bodyWeights??[],i,a.bodyWeightOpen??!1)}

    <h2 class="section-title">Progress by exercise</h2>
    ${Xr(e,t,i)}

    ${Zr(e,i)}
  `}var ai=3;function oi(e,t,n=ai){return(e[t]??[]).filter(e=>e.sets.length>0).slice(-n).reverse()}function si(e){return new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function ci(e,t,n,r){let i=oi(e,t);if(i.length<2)return``;let a=i.map(e=>`<li><span class="recent-date">${si(e.date)}</span><span>${Z(e,n,r)}</span></li>`).join(``);return`
    <div class="recent-times">
      <h4>Your last ${i.length} times</h4>
      <ul>${a}</ul>
    </div>`}var li=[{id:`all`,label:`All`},{id:`push`,label:`Push`},{id:`pull`,label:`Pull`},{id:`legs`,label:`Legs`},{id:`home`,label:`Home`}];function ui(e){if(e.custom)return e.custom.day;let t=Hr(e.id);return t===`mobility`?`home`:t}function di(e,t){let n=t.toLowerCase().split(/\s+/).filter(Boolean),r=`${e.name} ${e.muscles}`.toLowerCase();return n.every(e=>r.includes(e))}function fi(e,t){return Object.values(x).filter(e=>t===`all`||ui(e)===t).filter(t=>di(t,e)).sort((e,t)=>e.name.localeCompare(t.name))}function pi(e){return $t.filter(t=>e.includes(t.id)).map(e=>e.label.toLowerCase()).join(`, `)}function mi(e,t,n){let[r]=oi(t,e.id,1);if(!r)return{last:``,details:``};let i=e.timedSeconds?`seconds`:`reps`,a=e.weightKind??`load`,o=Jn(oi(t,e.id,2**53-1).reverse(),a),s=a===`assist`?Math.min(...o):Math.max(...o);return{last:`<small class="last-time">Last time: ${Z(r,i,n)}</small>`,details:`
        <p class="progress-stats"><span>Your best: <strong>${Kr(e,Gr(e,s,n),n)}</strong></span></p>
        ${ci(t,e.id,i,n)}`}}function hi(e,{equipmentIds:t,protectedAreas:n,history:r,weightUnit:i}){let a=mi(e,r,i),o=e.equipment.filter(e=>!t.includes(e)).map(e=>lt.find(t=>t.id===e)?.name??e),s=n.filter(t=>e.stress[t]===`high`),c={exercise:e,slot:{label:``,options:[]},cautionAreas:n.filter(t=>e.stress[t]===`moderate`)},l=[o.length>0?`<p class="notice">Not on your equipment list: ${R(o.join(`, `))}.</p>`:``,s.length>0?`<p class="caution">Left out of your workouts: it loads your ${pi(s)} too hard.</p>`:``,Ne(c)].join(``);return`
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
        ${Pe(c)}
        ${e.custom?`<button type="button" class="link-button hurt-link" data-action="remove-custom-exercise" data-exercise="${e.id}">Remove this exercise</button>`:``}
      </details>
    </article>`}function gi(e,t,n){let r=fi(e,t);return r.length===0?`<p class="card empty" role="status">Nothing matches that. Try a muscle like "back", or a machine like "press".</p>`:`${`<p class="hint" role="status">${r.length} ${r.length===1?`exercise`:`exercises`}</p>`}<div class="exercise-list">${r.map(e=>hi(e,n)).join(``)}</div>`}function _i(){return`
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
    </details>`}function vi(e,t,n){let r=li.map(({id:e,label:n})=>`<button type="button" class="chip${e===t?` active`:``}" data-action="library-group" data-value="${e}" aria-pressed="${e===t}">${n}</button>`).join(``);return`
    <header class="screen-header">
      <h1>Exercise library</h1>
      <p class="lead">Look up how any exercise works. Tap one to see the steps and a demo video.</p>
    </header>

    ${_i()}

    <label class="sr-only" for="library-search">Search exercises</label>
    <input id="library-search" type="search" class="library-search" data-field="library-search"
      placeholder="Search by name or muscle" autocomplete="off" value="${R(e)}" />

    <div class="chip-row library-groups" role="group" aria-label="Kind of exercise">${r}</div>

    <div class="library-list">${gi(e,t,n)}</div>

  `}var yi=`gymGuide.tab`,bi=[`today`,`library`,`progress`,`fuel`,`profile`];function xi(e){if(bi.includes(e))try{sessionStorage.setItem(yi,e)}catch{}}function Si(){return performance.getEntriesByType?.(`navigation`)[0]?.type===`reload`}function Ci(){if(!Si())return null;try{let e=sessionStorage.getItem(yi);return bi.find(t=>t===e)??null}catch{return null}}var wi=`https://ashnasahni.github.io/gym-guide/`,Ti=3;function Ei(e,t){return`${e} ${t}${e===1?``:`s`}`}function Di(e,t,n,r){let i=[`My week on Gym Guide`,`${qn(e,t)} of ${Ei(n,`workout`)} · ${Ei(Yn(e,t),`set`)}`],a=Xn(e,V(t).toISOString(),Vr).filter(({exerciseId:e})=>x[e]);if(a.length>0){let e=a.slice(0,Ti).map(({exerciseId:e,value:t})=>{let n=x[e];return`${n.name} ${Kr(n,Gr(n,t,r),r)}`}),t=a.length-e.length;i.push(`New bests: ${e.join(`, `)}${t>0?` and ${t} more`:``}`)}return i.push(``,`Try it: ${wi}`),i.join(`
`)}function Oi(e){let{state:t}=e;async function n(t){try{await navigator.clipboard.writeText(t),e.showToast(`Copied. Paste it into a message.`)}catch{e.showToast(`Couldn't share from this phone.`)}}async function r(){let e=(t.profile??G).weekPlan.filter(Boolean).length,r=Di(t.history,new Date,e,t.weightUnit);if(typeof navigator.share!=`function`){await n(r);return}try{await navigator.share({title:`My week on Gym Guide`,text:r})}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;await n(r)}}return{handleAction(e){return e===`share-week`&&(r(),!0)}}}function ki(e){let{root:t,state:n}=e,r=t.querySelector(`input[data-field="cal-time"]`)?.value??``;if(!Qe(r))return e.showToast(`Pick a start time first.`),null;let i=Number(t.querySelector(`select[data-field="cal-minutes"]`)?.value);n.calendar={time:r,minutes:Xe.includes(i)?i:n.calendar.minutes},X(n);let a=(n.profile??G).weekPlan;return fr(`gym-guide-week.ics`,`text/calendar;charset=utf-8`,ct(a,n.calendar,new Date)),ot(a,n.calendar)}function Ai(e,t,n=null){let r=Xe.map(t=>`<option value="${t}"${t===e.minutes?` selected`:``}>${t} minutes</option>`).join(``);return`
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
      ${n&&!t?ji(n):``}
      <button type="button" class="secondary" data-action="add-to-calendar"${t?` disabled`:``}>Add to calendar</button>
      <p class="hint small">This is a one-time copy. If you change your week later, delete the old events in your calendar and add it again. The events repeat every week until you delete them.</p>
    </section>
  `}function ji(e){return`
    <div class="notice" role="status">
      <p><strong>✓ File downloaded.</strong> Next, open it (from your downloads or the browser's download bar) and tap Add all in your calendar app. It holds:</p>
      <ul>${e.map(e=>`<li>${e}</li>`).join(``)}</ul>
    </div>`}function Mi(e){return e.toLocaleDateString(void 0,{month:`long`,day:`numeric`})}function Ni(e){return e.isToday?`Today`:`${H[e.weekdayIndex]}, ${Mi(e.date)}`}function Pi(e){let t=e.status===`done`&&e.workout?`${L[e.workout]} workout, done`:e.status===`planned`&&e.workout?`${L[e.workout]} planned`:e.status===`missed`&&e.workout?`${L[e.workout]} planned, not logged`:`rest day`;return`${H[e.weekdayIndex]} ${Mi(e.date)}, ${t}${e.isToday?`, today`:``}`}function Fi(e){return e.toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function Ii(e,t){return t===0?`This week`:t===1?`Next week`:t===-1?`Last week`:`${Fi(e[0].date)} – ${Fi(e[6].date)}`}function Li(e,t,n=0){let r=e.map(e=>{let n=e.workout?Ee[e.workout]:`Rest`,r=e.status===`done`?`✓`:e.status===`missed`?`○`:``;return`
        <button type="button" class="${[`cal-day`,e.workout?`type-${e.workout}`:``,`cal-${e.status}`,e.isToday?`today`:``,e.key===t?`selected`:``].filter(Boolean).join(` `)}" data-date="${e.key}"
                aria-pressed="${e.key===t}" aria-label="${Pi(e)}">
          <span class="cal-weekday">${Ke[e.weekdayIndex]}</span>
          <span class="cal-date">${e.date.getDate()}</span>
          <span class="cal-label">${n}</span>
          <span class="cal-mark" aria-hidden="true">${r}</span>
        </button>`}).join(``),i=Ii(e,n);return`
    <div class="week-nav">
      <button type="button" class="week-step" data-action="week-prev" aria-label="Previous week"${n<=-4?` disabled`:``}>‹</button>
      ${n===0?`<span class="week-title">${i}</span>`:`<button type="button" class="link-button week-title" data-action="week-today" aria-label="${i}. Tap to go back to this week">${i}</button>`}
      <button type="button" class="week-step" data-action="week-next" aria-label="Next week"${n>=12?` disabled`:``}>›</button>
    </div>
    <div class="calendar" role="group" aria-label="${i}">${r}</div>
  `}function Ri(e,t,n,r){return`
    <section class="card home-card">
      <h2>${e} <small>optional</small></h2>
      <p class="home-blurb">${t}</p>
      ${r?`<button type="button" class="secondary" data-day="${n}">Do ${L[n].toLowerCase()}</button>`:`<p class="hint">You can start it on the day.</p>`}
    </section>`}function zi(e){return`
    <section class="card">
      <p>Rest day. Your muscles grow while you recover, so a walk or some stretching is plenty.</p>
    </section>

    ${e.isToday?`<section class="card train-anyway">
             <h2>Want to train anyway?</h2>
             <p class="picker-hint">Pick a gym workout for today. Your week plan stays as it is.</p>
             ${ke(null,`Pick a gym workout for today`,E)}
           </section>`:``}`}function Bi(e){return`
    ${Ri(`At-home abs`,`About 10 minutes, no equipment, gentle on your back and knees. Same voice and timer as a gym workout.`,`home`,e.isToday)}

    ${Ri(`Mobility reset`,`About 8 minutes of slow stretches for your neck, upper back and hips. No equipment.`,`mobility`,e.isToday)}`}function Vi(e,t){return t.flatMap((t,n)=>t&&e[n]?[`${Ke[n]} ${C[t].label.toLowerCase()}`]:[]).join(` · `)}function Hi(e,t,n,r){let i=w(n);if(i.length===0)return``;let a=[null,...i].map(n=>{let i=n?C[n].label:`Balanced`;return`<button type="button" class="focus-chip${n===r?` active`:``}"
          data-focus-day="${t}" data-focus="${n??`balanced`}"
          aria-pressed="${n===r}" aria-label="${e} focus: ${i}">${i}</button>`}).join(``);return`<p class="plan-focus-day">${`${e} · ${n?Ee[n]:``}`}</p><div class="plan-focus" role="group" aria-label="${e} focus">${a}</div>`}function Ui(e){return`<div class="chip-row week-presets" role="group" aria-label="Days a week">${tn.map(t=>{let n=JSON.stringify(t.plan)===JSON.stringify(e);return`<button type="button" class="chip${n?` active`:``}" data-week-preset="${t.days}" aria-pressed="${n}">${t.days} days</button>`}).join(``)}</div>`}function Wi(e){return e.flatMap((e,t)=>e?[`${Ke[t]} ${Ee[e]}`]:[]).join(` · `)}function Gi(e,t,n=!1,r=!1){let i=[{value:`rest`,label:`Rest`,spoken:`Rest`},...te.map(e=>({value:e,label:Ee[e],spoken:L[e]}))],a=H.map((t,n)=>{let r=e[n]??`rest`,a=i.map(e=>`
          <button type="button" class="plan-option${e.value===r?` active`:``}"
                  data-plan-day="${n}" data-plan-workout="${e.value}"
                  aria-pressed="${e.value===r}" aria-label="${t}: ${e.spoken}">${e.label}</button>`).join(``);return`
      <div class="plan-row">
        <span class="plan-day"><span aria-hidden="true">${t.slice(0,3)}</span><span class="sr-only">${t}</span></span>
        <div class="plan-options">${a}</div>
      </div>`}).join(``);return`
    ${Ui(e)}
    <details class="week-days"${r?` open`:``}>
      <summary><span>Choose days one by one</span><span class="hint">${Wi(e)}</span></summary>
      <div class="plan-editor">${a}</div>
    </details>
    ${Ki(e,t,n)}`}function Ki(e,t,n){let r=H.map((n,r)=>Hi(n,r,e[r],t[r]??null)).join(``);if(!r)return``;let i=Vi(e,t);return`
    <details class="focus-picker"${n?` open`:``}>
      <summary><span>Focus (optional)</span>${i?`<span class="hint">${i}</span>`:``}</summary>
      <p class="hint">Lean a Push or Pull day toward one muscle.</p>
      ${r}
    </details>`}function qi(){return`
    <section class="card row-card easy-week-card">
      <div>
        <h2>Easy week</h2>
        <p class="hint">Fewer sets, same weights, until Sunday.</p>
      </div>
      <button type="button" class="secondary" data-action="easy-week-end">Turn off</button>
    </section>`}function Ji(e){return`
    <section class="card easy-week-card">
      <h2>Time for an easy week?</h2>
      <p>You've trained ${e} weeks in a row. An easier week (one fewer set, same weights) can help you recover and come back stronger. It's optional.</p>
      <div class="button-row">
        <button type="button" class="secondary" data-action="easy-week-dismiss">Not now</button>
        <button type="button" class="primary" data-action="easy-week-start">Make this week easier</button>
      </div>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function Yi(e){return`data-${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}`}function Xi(e){return`"${e.replace(/["\\]/g,`\\$&`)}"`}function Zi(e,t){if(!(e instanceof HTMLElement)||e===t||!t.contains(e))return null;let n=Object.entries(e.dataset).map(([e,t])=>`[${Yi(e)}=${Xi(t??``)}]`);return n.length===0?null:`${e.tagName.toLowerCase()}${n.join(``)}`}function Qi(e,t){e.querySelector(t)?.focus({preventScroll:!0})}function $i(e){let t=e.querySelector(`main h1`);t&&(t.tabIndex=-1,t.focus({preventScroll:!0}))}var ea={name:``,grams:``,goal:``,error:``,calorieName:``,calories:``,calorieGoal:``,calorieError:``,proteinQuickOpen:!1,calorieQuickOpen:!1,proteinGoalOpen:!1,calorieGoalOpen:!1};function ta(e,t){return`<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e}">
    <div class="meter-fill" style="width: ${Math.min(100,Math.round(e/t*100))}%"></div>
  </div>`}function na(e,t){let n=e.waterGoal;return`
    <section class="card fuel-water">
      <h2>Water</h2>
      <p class="fuel-total"><strong>${t}</strong> of ${n} glasses${t>=n?` — goal reached!`:``}</p>
      ${ta(t,n)}
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
  `}function ra(e){return e.proteinGoalOpen?`
    <p class="hint">A common target for building muscle is about 0.7 g per pound of body weight. A doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 100" value="${R(e.goal)}" data-field="protein-goal" aria-label="Daily protein goal in grams" />
      <span>g</span>
      <button type="button" class="secondary" data-action="set-protein-goal">Set goal</button>
    </div>
  `:`<button type="button" class="link-button" data-action="show-protein-goal">Set a daily goal (optional)</button>`}function ia(e,t,n){let r=W(e,t),i=Rt(r),a=e.proteinGoal,o=a===null?`<p class="fuel-total"><strong>${i}</strong> g today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} g${i>=a?` — goal reached!`:``}</p>${ta(i,a)}`,s=r.protein.length===0?`<p class="hint">Nothing logged yet today. Tap Add food.</p>`:`<ul class="entry-list">${r.protein.map((e,t)=>`
          <li>
            <span>${R(e.name)}</span>
            <span class="entry-grams">${e.grams} g</span>
            <button type="button" class="link-button" data-action="remove-protein" data-index="${t}" aria-label="Remove ${R(e.name)}">Remove</button>
          </li>`).join(``)}</ul>`,c=Dt.map((e,t)=>`
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
          <input type="text" placeholder="What you ate" value="${R(n.name)}" data-field="protein-name" aria-label="Food name" maxlength="60" />
          <input type="number" inputmode="numeric" min="1" placeholder="g" value="${R(n.grams)}" data-field="protein-grams" aria-label="Protein in grams" class="grams-input" />
          <button type="button" class="secondary" data-action="add-protein">Add</button>
        </div>
        ${n.error&&!n.proteinGoalOpen?`<p class="form-error" role="alert">${n.error}</p>`:``}
      </details>
      ${n.error&&n.proteinGoalOpen?`<p class="form-error" role="alert">${n.error}</p>`:``}

      ${a===null?ra(n):`<button type="button" class="link-button" data-action="clear-protein-goal">Change protein goal (${a} g)</button>`}
    </section>
  `}function aa(e){return e.calorieGoalOpen?`
    <p class="hint">A doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 2400" value="${R(e.calorieGoal)}" data-field="calorie-goal" aria-label="Daily calorie goal" />
      <span>cal</span>
      <button type="button" class="secondary" data-action="set-calorie-goal">Set goal</button>
    </div>
  `:`<button type="button" class="link-button" data-action="show-calorie-goal">Set a daily goal (optional)</button>`}function oa(e,t,n){let r=W(e,t),i=Ft(r),a=e.calorieGoal,o=a===null?`<p class="fuel-total"><strong>${i}</strong> cal today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} cal${i>=a?` — goal reached!`:``}</p>${ta(i,a)}`,s=r.calories.length===0?`<p class="hint">Nothing logged yet today. Tap Add food.</p>`:`<ul class="entry-list">${r.calories.map((e,t)=>`
          <li>
            <span>${R(e.name)}</span>
            <span class="entry-grams">${e.kcal} cal</span>
            <button type="button" class="link-button" data-action="remove-calories" data-index="${t}" aria-label="Remove ${R(e.name)} calories">Remove</button>
          </li>`).join(``)}</ul>`,c=Ot.map((e,t)=>`
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
          <input type="text" placeholder="What you ate" value="${R(n.calorieName)}" data-field="calorie-name" aria-label="Food name for calories" maxlength="60" />
          <input type="number" inputmode="numeric" min="1" placeholder="cal" value="${R(n.calories)}" data-field="calorie-amount" aria-label="Calories" class="grams-input" />
          <button type="button" class="secondary" data-action="add-calories">Add</button>
        </div>
        ${n.calorieError&&!n.calorieGoalOpen?`<p class="form-error" role="alert">${n.calorieError}</p>`:``}
      </details>
      ${n.calorieError&&n.calorieGoalOpen?`<p class="form-error" role="alert">${n.calorieError}</p>`:``}

      ${a===null?aa(n):`<button type="button" class="link-button" data-action="clear-calorie-goal">Change calorie goal (${a} cal)</button>`}
    </section>
  `}function sa(e,t,n){return`
    <header class="screen-header">
      <h1>Fuel</h1>
      <p class="lead">Tap to log water, protein and calories. Today's log starts fresh at midnight.</p>
    </header>
    ${na(e,W(e,t).glasses)}
    ${ia(e,t,n)}
    ${oa(e,t,n)}
  `}function ca(e){let{root:t,state:n}=e,r={...ea};function i(e){return t.querySelector(`input[data-field="${e}"]`)?.value??``}function a(){r={name:i(`protein-name`),grams:i(`protein-grams`),goal:i(`protein-goal`),error:``,calorieName:i(`calorie-name`),calories:i(`calorie-amount`),calorieGoal:i(`calorie-goal`),calorieError:``,proteinQuickOpen:t.querySelector(`details[data-quick="protein"]`)?.open??r.proteinQuickOpen,calorieQuickOpen:t.querySelector(`details[data-quick="calories"]`)?.open??r.calorieQuickOpen,proteinGoalOpen:r.proteinGoalOpen,calorieGoalOpen:r.calorieGoalOpen}}function o(t,i,o){a();let s=B(new Date),c=n.nutrition;if(t===`water`)n.nutrition=At(c,s,Number(i));else if(t===`water-goal`)n.nutrition={...c,waterGoal:Math.min(20,Math.max(1,c.waterGoal+Number(i)))};else if(t===`quick-protein`){let e=Dt[Number(o)];e&&(n.nutrition=jt(c,s,e))}else if(t===`add-protein`){let e=zt(r.name,r.grams);e?r.error=e:(n.nutrition=jt(c,s,{name:r.name.trim(),grams:Number(r.grams)}),r={...r,name:``,grams:``})}else if(t===`remove-protein`)n.nutrition=Mt(c,s,Number(o));else if(t===`show-protein-goal`)r.proteinGoalOpen=!0;else if(t===`show-calorie-goal`)r.calorieGoalOpen=!0;else if(t===`set-protein-goal`){let e=Number(r.goal);!Number.isInteger(e)||e<1||e>400?r.error=`Enter a protein goal in whole grams, between 1 and 400.`:(n.nutrition={...c,proteinGoal:e},r.proteinGoalOpen=!1)}else if(t===`clear-protein-goal`)r.goal=String(c.proteinGoal??``),r.proteinGoalOpen=!0,n.nutrition={...c,proteinGoal:null};else if(t===`quick-calories`){let e=Ot[Number(o)];e&&(n.nutrition=Nt(c,s,e))}else if(t===`add-calories`){let e=It(r.calorieName,r.calories);e?r.calorieError=e:(n.nutrition=Nt(c,s,{name:r.calorieName.trim(),kcal:Number(r.calories)}),r={...r,calorieName:``,calories:``})}else if(t===`remove-calories`)n.nutrition=Pt(c,s,Number(o));else if(t===`set-calorie-goal`){let e=Lt(r.calorieGoal);e?r.calorieError=e:(n.nutrition={...c,calorieGoal:Number(r.calorieGoal)},r.calorieGoalOpen=!1)}else t===`clear-calorie-goal`&&(r.calorieGoal=String(c.calorieGoal??``),r.calorieGoalOpen=!0,n.nutrition={...c,calorieGoal:null});X(n)||(r.error=`Couldn't save on this device.`),e.render()}return{screen:()=>sa(n.nutrition,B(new Date),r),handleAction:o}}var la=e=>`<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${e}</svg>`,ua={today:la(`<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />`),library:la(`<circle cx="11" cy="11" r="6" /><path d="M16 16l5 5" />`),progress:la(`<path d="M4 4v16h16M8 15l4-5 3 3 5-7" />`),fuel:la(`<path d="M12 3c3 4.2 6 7.2 6 11a6 6 0 0 1-12 0c0-3.8 3-6.8 6-11z" />`),profile:la(`<circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />`)},da=[{title:`Your week`,text:`Tap a day to see its workout. Swipe sideways to look at other weeks.`,target:`.calendar`},{title:`Start workout`,text:`At the gym, tap this. It talks you through every set and times your rest.`,target:`[data-action="start-workout"]`},{title:`Exercises`,text:`Look up how to do any exercise, with a demo video.`,target:`[data-nav="library"]`},{title:`Progress`,text:`Your weights and charts show up here after you log sets.`,target:`[data-nav="progress"]`},{title:`Fuel`,text:`Log water, protein and calories with a tap.`,target:`[data-nav="fuel"]`},{title:`Profile`,text:`Change your goal, workout days and equipment, and back up your data here.`,target:`[data-nav="profile"]`}];function fa(e){let t=da[e];if(!t)return``;let n=e===da.length-1;return`
    <aside class="tour" role="region" aria-label="App tour, step ${e+1} of ${da.length}">
      <p class="tour-count">${e+1} of ${da.length}</p>
      <h2>${t.title}</h2>
      <p>${t.text}</p>
      <div class="tour-buttons">
        ${n?``:`<button type="button" class="link-button" data-action="tour-skip">Skip tour</button>`}
        <button type="button" class="primary" data-action="${n?`tour-skip`:`tour-next`}">${n?`Done`:`Next`}</button>
      </div>
    </aside>`}function pa(e,t){let n=da[t]?.target;n&&e.querySelector(n)?.classList.add(`tour-highlight`)}var ma={youtubeId:`zt8SEmJhFuY`,title:`How to pick the right weights`,channel:`Alloy Health`},ha={youtubeId:`oBs-PE34x7g`,title:`How to use basic gym equipment`,channel:`SELF`};function ga(e){return`
    <a class="demo-link" href="https://www.youtube.com/watch?v=${e.youtubeId}" target="_blank" rel="noopener noreferrer">
      Watch: ${e.title} ↗<small>by ${e.channel}</small>
    </a>`}function _a(e){return`
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
      ${ga(ma)}
    </details>

    <details class="card switcher guide-card">
      <summary>Using a machine</summary>
      <ul>
        <li>Look at the picture on the machine. It shows the move and which muscles it works.</li>
        <li>Adjust the seat and pads first so the handles line up with your body, then pick a light weight.</li>
        <li>Move slowly and smoothly. Don't jerk the weight.</li>
        <li>Not sure how a machine works? Tap the exercise in the app for steps and a demo, or ask the staff at the front desk.</li>
      </ul>
      ${ga(ha)}
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
  `}var va=[{title:`Tell us about you`,detail:`Your goal, and any injuries or sore spots to protect.`},{title:`Pick your gym's equipment`,detail:`You only get exercises that use machines your gym has.`},{title:`Follow today's workout`,detail:`Step-by-step form, a rest timer, and a voice that talks you through each set.`}];function ya(e){return`
    <header class="screen-header">
      <h1>Welcome to Gym Guide</h1>
      <p class="lead">It tells you what to do at the gym today and shows exactly how to do each exercise. It takes about a minute to set up.</p>
    </header>

    <section class="card">
      <ol class="intro-steps">${va.map((e,t)=>`
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
  `}var ba=`CC BY 4.0`,xa=`https://creativecommons.org/licenses/by/4.0/`,Q=`https://freemusicarchive.org/music`,Sa={file:`punjabi-bhangra.mp3`,title:`Punjabi Bhangra Energy Short Burst`,artist:`Alex Morgan`,source:`${Q}/alex-morgan/kids-comedy-holiday/punjabi-bhangra-energy-short-burst/`},Ca={file:`boom-bap.mp3`,title:`Boom Bap Old School Hip-Hop Beat`,artist:`Alex Morgan`,source:`${Q}/alex-morgan/trap-hip-hop-beats/boom-bap-old-school-hip-hop-beat/`},wa={file:`electronic-dance.mp3`,title:`Energetic Upbeat Electronic Dance`,artist:`Music for Creators`,source:`${Q}/fretbound/single/energetic-upbeat-electronic-dance/`},Ta={file:`energetic-pop.mp3`,title:`Energetic Pop Background`,artist:`AurosonMusic`,source:`${Q}/aurosonmusic/single/energetic-pop-background/`},Ea={file:`bright-pop.mp3`,title:`Bright Energetic Upbeat Pop`,artist:`Music for Creators`,source:`${Q}/fretbound/single/bright-energetic-upbeat-pop/`},Da={file:`disco-funk.mp3`,title:`Mirrorglow (Upbeat & Energetic Disco Funk)`,artist:`Vlad Annenkov`,source:`${Q}/vlad-annenkov/single/upbeat-energetic-disco-funk-mirrorglowmp3/`},Oa={file:`pop-rock.mp3`,title:`Neon Pulse (Energetic Pop Rock)`,artist:`Vlad Annenkov`,source:`${Q}/vlad-annenkov/single/energetic-pop-rock-neon-pulsemp3/`},ka={file:`hype-trap.mp3`,title:`Hard Hype Trap for Sports Intros`,artist:`Alex Morgan`,source:`${Q}/alex-morgan/trap-hip-hop-beats/hard-hype-trap-for-sports-intros/`},Aa={file:`phonk-gym.mp3`,title:`Hard Phonk Gym Workout Track`,artist:`Alex Morgan`,source:`${Q}/alex-morgan/phonk-drift/hard-phonk-gym-workout-track/`},ja={file:`workout-edm.mp3`,title:`Workout Songs`,artist:`Alex Morgan`,source:`${Q}/alex-morgan/epic-action-sports/workout-songs/`},Ma={file:`masala-madness.mp3`,title:`Masala Madness`,artist:`Geoff Harvey - Purple Planet Music`,source:`${Q}/geoff-harvey-purple-planet-music/indian-life/masala-madness-1/`},Na={file:`mumbai-mood.mp3`,title:`Mumbai Mood`,artist:`Geoff Harvey - Purple Planet Music`,source:`${Q}/geoff-harvey-purple-planet-music/indian-life/mumbai-mood-1/`},Pa={file:`bollywood-flame.mp3`,title:`Bollywood Flame With Bright Festive Drive`,artist:`Alex Morgan`,source:`${Q}/alex-morgan/advertising-broadcast-vol-2/bollywood-flame-with-bright-festive-drive/`},Fa={file:`weekend-chill.mp3`,title:`Chill Hip Hop - Weekend Chill Beat`,artist:`AurosonMusic`,source:`${Q}/aurosonmusic/single/chill-hip-hop-weekend-chill-beat/`},Ia={push:{name:`Push day mix`,songs:[ka,Sa,Ma,Ca,wa,Da,ja]},pull:{name:`Pull day mix`,songs:[Aa,Na,wa,Sa,Oa,Ma,Ta]},legs:{name:`Legs day mix`,songs:[ka,Ma,Ca,Sa,Aa,Da,ja]},home:{name:`At-home abs mix`,songs:[Ea,Na,Ta,Pa,wa,ja]},mobility:{name:`Mobility mix`,songs:[Fa]}};function La(){let e=new Map;for(let t of Object.values(Ia))for(let n of t.songs)e.set(n.file,n);return[...e.values()]}function Ra(e){return new URL(`music/${e.file}`,document.baseURI).href}var za=.3,Ba=8e3;function Va(e,t,n=()=>new Audio){let r=null,i=null,a=0,o=0,s=null,c;function l(e,t){if(!r)return;let n=Ia[e].songs;a=t%n.length,r.src=Ra(n[a]),r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`))}function u(e){i!==null&&(f(),t(e))}function d(){i!==null&&l(i,a+1)}function f(){window.clearTimeout(c),r&&=(r.pause(),null),i=null,s=null,o=0,e()}function p(){window.clearTimeout(c),r&&s!==null&&(r.volume=s,s=null)}function m(t){if(r&&i===t){r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`));return}r?.pause(),r=n(),r.addEventListener(`ended`,d),r.addEventListener(`playing`,()=>{o=0}),r.addEventListener(`error`,()=>{o+=1,o>=Ia[t].songs.length?u(`The music couldn't load. Check your connection and try again.`):d()}),i=t,o=0,s=null,l(t,0),e()}return{play:m,stop:f,current:()=>i,duck(){r&&s===null&&(s=r.volume,r.volume=s*za,c=window.setTimeout(p,Ba))},restore:p}}var Ha=`gym-guide-music`;function Ua(e){return{async savedCount(){let t=await e.open(Ha),n=0;for(let e of La())await t.match(Ra(e))&&(n+=1);return n},async save(t){navigator.storage?.persist?.().catch(()=>!1);let n=await e.open(Ha),r=0;for(let e of La()){let i=Ra(e);if(!await n.match(i)){let t=await fetch(i,{cache:`reload`});if(!t.ok)throw Error(`${e.file} could not be downloaded (${t.status})`);await n.put(i,t)}r+=1,t(r)}},async remove(){await e.delete(Ha)}}}var Wa=70;function Ga(e,t){if(e.kind===`checking`)return``;let n;return n=e.kind===`saved`?`
      <p class="music-status">✓ All ${t} songs are saved on this phone.</p>
      <button type="button" class="link-button" data-action="remove-music-offline">Remove saved music</button>`:e.kind===`saving`?`
      <p class="fuel-total" role="status">Saving song ${Math.min(e.done+1,t)} of ${t}…</p>
      <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e.done}">
        <div class="meter-fill" style="width: ${Math.round(e.done/t*100)}%"></div>
      </div>
      <p class="hint small">Keep this screen open until it finishes.</p>`:`
      ${e.saved>0?`<p class="hint">${e.saved} of ${t} songs are saved so far.</p>`:``}
      ${e.kind===`error`?`<p class="form-error" role="alert">${R(e.message)}</p>`:``}
      <button type="button" class="secondary" data-action="save-music-offline">${e.saved>0?`Finish saving the music`:`Save music for offline use`}</button>
      <p class="hint small">Uses about ${Wa} MB on this phone. Do it on Wi-Fi.</p>`,`
    <section class="card offline-music">
      <h2>Music offline</h2>
      <p class="hint">Songs play from the internet. Save them on this phone to listen at the gym without signal.</p>
      ${n}
    </section>`}function Ka(e){let t=`caches`in window?Ua(window.caches):null,n=La().length,r={kind:`checking`};function i(){t?.savedCount().catch(()=>0).then(t=>{r=t===n?{kind:`saved`}:{kind:`idle`,saved:t},e.redrawProfile()})}async function a(){if(t&&r.kind!==`saving`){r={kind:`saving`,done:0},e.redrawProfile();try{await t.save(t=>{r={kind:`saving`,done:t},e.redrawProfile()}),r={kind:`saved`},e.redrawProfile(),e.showToast(`Music saved on this phone.`)}catch{r={kind:`error`,message:`Couldn't save all the music. Check your connection and free space on this phone, then try again.`,saved:await t.savedCount().catch(()=>0)},e.redrawProfile()}}}async function o(){await t?.remove(),r={kind:`idle`,saved:0},e.redrawProfile(),e.showToast(`Saved music removed. Songs will play from the internet.`)}return{card:()=>t?Ga(r,n):``,check:i,handleAction(e){if(e===`save-music-offline`)a();else if(e===`remove-music-offline`)o();else return!1;return!0}}}function qa(e,t){let n=Ia[e],r=t===e,i=r?`<button type="button" class="secondary" data-action="stop-music" aria-label="Stop music">■ Stop</button>`:`<button type="button" class="secondary" data-action="play-music" data-workout="${e}" aria-label="Play ${n.name}">▶ Play</button>`;return`
    <section class="card music-card row-card">
      <p class="music-name">♪ ${r?`Playing now`:n.name}</p>
      ${i}
    </section>`}function Ja(){return`
    <details class="card music-credits">
      <summary>Music credits</summary>
      <ul>${La().map(e=>`<li><a href="${e.source}" target="_blank" rel="noopener noreferrer">${R(e.title)}</a> by ${R(e.artist)}</li>`).join(``)}</ul>
      <p class="hint small">From the Free Music Archive, used under the <a href="${xa}" target="_blank" rel="noopener noreferrer">${ba}</a> license. The songs by Alex Morgan are listed there as AI-generated.</p>
    </details>`}var Ya={open:!1,feel:null,hours:``,readiness:``,error:``};function Xa(e){return`
    <section class="card recovery-card">
      <h2>Morning check-in</h2>
      <p class="feel-question" id="feel-question">How rested do you feel?</p>
      <div class="feel-row" role="group" aria-labelledby="feel-question">${Er.map(t=>`
      <button type="button" class="feel-option${e.feel===t?` active`:``}" data-action="checkin-feel" data-value="${t}" aria-pressed="${e.feel===t}">
        <strong>${t}</strong><small>${Tr[t]}</small>
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
    </section>`}function Za(e,t){if(t.open)return Xa(t);if(!e)return`
      <section class="card recovery-card row-card">
        <div>
          <h2>Morning check-in</h2>
          <p class="hint">Ten seconds. Say how rested you feel, and a worn-out day gets an easier workout.</p>
        </div>
        <button type="button" class="secondary" data-action="checkin-open">Check in</button>
      </section>`;let n=Nr(e);return`
    <section class="card recovery-card level-${n}">
      <h2>Today's recovery</h2>
      <p class="recovery-summary">${Ir(e)}</p>
      <p class="recovery-advice">${Pr(n)}</p>
      <button type="button" class="link-button" data-action="checkin-open">Change check-in</button>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function Qa(e){let{root:t,state:n}=e,r={...Ya};function i(){return Lr(n.recovery,B(new Date))}function a(){let e=t.querySelector(`input[data-field="checkin-hours"]`),n=t.querySelector(`input[data-field="checkin-readiness"]`);e&&(r.hours=e.value),n&&(r.readiness=n.value)}function o(t,o){if(a(),t===`checkin-open`){let e=i();r={open:!0,feel:e?.feel??null,hours:e?.hours===null||e===void 0?``:String(e.hours),readiness:e?.readiness===null||e===void 0?``:String(e.readiness),error:``}}else if(t===`checkin-feel`)r={...r,feel:Number(o),error:``};else if(t===`checkin-cancel`)r={...Ya};else if(t===`checkin-save`){let t=zr(r.feel,r.hours,r.readiness);if(!t.ok)r={...r,error:t.error};else{n.recovery=Rr(n.recovery,{date:B(new Date),feel:t.feel,hours:t.hours,readiness:t.readiness}),r={...Ya},X(n),e.render(),e.showToast(`Check-in saved.`);return}}e.render()}return{today:i,card:()=>Za(i(),r),handleAction(e,t){return e.startsWith(`checkin-`)?(o(e,t),!0):!1}}}var $a=240;function eo(e,t){let n=e.exercises.map(n=>(t[n.exercise.id]??[]).find(t=>t.date===e.startedAt)?.sets.length??0),r=e.finishedAt===void 0?null:Math.round((e.finishedAt-Date.parse(e.startedAt))/6e4);return{sets:n.reduce((e,t)=>e+t,0),exercisesDone:n.filter(e=>e>0).length,exercisesPlanned:e.exercises.length,minutes:r!==null&&r>=1&&r<=$a?r:null}}function to(e,t){let n=(t.getDay()+6)%7;for(let t=1;t<=7;t++){let r=(n+t)%7,i=e[r];if(!i)continue;let a=t===1?`tomorrow`:t===7?`next ${H[r]}`:`on ${H[r]}`;return`Next up: ${L[i]} ${a}`}return null}function no(e){let t=[`<strong>${e.sets}</strong> ${e.sets===1?`set`:`sets`}`,e.exercisesDone===e.exercisesPlanned?`<strong>${e.exercisesDone}</strong> ${e.exercisesDone===1?`exercise`:`exercises`}`:`<strong>${e.exercisesDone}</strong> of ${e.exercisesPlanned} exercises`];return e.minutes!==null&&t.push(`<strong>${e.minutes}</strong> min`),t.join(` · `)}function ro(e,t,n=null){return{day:e.day,startedAt:t.toISOString(),exercises:e.exercises,prescription:Fr(e.prescription,n),index:0,setNumber:1,phase:e.exercises.length>0?`lift`:`done`,restEndsAt:null,recoveryLevel:n}}function $(e){return e.exercises[e.index]}function io(e){return e.setNumber>=e.prescription.sets}function ao(e){return e.index>=e.exercises.length-1}function oo(e){return{...e,phase:`log`}}function so(e,t){if(io(e)&&ao(e))return{...e,phase:`done`,restEndsAt:null};let n=t+e.prescription.restSeconds*1e3;return io(e)?{...e,index:e.index+1,setNumber:1,phase:`rest`,restEndsAt:n}:{...e,setNumber:e.setNumber+1,phase:`rest`,restEndsAt:n}}function co(e){return{...e,phase:`lift`,restEndsAt:null}}function lo(e,t,n){let r=Math.max(e.restEndsAt??n,n);return{...e,restEndsAt:r+t*1e3}}function uo(e){return ao(e)?{...e,phase:`done`,restEndsAt:null}:{...e,index:e.index+1,setNumber:1,phase:`lift`,restEndsAt:null}}function fo(e,t){let n=e.exercises.map((n,r)=>r===e.index?t:n);return{...e,exercises:n,setNumber:1,phase:`lift`,restEndsAt:null}}function po(e,t){return e.restEndsAt===null?0:Math.max(0,Math.ceil((e.restEndsAt-t)/1e3))}function mo(e,t,n){let r=Hn(e,n);return r&&r.date===t.startedAt?r.sets:[]}function ho(e,t,n){let r=(e[n]??[]).filter(e=>e.date!==t.startedAt);return r[r.length-1]}function go(e,t,n,r=`lb`){let i=D(n.exercise,t.prescription);return Un(ho(e,t,n.exercise.id),i,n.exercise.weightKind??`load`,{holdWeight:t.recoveryLevel===`easy`,weightUnit:r})}function _o(e,t){let n=D(t.exercise,e.prescription);return`${n.min}–${n.max} ${n.unit}`}function vo(e){return`Exercise ${e.index+1} of ${e.exercises.length} · ${Oe(e.day)}`}function yo(e,t=!1){return`
    <div class="session-controls">
      <button type="button" class="link-button" data-action="toggle-voice" aria-pressed="${e}">Voice: ${e?`on`:`off`}</button>
      ${t?`<button type="button" class="link-button" data-action="skip-exercise">Skip exercise</button>`:``}
      <button type="button" class="link-button" data-action="end-workout">End workout</button>
    </div>
  `}function bo(e,t,n,r,i,a=`lb`,o=``){let s=$(e);if(!s)return``;let c=ho(t,e,s.exercise.id),l=D(s.exercise,e.prescription),u=go(t,e,s,a),d=mo(t,e,s.exercise.id);return`
    <header class="screen-header">
      <p class="eyebrow">${vo(e)}</p>
      <h1>${s.exercise.name}</h1>
    </header>

    ${r?`<p class="notice" role="status">${r}</p>`:``}
    ${e.recoveryLevel===`easy`?`<p class="notice">Easy day: fewer sets, and your weights stay where they were.</p>`:``}

    <section class="card set-card">
      <p class="set-label">Set ${e.setNumber} of ${e.prescription.sets}</p>
      <p class="set-target">${_o(e,s)}</p>
      ${c?`<p class="last-time">Last time: ${Z(c,l.unit,a)}</p>`:``}
      ${e.setNumber===1?`<p class="suggestion">${u.message}</p>`:``}
      ${d.length>0?`<p class="last-time">Today so far: ${Z({date:``,sets:d},l.unit,a)}</p>`:``}
    </section>

    ${Ne(s)}

    <button type="button" class="primary big" data-action="set-done">Set done</button>

    ${pt(s.exercise.id,o,!0)}

    <details class="card how-to">
      <summary>How to do it</summary>
      ${Pe(s)}
    </details>

    <div class="button-row">
      <button type="button" class="secondary" data-action="open-swap">Swap</button>
      <button type="button" class="secondary" data-action="hurt">This hurt</button>
    </div>
    ${qa(e.day,i)}
    ${yo(n,!0)}
  `}function xo(e,t){let n=e.exercises.reduce((n,r)=>n+mo(t,e,r.exercise.id).length,0),r=n>0?`You've logged ${n} ${n===1?`set`:`sets`}. They're saved, and this workout will show as done on your calendar.`:`You haven't logged any sets yet, so nothing will be saved.`;return`
    <header class="screen-header">
      <p class="eyebrow">${vo(e)}</p>
      <h1>End this workout?</h1>
      <p class="lead">${r}</p>
    </header>

    <button type="button" class="primary big" data-action="confirm-end">Yes, end workout</button>
    <button type="button" class="secondary" data-action="cancel-end">Keep going</button>
  `}function So(e,t){let n=$(e);if(!n)return``;let r=t.length===0?`<section class="card empty"><p>There's no other exercise for this spot with your gym's equipment. You can skip it instead.</p></section>`:t.map((e,t)=>`
        <button type="button" class="swap-option" data-action="choose-swap" data-index="${t}">
          <strong>${e.exercise.name}</strong>
          <small>${e.exercise.muscles}</small>
          ${e.cautionAreas.length>0?`<small class="swap-caution">Go easy: has a caution for you</small>`:``}
        </button>`).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">${vo(e)}</p>
      <h1>Swap ${n.exercise.name}</h1>
      <p class="lead">Pick another exercise that works the same muscles. ${n.exercise.name} stays in future workouts.</p>
    </header>

    <div class="swap-list">${r}</div>

    <button type="button" class="secondary" data-action="cancel-swap">Keep ${n.exercise.name}</button>
  `}function Co(e,t,n,r=`lb`,i=!1){let a=$(e);if(!a)return``;let o=a.exercise.weightKind??`load`,s=D(a.exercise,e.prescription),c=a.exercise.equipment.includes(`dumbbells`),l=o===`assist`?`Help from the machine (${r})`:c?`Weight (${r}, per dumbbell)`:`Weight (${r})`,d=(e,t,n,r)=>`
    <label class="stepper-label" for="log-${e}">${t}</label>
    <div class="stepper">
      <button type="button" class="step-button" data-step="${e}" data-delta="${-r}" aria-label="Less">−</button>
      <input id="log-${e}" type="number" inputmode="decimal" min="0" value="${n}" data-field="${e}" />
      <button type="button" class="step-button" data-step="${e}" data-delta="${r}" aria-label="More">+</button>
    </div>
  `;return`
    <header class="screen-header">
      <p class="eyebrow">${vo(e)}</p>
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
  `}function wo(e,t){return e.exercises.flatMap(n=>mo(t,e,n.exercise.id).map((e,t)=>({planned:n,setIndex:t,set:e})))}function To(e,t,n=`lb`){let r=e.phase===`rest`,i=wo(e,t).map(({planned:t,setIndex:r,set:i},a)=>{let o=D(t.exercise,e.prescription).unit===`seconds`?`sec`:`reps`,s=i.weight===null?``:`${l(i.weight,n)} × `;return`<button type="button" class="swap-option" data-action="choose-fix" data-index="${a}">
        <strong>${t.exercise.name}</strong>
        <small>Set ${r+1}: ${s}${i.amount} ${o}</small>
      </button>`});return`
    <header class="screen-header">
      <p class="eyebrow">${vo(e)}</p>
      <h1>Fix a set</h1>
      <p class="lead">Tap the set you logged wrong.${r?` Your rest timer keeps going.`:``}</p>
    </header>

    <div class="swap-list">${i.join(``)}</div>

    <button type="button" class="secondary" data-action="cancel-fix">${r?`Back to rest`:`Back`}</button>
  `}function Eo(e,t,n,r,i=!1){let a=$(e);if(!a)return``;let o=e.setNumber===1?`Next exercise: <strong>${a.exercise.name}</strong>`:`Next: set ${e.setNumber} of ${e.prescription.sets}, ${a.exercise.name}`;return`
    <header class="screen-header">
      <p class="eyebrow">${vo(e)}</p>
      <h1>Rest</h1>
    </header>

    <section class="card rest-card">
      <p class="timer" data-timer aria-live="off">${Fe(po(e,t))}</p>
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
        ${qa(e.day,r)}
        ${yo(n)}
      </div>
    </details>
  `}function Do(e,t,n){let r=Xn(t,e.startedAt,e=>x[e]?x[e].weightKind??`load`:null);if(r.length===0)return``;let i=r.map(({exerciseId:e,value:t,previous:r})=>{let i=x[e],a=i.weightKind??`load`,s=a===`bodyweight`?i.timedSeconds?`sec`:`reps`:n,l=e=>c(a===`bodyweight`?e:o(e,n));return`<li><strong>${i.name}</strong>: ${l(t)} ${s} <span class="hint">(was ${l(r)} ${s})</span></li>`}).join(``);return`
    <section class="card highlights-card">
      <h2>🏆 New personal best${r.length===1?``:`s`}</h2>
      <ul class="summary">${i}</ul>
    </section>`}function Oo(e,t,n,r=`lb`,i=null){let a=e.exercises.map(n=>{let i=mo(t,e,n.exercise.id),a=D(n.exercise,e.prescription).unit,o=i.length>0?Z({date:``,sets:i},a,r):`skipped`;return`<li><strong>${n.exercise.name}</strong><br /><span class="hint">${o}</span></li>`}).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">Workout done</p>
      <h1>Nice work!</h1>
      <p class="lead">Your sets are saved, so next time you'll see what you did today.</p>
    </header>

    <section class="card finish-summary">
      <p class="finish-stats">${no(eo(e,t))}</p>
      ${i?`<p class="hint">${i}</p>`:``}
      <button type="button" class="secondary" data-action="share-week">Share my week</button>
    </section>

    ${Do(e,t,r)}

    <section class="card">
      <h2>Today</h2>
      <ul class="summary">${a}</ul>
    </section>

    <section class="card">
      <h2>Cool down</h2>
      <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
      ${yr}
      ${Me(n,`warm-up`)}
    </section>

    <button type="button" class="secondary" data-action="fix-set">Fix a set</button>
    <button type="button" class="primary" data-action="close-session">Back to workouts</button>
  `}function ko(e,t){let n=D(t.exercise,e.prescription);return`${n.min} to ${n.max} ${n.unit}`}function Ao(e,t,n=`lb`){let r=$(e);if(!r)return``;let i=[e.setNumber===1?`${r.exercise.name}.`:``,`Set ${e.setNumber} of ${e.prescription.sets}.`,`${ko(e,r)}.`],a=go(t,e,r,n);return e.setNumber===1&&a.weight!==null&&i.push(`Try ${c(o(a.weight,n))} ${d(n)}.`),i.filter(Boolean).join(` `)}function jo(e){return`Rest ${e.prescription.restSeconds} seconds.`}function Mo(e){let t=$(e);return t?e.setNumber===1?`10 seconds. Next up, ${t.exercise.name}.`:`10 seconds. Get ready for set ${e.setNumber}.`:``}var No=10,Po=900,Fo=30,Io=`If the pain was sharp or keeps coming back, stop and get it checked.`;function Lo(e,t){let{root:n,state:r,music:i}=e,a=!0,s={weight:``,amount:``},c=``,l,u=!1,d=``,f=null,p=!1,m=null;function h(e){a&&e&&dr(e,{onStart:i.duck,onEnd:i.restore})}function g(){let n=r.session;if(!n)return``;if(p)return xo(n,r.history);if(m){let e=m.editing,t=e?n.exercises.findIndex(t=>t.exercise.id===e.exerciseId):-1;return e&&t>=0?Co({...n,index:t,setNumber:e.setIndex+1},s,c,r.weightUnit,!0):To(n,r.history,r.weightUnit)}switch(n.phase){case`lift`:return f?So(n,f):bo(n,r.history,a,d,i.current(),r.weightUnit,r.machineNotes[$(n)?.exercise.id??``]??``);case`log`:return Co(n,s,c,r.weightUnit);case`rest`:return Eo(n,Date.now(),a,i.current(),e.root.querySelector(`details.rest-more`)?.open??!1);case`done`:return Oo(n,r.history,t.workoutFor(n.day).coolDown,r.weightUnit,to((r.profile??G).weekPlan,new Date))}}function _(){let e=r.session,t=e&&$(e);if(!e||!t)return;let n=mo(r.history,e,t.exercise.id),i=n[n.length-1],a=go(r.history,e,t,r.weightUnit),l=D(t.exercise,e.prescription),u=i?.weight??a.weight;s={weight:u==null?``:String(o(u,r.weightUnit)),amount:String(i?.amount??l.max)},c=``}function v(e){return n.querySelector(`input[data-field="${e}"]`)?.value.trim()??``}function y(t){let n=(t.exercise.weightKind??`load`)===`bodyweight`;s={weight:v(`weight`),amount:v(`amount`)};let i=nr(s.weight,s.amount,n,r.weightUnit);return`error`in i?(c=i.error,e.render(),null):i.set}function b(t,n){let i=r.session,a=i&&mo(r.history,i,t)[n];i&&a&&m&&(m={editing:{exerciseId:t,setIndex:n}},s={weight:a.weight===null?``:String(o(a.weight,r.weightUnit)),amount:String(a.amount)},c=``,e.render(),window.scrollTo(0,0))}function ee(){m=null;let t=r.session;if(t?.phase===`rest`&&po(t,Date.now())===0){r.session=co(t),X(r),C();return}e.render(),window.scrollTo(0,0)}function x(){let e=r.session,t=m?.editing,n=e?.exercises.find(e=>e.exercise.id===t?.exerciseId);if(!e||!t||!n)return;let i=y(n);i&&(r.history=Gn(r.history,t.exerciseId,e.startedAt,t.setIndex,i),X(r),ee())}function S(){let e=r.session,t=e&&$(e);if(!e||!t)return;let n=y(t);n&&(r.history=Wn(r.history,t.exercise.id,e.startedAt,n),r.session=so(e,Date.now()),X(r),C())}function C(n=!0){window.clearInterval(l);let i=r.session;i&&(i.phase===`rest`?(u=po(i,Date.now())<=No,h(jo(i)),l=window.setInterval(w,250)):i.phase===`lift`?n&&h(Ao(i,r.history,r.weightUnit)):i.phase===`done`&&(_r(!1),i.finishedAt===void 0&&(r.session={...i,finishedAt:Date.now()}),t.completeWorkout(i.day),X(r),h(`Workout complete. Nice work!`),pr([200,100,200])),e.render(),window.scrollTo(0,0))}function w(){let e=r.session;if(!e||e.phase!==`rest`){window.clearInterval(l);return}let t=po(e,Date.now()),i=n.querySelector(`[data-timer]`);i&&(i.textContent=Fe(t)),!u&&t<=No&&t>0&&(u=!0,h(Mo(e))),t===0&&!m&&(pr([300]),r.session=co(e),X(r),h(`Go.`),i&&(i.textContent=`Go!`,i.closest(`.rest-card`)?.classList.add(`rest-over`)),window.setTimeout(()=>{(!i||n.querySelector(`.rest-over`))&&C()},Po),window.clearInterval(l))}function T(){window.clearInterval(l),m=null,f=null,p=!1,_r(!1),r.session=null,e.resetCalendarSelection(),X(r),e.go(`today`)}function te(){let e=r.session,n=e&&$(e);if(!e||!n||!r.profile)return;t.setAvoided(n.exercise.id,!0);let i=e.exercises.map(e=>e.exercise.id),[a]=ye(n,r.profile,r.equipmentIds,i);a?(r.session=fo(e,a),d=`Switched from ${n.exercise.name} to ${a.exercise.name}, which works the same muscles. ${Io}`,h(`Switched to ${a.exercise.name}.`)):(r.session=uo(e),d=`Skipped ${n.exercise.name}. There's no gentler option for it with your equipment. ${Io}`),X(r),C(!a)}function E(o,s){let c=r.session;if(c){if(o!==`hurt`&&o!==`toggle-voice`&&(d=``),o===`open-swap`){let t=$(c);if(!t||!r.profile)return;let n=c.exercises.map(e=>e.exercise.id);f=ye(t,r.profile,r.equipmentIds,n),e.render(),window.scrollTo(0,0)}else if(o===`choose-swap`){let e=f?.[Number(s)];if(f=null,!e)return;r.session=fo(c,e),X(r),C()}else if(o===`cancel-swap`)f=null,e.render();else if(o===`hurt`)te();else if(o===`set-done`)r.session=oo(c),_(),e.render(),n.querySelector(`input[data-field="amount"]`)?.select();else if(o===`cancel-log`)r.session={...c,phase:`lift`},X(r),e.render(),window.scrollTo(0,0);else if(o===`save-set`)S();else if(o===`fix-set`)m={editing:null},e.render(),window.scrollTo(0,0);else if(o===`choose-fix`){let e=wo(c,r.history)[Number(s)];e&&b(e.planned.exercise.id,e.setIndex)}else o===`save-fix`?x():o===`cancel-fix`?ee():o===`add-rest`?(r.session=lo(c,Fo,Date.now()),u=!1,X(r),w()):o===`skip-rest`?(r.session=co(c),X(r),C()):o===`skip-exercise`?(r.session=uo(c),X(r),C()):o===`play-music`?i.play(c.day):o===`stop-music`?i.stop():o===`toggle-voice`?(a=!a,a||window.speechSynthesis?.cancel(),e.render()):o===`end-workout`?(p=!0,e.render(),window.scrollTo(0,0)):o===`cancel-end`?(p=!1,e.render()):o===`confirm-end`?(c.exercises.some(e=>mo(r.history,c,e.exercise.id).length>0)&&t.completeWorkout(c.day),T()):o===`close-session`&&T()}}return{screen:g,handleAction:E,begin(e,t){r.session=ro(e,new Date,t),X(r),_r(!0),C()},resume(){r.session&&(r.session.phase===`rest`&&po(r.session,Date.now())===0&&(r.session=co(r.session)),r.session.phase===`log`&&_(),_r(r.session.phase!==`done`),r.session.phase===`rest`&&(l=window.setInterval(w,250)))}}}var Ro=`<p class="notice save-warning" role="alert">This phone isn't letting the app save right now, so what you log could be lost when you close this page. Free up some storage, or open the app outside a private tab.</p>`;function zo(e){let t=Fn();Jt(t.customExercises);let a=t.profile?t.equipmentConfirmed?Ci()??`today`:`equipment`:`intro`,o=B(new Date),s=null,c=0,l=null,u=t.profile?{...t.profile}:{...G},p,m=!1,h=!1,_=!1,v=!1,y=null,b=``,ee=`all`,S=!1,C=Se(),w=`today`,T=null;zn(()=>queueMicrotask(P));let te=Va(P,j),E={root:e,state:t,music:te,render:P,showToast:j,go:M,redrawProfile:pe,resetCalendarSelection:he},ne=vr(E),re=Oi(E),ie=Bn(E),oe=Vn(E),se=rr(E),O=Sr(E),k=Ka(E),A=ca(E),ce=Qa(E),le=Lo(E,{workoutFor:ze,completeWorkout:Ge,setAvoided:R});function ue(e){X(t)?e&&j(e):j(`Couldn't save on this device — changes last until you close the page.`)}function j(t){let n=e.querySelector(`.toast`);n&&(n.textContent=t,n.classList.add(`visible`),window.clearTimeout(p),p=window.setTimeout(()=>n.classList.remove(`visible`),2500))}function M(n){a=n,xi(n),y=null,T=null,n===`profile`&&(u=t.profile?{...t.profile}:{...G},C=Se()),P(),$i(e),window.scrollTo(0,0)}function de(){return w===`profile`?`Back to your profile`:w===`today`?`Back to your workout`:`Back`}function fe(){return`
      <section class="card row-card">
        <div>
          <h2>New to working out?</h2>
        </div>
        <button type="button" class="secondary" data-action="open-guide">Start here</button>
      </section>`}function pe(){a===`profile`&&!t.session&&P()}function N(){return t.workoutLog.length===0&&Object.keys(t.history).length===0}function me(n){let r=e.querySelector(`input[data-field="machine-note"][data-exercise="${n}"]`);if(!r||!x[n])return;let i=ft(r.value),a={...t.machineNotes};i?a[n]=i:delete a[n],t.machineNotes=a,X(t),r.value=i,j(i?`Saved. It will show here next time.`:`Note cleared.`)}function he(){o=B(new Date),c=0,l=null}function ge(e){let n=Math.min(12,Math.max(-4,e));if(n===c)return;c=n,l=null;let r=qe(new Date,(t.profile??G).weekPlan,t.workoutLog,c);o=(r.find(e=>e.isToday)??r[0]).key,P()}function _e(e){let n=e?t.session?.day:a===`today`?Ve().shown:null;return n?` type-${n}`:``}function P(){let n=e.querySelector(`details.profile-more`);n&&(m=n.open);let r=e.querySelector(`details.setup-options`);r&&(S=r.open);let i=e.querySelector(`details.focus-picker`);i&&(h=i.open);let a=e.querySelector(`details.week-days`);a&&(_=a.open);let o=e.querySelector(`details.body-weight`);o&&(v=o.open);let c=t.profile!==null&&t.equipmentConfirmed,l=t.session!==null;document.body.classList.toggle(`has-nav`,c&&!l);let u=Zi(document.activeElement,e);e.innerHTML=`
      <main class="screen${_e(l)}">${Rn()?Ro:``}${l?le.screen():ve()}</main>
      ${c&&!l?Ze():``}
      ${s!==null&&c&&!l?fa(s):``}
      <div class="toast" role="status" aria-live="polite"></div>
    `,s!==null&&c&&!l&&pa(e,s),O.fill(),u&&Qi(e,u)}function F(){return{equipmentIds:t.equipmentIds,protectedAreas:t.profile?.protectedAreas??[],history:t.history,weightUnit:t.weightUnit}}function ve(){if(a===`intro`)return ya(ne.card(!0));if(a===`guide`)return _a(de());if(a===`profile`)return we();if(a===`equipment`)return Ie();if(a===`edit-workout`)return tr(t.history,se.date(),t.weightUnit);if(a===`library`)return vi(b,ee,F());if(a===`progress`){let e=(t.profile??G).weekPlan.filter(Boolean).length;return ii(t.history,new Date,e,t.recovery,t.weightUnit,{workoutLog:t.workoutLog,bodyWeights:t.bodyWeights,bodyWeightOpen:v})}return a===`fuel`?A.screen():Ye()}function I(e,t,n,r,i=``){return`<button type="button" class="chip${r?` active`:``}" data-group="${e}" data-value="${t}" aria-pressed="${r}">
      <span>${n}</span>${i?`<small>${i}</small>`:``}
    </button>`}function ye(){return`
      <details class="card switcher profile-more"${m?` open`:``}>
        <summary>More: calendar, backup, home screen</summary>
        <div class="more-body">
          ${wr(Cr())}
          ${Ai(t.calendar,Ae(t.profile??G),T)}
          ${k.card()}
          ${ne.card(!1)}
          ${Ja()}
        </div>
      </details>`}function be(){return`
      <section class="card">
        ${De(`⚖️`,`gold`,`Weight units`)}
        <div class="chip-row two">
          ${i.map(e=>`<button type="button" class="chip${t.weightUnit===e?` active`:``}" data-action="set-weight-unit" data-value="${e}" aria-pressed="${t.weightUnit===e}">${e===`lb`?`Pounds (lb)`:`Kilograms (kg)`}</button>`).join(``)}
        </div>
        <p class="hint small">Only changes how weights are shown and typed. Your logged weights are kept.</p>
      </section>

      <section class="card">
        ${De(`📅`,`purple`,`Your week`)}
        <p class="hint">Choose how many days a week, or pick each day yourself. Push is chest, shoulders and triceps. Pull is back and biceps. Legs days include abs. Home is a short abs routine you can do anywhere.</p>
        ${Gi(u.weekPlan,u.focusPlan,h,_)}
      </section>`}function xe(e){return`
      <details class="card switcher setup-options"${S?` open`:``}>
        <summary>Optional: weight units and workout days</summary>
        <div class="more-body">${e}</div>
      </details>`}function Se(){let e=t.bodyWeights[t.bodyWeights.length-1];return Be(e?.pounds??null,t.heightCm,t.weightUnit)}function Ce(){let e=Ue(C,t.weightUnit);if(e)return C={...C,error:e},P(),!1;let n=Se();if(C.weight.trim()!==``&&C.weight.trim()!==n.weight){let e=f(Number(C.weight.trim()),t.weightUnit);t.bodyWeights=g(t.bodyWeights,B(new Date),e)}return t.heightCm=He(C,t.weightUnit),!0}function we(){let e=t.profile===null,n=be();return`
      <header class="screen-header">
        ${e?`<p class="eyebrow">Step 1 of 2</p>`:``}
        <h1>${e?`Let's set your goal`:`Your profile`}</h1>
        <p class="lead">${e?`Pick what you are training for. This shapes which exercises you get and how many sets and reps. It stays on this phone.`:`This shapes which exercises you get and how many sets and reps. It stays on this phone.`}</p>
      </header>

      ${Oe()}

      ${e||!N()?``:fe()}

      <section class="card">
        ${De(`🎯`,`teal`,`Your goal`)}
        <div class="chip-col">
          ${Zt.map(e=>I(`goal`,e.id,e.label,u.goal===e.id,e.detail)).join(``)}
        </div>
      </section>

      ${We(C,t.weightUnit)}

      <section class="card">
        ${De(`🏋️`,`blue`,`Lifting experience`)}
        <div class="chip-row three">
          ${Qt.map(e=>I(`experience`,e.id,e.label,u.experience===e.id)).join(``)}
        </div>
      </section>

      ${e?``:n}

      <section class="card">
        ${De(`🛡️`,`green`,`Areas to protect`)}
        <p class="hint">Tick anything that's injured, painful, or tight. Risky exercises for these areas are left out, and gentler ones are picked instead.</p>
        <div class="chip-row">
          ${$t.map(e=>I(`area`,e.id,e.label,u.protectedAreas.includes(e.id))).join(``)}
        </div>
        <p class="disclaimer">This app isn't medical advice. If something hurts beyond normal muscle tiredness, stop, and check with a doctor or physical therapist about what's safe for you.</p>
      </section>

      ${e?xe(n):``}

      ${je()}

      ${e?``:ye()}

      <button type="button" class="primary" data-action="save-profile">${e?`Next: your gym's equipment`:`Save profile`}</button>
      ${e?``:`<button type="button" class="secondary" data-nav="equipment">Edit gym equipment</button>`}
      ${e||N()?``:`<button type="button" class="link-button center" data-action="open-guide">Read the Start here guide</button>`}
      ${e?``:`<button type="button" class="link-button center" data-action="start-tour">Take a quick tour of the app</button>`}
    `}function L(){let e=Se();return[`weight`,`feet`,`inches`,`cm`].some(t=>C[t].trim()!==e[t])}function Ee(){let e=t.profile;if(!e)return!1;let n=e=>[...e.protectedAreas].sort().join(`,`);return u.goal!==e.goal||u.experience!==e.experience||n(u)!==n(e)||L()||Ae(e)}function Oe(){return y===null?``:`
      <section class="notice" role="alert">
        <p><strong>You changed your profile but haven't saved it.</strong></p>
        <div class="button-row">
          <button type="button" class="primary" data-action="save-and-leave">Save and go</button>
          <button type="button" class="secondary" data-action="leave-profile">Leave without saving</button>
        </div>
      </section>`}function Ae(e){return JSON.stringify(u.weekPlan)!==JSON.stringify(e.weekPlan)||JSON.stringify(u.focusPlan)!==JSON.stringify(e.focusPlan)}function je(){let e=t.profile?.avoidedExerciseIds??[];if(e.length===0)return``;let n=e.filter(e=>x[e]).map(e=>`
        <li class="avoided-item">
          <span>${x[e].name}</span>
          <button type="button" class="link-button" data-action="unavoid" data-exercise="${e}">Bring back</button>
        </li>`).join(``);return`
      <section class="card">
        ${De(`⚠️`,`pink`,`Exercises that hurt`)}
        <p class="hint">You marked these as hurting, so they're left out of your workouts.</p>
        <ul class="avoided-list">${n}</ul>
      </section>
    `}function R(e,n){if(!t.profile)return;let r=t.profile.avoidedExerciseIds.filter(t=>t!==e);t.profile={...t.profile,avoidedExerciseIds:n?[...r,e]:r},u={...u,avoidedExerciseIds:t.profile.avoidedExerciseIds}}function Fe(e,t){let n=lt.filter(t=>e.ids.includes(t.id));return`
      <section class="card equipment-list">
        <h2>${e.title}</h2>
        ${n.map(e=>`
          <label class="equipment-item">
            <input type="checkbox" data-equipment="${e.id}" ${t.has(e.id)?`checked`:``} />
            <span><strong>${e.name}</strong><small>${e.hint}</small></span>
          </label>`).join(``)}
      </section>`}function Ie(){let e=!t.equipmentConfirmed,n=new Set(t.equipmentIds);return`
      <header class="screen-header">
        ${e?`<p class="eyebrow">Step 2 of 2</p>`:``}
        <h1>What does your gym have?</h1>
        <p class="lead">Untick anything your gym doesn't have. You'll only get exercises you can actually do there. Not sure what something is? Leave it ticked: you can change this any time in Profile.</p>
      </header>

      ${dt.map(e=>Fe(e,n)).join(``)}

      <button type="button" class="primary" data-action="save-equipment">${e?`See today's workout`:`Save equipment`}</button>
    `}function Le(e,n,r){let{exercise:i}=e,a=Hn(t.history,i.id);return`
      <article class="exercise">
        <details>
          <summary>
            <span class="exercise-number">${n+1}</span>
            <span class="exercise-title">
              <strong>${i.name}</strong>
              <small>${i.muscles}</small>
              ${a?`<small class="last-time">Last time: ${Z(a,r,t.weightUnit)}</small>`:``}
            </span>
            <span class="chevron" aria-hidden="true"></span>
          </summary>
          ${ci(t.history,i.id,r,t.weightUnit)}
          ${Ne(e)}
          ${Pe(e)}
          ${pt(i.id,t.machineNotes[i.id]??``)}
          <button type="button" class="link-button hurt-link" data-action="avoid" data-exercise="${i.id}">This hurts me, replace it</button>
        </details>
      </article>
    `}function ze(e,n=null){return Te(e,t.profile??G,t.equipmentIds,n,Yt(t.customExercises,e))}function z(e,n){let r=t.profile??G;return n!==null&&r.weekPlan[e]===n?r.focusPlan[e]??null:null}function Ve(){let e=qe(new Date,(t.profile??G).weekPlan,t.workoutLog,c),n=e.find(e=>e.key===o)??e.find(e=>e.isToday)??e[0];return{week:e,selected:n,shown:(n.isToday&&n.status!==`done`?l:null)??n.workout}}function Ge(e){t.workoutLog=[...t.workoutLog,{date:new Date().toISOString(),day:e}],l=null}function V(e){return`
      <details class="card switcher">
        <summary>Switch today's workout</summary>
        <p class="hint">Want a different one today? Pick it here. Your week plan stays as it is.</p>
        ${ke(e,`Workout for today`)}
      </details>`}function Ke(e){if(!e)return``;let i=new Date;return vt(t.deload,i)?qi():n(t,i)?r():bt(t.workoutLog,i,t.deload)?Ji(yt(t.workoutLog,i,t.deload.easyWeeks)):``}function Je(e){return e?ce.card():``}function Ye(){let{week:e,selected:n,shown:r}=Ve(),i=Li(e,n.key,c);if(r===null)return`
        <header class="screen-header">
          <p class="eyebrow">${Ni(n)}</p>
          <h1>Rest day</h1>
        </header>
        ${i}
        ${zi(n)}
        ${N()?fe():``}
        ${Je(n.isToday)}
        ${Ke(n.isToday)}
        ${Bi(n)}
      `;let a=ze(r,z(n.weekdayIndex,r)),o=n.status===`done`,s=n.status===`missed`,l=n.isToday&&!o,u=e.some(e=>e.isToday&&e.status!==`done`),d=a.exercises.length>0,f=d?a.exercises.map((e,t)=>Le(e,t,D(e.exercise,a.prescription).unit)).join(``):`<section class="card empty">
           <p>None of your gym's equipment fits this day yet.</p>
           <button type="button" class="secondary" data-action="go-equipment">Check your equipment</button>
         </section>`,p=d?o?`<p class="notice done-note">✓ Done. Your sets from this workout are saved.</p>
           <button type="button" class="secondary" data-nav="progress">See your weights and progress</button>`:l?`<button type="button" class="primary big" data-action="start-workout">Start workout</button>
             <p class="hint start-hint">Talks you through each set with a rest timer. Headphones recommended.</p>`:s?`<p class="notice">○ This one wasn't logged. It was planned for ${H[n.weekdayIndex]}.</p>
               ${u?`<button type="button" class="secondary" data-action="do-today" data-workout="${r}">Do it today instead</button>`:``}`:`<p class="hint start-hint">Coming up. You can start it on the day.</p>`:``;return`
      <header class="screen-header">
        <p class="eyebrow">${n.isToday?`Today's workout`:Ni(n)}</p>
        <h1>${a.title}</h1>
        ${t.profile?`<p class="hint plan-summary">${on(t.profile)}</p>`:``}
      </header>

      ${i}

      ${p}

      ${N()?fe():``}
      ${Je(n.isToday)}
      ${Ke(n.isToday)}

      <details class="card switcher">
        <summary>Warm up first</summary>
        ${Me(a.warmUp,`warm-up`)}
      </details>

      <p class="tap-hint">Tap an exercise to see how to do it. ${ae(a.prescription)}</p>
      <div class="exercise-list">${f}</div>

      <details class="card switcher">
        <summary>Cool down</summary>
        <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
        ${yr}
        ${Me(a.coolDown,`warm-up`)}
      </details>

      ${qa(r,te.current())}
      ${l?V(r):``}

      ${d&&l?`<button type="button" class="link-button center" data-action="finish-workout">Mark done without the timer</button>`:``}
    `}function Ze(){let e=a===`guide`?w:a===`edit-workout`?`progress`:a,t=t=>e===t||t===`profile`&&e===`equipment`,n=(e,n)=>`<button type="button" class="nav-item${t(e)?` active`:``}"${t(e)?` aria-current="page"`:``} data-nav="${e}">${ua[e]??``}<span>${n}</span></button>`;return`<nav class="bottom-nav" aria-label="Main">${n(`today`,`Workout`)}${n(`library`,`Exercises`)}${n(`progress`,`Progress`)}${n(`fuel`,`Fuel`)}${n(`profile`,`Profile`)}</nav>`}e.addEventListener(`change`,e=>{let n=e.target;if(n.dataset.field===`restore-file`){let e=n.files?.[0];e&&ne.handleFileChosen(e);return}n.dataset.field===`cal-time`&&Qe(n.value)?(t.calendar={...t.calendar,time:n.value},X(t)):n.dataset.field===`cal-minutes`&&Xe.includes(Number(n.value))&&(t.calendar={...t.calendar,minutes:Number(n.value)},X(t))});let $e=null;e.addEventListener(`input`,t=>{let n=t.target,r=Re.get(n.dataset.field??``);if(r){C={...C,[r]:n.value,error:null};return}if(n.dataset.field!==`library-search`)return;b=n.value;let i=e.querySelector(`.library-list`);i&&(i.innerHTML=gi(b,ee,F()))}),e.addEventListener(`touchstart`,e=>{let t=e.touches[0];$e=e.target.closest(`.calendar, .week-nav`)&&t?{x:t.clientX,y:t.clientY}:null}),e.addEventListener(`touchend`,e=>{let n=e.changedTouches[0],r=$e;if($e=null,!r||!n||t.session)return;let i=n.clientX-r.x,a=n.clientY-r.y;Math.abs(i)>=50&&Math.abs(i)>1.5*Math.abs(a)&&ge(c+(i<0?1:-1))}),e.addEventListener(`click`,n=>{let r=n.target.closest(`[data-point]`);if(r){let e=r.closest(`.progress-card`)?.querySelector(`.chart-caption`);e&&(e.textContent=r.dataset.point??``);return}let p=n.target.closest(`button`);if(!p)return;let{group:m,value:h,action:g,day:_,date:v,nav:b,step:S,delta:ae,exercise:D,index:de,planDay:fe,planWorkout:pe,weekPreset:N,workoutDate:_e,workout:F,focusDay:ve,focus:I}=p.dataset;if(S&&ae){let t=e.querySelector(`input[data-field="${S}"]`);t&&(t.value=String(Math.max(0,(Number(t.value)||0)+Number(ae))));return}if(g===`edit-workout`&&_e){se.begin(_e);return}if(N){let e=tn.find(e=>String(e.days)===N);e&&(u.weekPlan=[...e.plan],u.focusPlan=[...nn],P());return}if(fe!==void 0&&pe){let e=Number(fe),t=pe===`rest`?null:pe,n=u.weekPlan.map((n,r)=>r===e?t:n);if(!n.some(Boolean)){j(`Keep at least one workout day.`);return}u.weekPlan=n,u.focusPlan=u.focusPlan.map((t,n)=>n===e?null:t),P();return}if(ve!==void 0&&I){let e=Number(ve),t=I===`balanced`?null:I;u.focusPlan=u.focusPlan.map((n,r)=>r===e?t:n),P();return}if(m&&h){if(m===`goal`&&(u.goal=h),m===`experience`&&(u.experience=h),m===`area`){let e=h,t=u.protectedAreas;u.protectedAreas=t.includes(e)?t.filter(t=>t!==e):[...t,e]}P();return}if(v){o=v,l=null,P();return}if(_){l=_,P();return}if(b){if(b!==`profile`&&a===`profile`&&Ee()){y=b,P(),window.scrollTo(0,0);return}M(b);return}if(g){if(g===`library-group`&&h){ee=h,P();return}if(g===`tour-next`||g===`tour-skip`){s=g===`tour-next`&&s!==null&&s+1<da.length?s+1:null,P();return}if(!t.session&&(g===`week-prev`||g===`week-next`||g===`week-today`)){ge(g===`week-today`?0:c+(g===`week-next`?1:-1));return}if(g===`save-note`&&D){me(D);return}if(t.session){!re.handleAction(g)&&!O.handleAction(g)&&le.handleAction(g,de);return}if(a===`fuel`){A.handleAction(g,ae,de);return}if(!(ce.handleAction(g,h)||ne.handleAction(g)||re.handleAction(g)||ie.handleAction(g)||oe.handleAction(g,D)||se.handleAction(g,p)||O.handleAction(g)||k.handleAction(g))){if(g===`save-profile`){if(!Ce())return;let e=t.profile===null;t.profile={...u},e?(X(t),M(`equipment`)):(M(`today`),ue(`Profile saved — your workouts are updated.`))}else if(g===`save-and-leave`&&y!==null){if(!Ce())return;let e=y;t.profile={...u},M(e),ue(`Profile saved — your workouts are updated.`)}else if(g===`leave-profile`&&y!==null)M(y);else if(g===`save-equipment`){t.equipmentIds=[...e.querySelectorAll(`input[data-equipment]`)].filter(e=>e.checked).map(e=>e.dataset.equipment??``);let n=!t.equipmentConfirmed;t.equipmentConfirmed=!0,n&&(s=0),M(`today`),ue(n?null:`Equipment saved.`)}else if(g===`avoid`&&D)R(D,!0),P(),ue(`${x[D]?.name??`That exercise`} won't be planned again. Bring it back any time in Profile.`);else if(g===`unavoid`&&D)R(D,!1),P(),ue(`${x[D]?.name??`That exercise`} is back in your workouts.`);else if(g===`start-tour`)s=0,he(),M(`today`);else if(g===`go-equipment`)M(`equipment`);else if(g===`add-to-calendar`){let e=ki(E);e&&(T=e,P(),j(`Calendar file downloaded. Open it to add your workouts.`))}else if(g===`easy-week-start`)t.deload=xt(t.deload,new Date),X(t),P(),j(`Easy week is on. Every workout this week has one fewer set.`);else if(g===`easy-week-dismiss`)t.deload=Ct(t.deload,new Date),X(t),P();else if(g===`easy-week-end`)t.deload=St(t.deload,new Date),X(t),P(),j(`Back to your normal sets.`);else if(g===`set-weight-unit`){let e=i.find(e=>e===h);if(!e)return;let n=Number(C.weight.trim()),r=He(C,t.weightUnit);C=Be(C.weight.trim()!==``&&Number.isFinite(n)?f(n,t.weightUnit):null,r!==null&&!Number.isNaN(r)?r:null,e),t.weightUnit=e,X(t),P(),j(`Weights are now in ${d(e)}.`)}else if(g===`dismiss-backup-nudge`)t.backupNudgeDismissedAt=new Date().toISOString(),X(t),P();else if(g===`open-guide`)a!==`guide`&&(w=a),M(`guide`);else if(g===`close-guide`)a=w,xi(a),P(),$i(e),window.scrollTo(0,0);else if(g===`start-setup`)M(`profile`);else if(g===`play-music`&&F)te.play(F);else if(g===`stop-music`)te.stop();else if(g===`do-today`&&F)o=B(new Date),l=F,P(),window.scrollTo(0,0);else if(g===`start-workout`){let{selected:e,shown:n}=Ve();if(!n)return;let r=ce.today(),i=vt(t.deload,new Date)?`easy`:r?Nr(r):null;le.begin(ze(n,z(e.weekdayIndex,n)),i)}else if(g===`finish-workout`){let{shown:e}=Ve();if(!e)return;Ge(e),M(`today`),ue(`Nice work! It's marked done on your calendar.`)}}}}),k.check(),le.resume(),P()}var Bo=document.querySelector(`#app`);Bo&&zo(Bo),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});