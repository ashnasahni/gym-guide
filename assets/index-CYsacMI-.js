(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=864e5;function t(t,n){return t===null?1/0:(n.getTime()-new Date(t).getTime())/e}function n(e,n){return e.workoutLog.length>=3&&t(e.lastBackupAt,n)>30&&t(e.backupNudgeDismissedAt,n)>14}function r(){return`
    <section class="card backup-nudge">
      <h2>Save a backup</h2>
      <p class="hint">Your workouts live only on this phone. If you clear your browser or get a new phone, they are gone. A backup file keeps them safe.</p>
      <div class="button-row">
        <button type="button" class="primary" data-action="save-backup">Save a backup</button>
        <button type="button" class="secondary" data-action="dismiss-backup-nudge">Not now</button>
      </div>
    </section>`}function i(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function a(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function o(e){let t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t}var s={"machine-chest-press":{id:`machine-chest-press`,name:`Machine Chest Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`chest-press`],setup:[`Set the seat so the handles line up with the middle of your chest.`,`Sit with your back and head flat against the pad, feet flat on the floor.`],steps:[`Grip the handles and press them forward until your arms are almost straight.`,`Bring them back slowly, about 2 seconds, until you feel a light stretch in your chest.`],mistakes:[`Seat too low, so your shoulders do the work instead of your chest.`,`Letting the weight stack slam between reps.`],stress:{shoulders:`moderate`},video:{youtubeId:`B-zyH8OTlsg`,channel:`Hammer Fitness`}},"dumbbell-bench-press":{id:`dumbbell-bench-press`,name:`Dumbbell Bench Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit on the end of a flat bench with dumbbells on your thighs.`,`Lie back, bringing the dumbbells to the sides of your chest.`],steps:[`Press both dumbbells up until your arms are straight above your chest.`,`Lower slowly until your elbows are a little below the bench.`],mistakes:[`Elbows flared straight out to the sides — keep them at about 45° from your body.`,`Arching your lower back off the bench.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`sTYWWaunX8o`,channel:`Born Fitness`}},"incline-dumbbell-press":{id:`incline-dumbbell-press`,name:`Incline Dumbbell Press`,muscles:`Upper chest, front shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline, about 30°.`,`Sit back with a dumbbell at each shoulder.`],steps:[`Press up and slightly in until your arms are straight.`,`Lower slowly back to shoulder level.`],mistakes:[`Bench set too steep, which turns it into a shoulder exercise.`,`Bouncing the weights at the bottom.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`c1ZX5ZXMQVk`,channel:`Vivian Ngo`}},"pec-deck-fly":{id:`pec-deck-fly`,name:`Pec Deck Fly`,muscles:`Chest`,equipment:[`pec-deck`],setup:[`Set the seat so the handles are at chest height.`,`Set the arms so you start with a comfortable stretch, not a deep one.`],steps:[`With a slight bend in your elbows, bring the handles together in front of you.`,`Squeeze for a second, then open slowly.`],mistakes:[`Starting with the arms pulled too far back.`,`Shrugging your shoulders up toward your ears.`],stress:{shoulders:`moderate`},video:{youtubeId:`hZ0CGRaKwbQ`,channel:`Hammer Fitness`}},"cable-fly":{id:`cable-fly`,name:`Cable Chest Fly`,muscles:`Chest`,equipment:[`cable`],setup:[`Set both pulleys at shoulder height with single handles.`,`Step forward into a split stance.`],steps:[`With soft elbows, bring the handles together in front of your chest.`,`Open back out slowly until your hands are in line with your chest.`],mistakes:[`Bending and straightening your elbows — it should be a hug, not a press.`],stress:{shoulders:`moderate`},video:{youtubeId:`pJDbn8Kyx0o`,channel:`StrengthLog`}},"machine-shoulder-press":{id:`machine-shoulder-press`,name:`Machine Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`shoulder-press`],setup:[`Set the seat so the handles start at about shoulder height.`,`Sit with your back flat against the pad.`],steps:[`Press the handles up until your arms are almost straight.`,`Lower slowly back to shoulder height.`],mistakes:[`Arching your lower back off the pad.`,`Pushing your head forward.`],stress:{shoulders:`moderate`},video:{youtubeId:`e5gJP7quyGk`,channel:`Vivian Ngo`}},"seated-dumbbell-shoulder-press":{id:`seated-dumbbell-shoulder-press`,name:`Seated Dumbbell Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench upright with your back supported.`,`Hold a dumbbell at each shoulder, palms forward.`],steps:[`Press up until your arms are straight overhead.`,`Lower slowly back to your shoulders.`],mistakes:[`Leaning back and arching to push heavier weight.`],stress:{shoulders:`moderate`,lowerBack:`moderate`},video:{youtubeId:`fuQpuu--bMI`,channel:`That Fit Friend`}},"dumbbell-lateral-raise":{id:`dumbbell-lateral-raise`,name:`Seated Lateral Raise`,muscles:`Side shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench holding light dumbbells at your sides.`],steps:[`Raise your arms out to the side until they are level with your shoulders.`,`Lower slowly over about 2 seconds.`],mistakes:[`Shrugging — keep your shoulders pressed down, away from your ears.`,`Going too heavy and swinging the weights up.`],stress:{neckUpperBack:`moderate`},video:{youtubeId:`yKAxVcU3nfw`,channel:`Vivian Ngo`}},"cable-tricep-pushdown":{id:`cable-tricep-pushdown`,name:`Cable Tricep Pushdown`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley high with a rope or straight bar.`,`Stand close with your elbows tucked at your sides.`],steps:[`Push down until your arms are straight, without moving your elbows.`,`Let it rise slowly back to about chest height.`],mistakes:[`Elbows drifting forward.`,`Leaning your whole body over the bar.`],stress:{},video:{youtubeId:`d-ySLTHUgQA`,channel:`Vivian Ngo`}},"overhead-cable-extension":{id:`overhead-cable-extension`,name:`Overhead Cable Tricep Extension`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley low with a rope.`,`Face away from the machine, rope behind your head.`],steps:[`Straighten your arms overhead.`,`Bend your elbows slowly to lower the rope behind your head.`],mistakes:[`Elbows flaring wide.`,`Arching your lower back.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`mRozZKkGIfg`,channel:`Bodybuilding.com`}},"assisted-dip":{id:`assisted-dip`,name:`Assisted Dip`,muscles:`Triceps, chest`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the dip handles.`],steps:[`Lower until your elbows are at about 90°.`,`Push back up to straight arms.`],mistakes:[`Going too deep, which strains the front of the shoulder.`],stress:{shoulders:`high`,wrists:`moderate`},video:{youtubeId:`slD5hhM_thg`,channel:`UMW Campus Recreation`},weightKind:`assist`},"lat-pulldown":{id:`lat-pulldown`,name:`Lat Pulldown`,muscles:`Upper back (lats), biceps`,equipment:[`lat-pulldown`],setup:[`Set the knee pad so your thighs are snug underneath it.`,`Grip the bar a little wider than your shoulders.`],steps:[`Pull the bar down to your upper chest, leading with your elbows.`,`Let it rise slowly until your arms are straight.`],mistakes:[`Pulling the bar behind your neck — always pull to the front.`,`Leaning far back and using momentum.`],stress:{wrists:`moderate`},video:{youtubeId:`oMJmAHRZXBk`,channel:`UC Davis Health`}},"assisted-pullup":{id:`assisted-pullup`,name:`Assisted Pull-Up`,muscles:`Upper back (lats), biceps`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the top handles.`],steps:[`Pull yourself up until your chin is over the handles.`,`Lower slowly to straight arms.`],mistakes:[`Craning your neck to get your chin over.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`fnHeovkmkkk`,channel:`Fitness 19`},weightKind:`assist`},"chest-supported-row":{id:`chest-supported-row`,name:`Chest-Supported Dumbbell Row`,muscles:`Mid back, rear shoulders, biceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline and lie face down on it, chest on the pad.`,`Let a dumbbell hang straight down from each hand.`],steps:[`Pull the dumbbells up toward your hips, squeezing your shoulder blades together.`,`Lower slowly until your arms are straight.`],mistakes:[`Lifting your chest off the pad.`,`Shrugging the weights up instead of rowing.`],stress:{},video:{youtubeId:`Nx0TzjgsI-0`,channel:`PureGym`}},"seated-cable-row":{id:`seated-cable-row`,name:`Seated Cable Row`,muscles:`Mid back, biceps`,equipment:[`seated-row`],setup:[`Sit with feet on the footplates and knees slightly bent.`,`Grip the handle and sit up tall.`],steps:[`Pull the handle to your belly button, squeezing your shoulder blades together.`,`Let your arms straighten slowly without rounding your back.`],mistakes:[`Rocking your torso back and forth.`,`Rounding your lower back as the handle goes forward.`],stress:{lowerBack:`moderate`},video:{youtubeId:`oFtfkSElE0s`,channel:`Hammer Fitness`}},"face-pull":{id:`face-pull`,name:`Cable Face Pull`,muscles:`Rear shoulders, upper back`,equipment:[`cable`],setup:[`Set the pulley at about face height with a rope.`,`Hold the rope ends with thumbs pointing back.`],steps:[`Pull the rope toward your face, splitting the ends apart beside your ears.`,`Return slowly with control.`],mistakes:[`Going heavy — this is a light, controlled exercise.`,`Shrugging toward your ears.`],stress:{},video:{youtubeId:`eTCBSFlCJ_s`,channel:`NASM`}},"reverse-pec-deck":{id:`reverse-pec-deck`,name:`Reverse Pec Deck`,muscles:`Rear shoulders, upper back`,equipment:[`pec-deck`],setup:[`Sit facing the pad, chest against it.`,`Set the handles so your arms start in front of you.`],steps:[`With slightly bent elbows, open your arms out to the side.`,`Return slowly.`],mistakes:[`Shrugging your shoulders up.`,`Swinging the weight.`],stress:{},video:{youtubeId:`v0rJuhEa59c`,channel:`FIT.nl`}},"dumbbell-curl":{id:`dumbbell-curl`,name:`Seated Dumbbell Curl`,muscles:`Biceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench with a dumbbell in each hand, palms forward.`],steps:[`Curl the weights up, keeping your elbows at your sides.`,`Lower slowly to straight arms.`],mistakes:[`Swinging your body to lift the weight.`,`Elbows drifting forward.`],stress:{wrists:`moderate`},video:{youtubeId:`SW5JS2Wf2uQ`,channel:`Horton Barbell`}},"cable-curl":{id:`cable-curl`,name:`Cable Curl`,muscles:`Biceps`,equipment:[`cable`],setup:[`Set the pulley low with a straight bar.`,`Stand close with elbows at your sides.`],steps:[`Curl the bar up toward your shoulders.`,`Lower slowly.`],mistakes:[`Leaning back to help the weight up.`],stress:{wrists:`moderate`},video:{youtubeId:`0TtZgAuC8Vw`,channel:`Holly Perkins`}},"hammer-curl":{id:`hammer-curl`,name:`Seated Hammer Curl`,muscles:`Biceps, forearms`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright with dumbbells at your sides, palms facing each other.`],steps:[`Curl up keeping your palms facing each other.`,`Lower slowly.`],mistakes:[`Swinging the weights.`],stress:{},video:{youtubeId:`bdlqQAVdcEk`,channel:`Vivian Ngo`}},"leg-press":{id:`leg-press`,name:`Leg Press`,muscles:`Thighs, glutes`,equipment:[`leg-press`],setup:[`Sit back with your lower back flat against the pad.`,`Feet shoulder-width apart, in the middle or slightly high on the platform.`],steps:[`Release the safety handles and lower the platform slowly.`,`Stop when your knees reach about 90°, before your lower back starts to lift off the pad.`,`Push back up through your whole foot, without locking your knees.`],mistakes:[`Going so deep your hips curl up off the seat.`,`Knees caving inward — keep them pointing the same way as your toes.`],stress:{knees:`moderate`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`90NY9tka1TQ`,channel:`Vivian Ngo`}},"barbell-back-squat":{id:`barbell-back-squat`,name:`Barbell Back Squat`,muscles:`Thighs, glutes, core`,equipment:[`squat-rack`],setup:[`Set the bar at upper-chest height.`,`Step under it and rest it across your upper back.`],steps:[`Squat down until your thighs are about parallel to the floor.`,`Drive back up through your feet.`],mistakes:[`Knees caving in.`,`Rounding your back at the bottom.`],stress:{knees:`high`,lowerBack:`high`,neckUpperBack:`moderate`,feet:`moderate`},video:{youtubeId:`8PMjqgR8Wa8`,channel:`Barbell Rehab`}},"goblet-squat":{id:`goblet-squat`,name:`Goblet Squat`,muscles:`Thighs, glutes`,equipment:[`dumbbells`],setup:[`Hold one dumbbell upright against your chest.`,`Feet slightly wider than shoulders, toes turned out a little.`],steps:[`Sit down between your heels, keeping your chest up.`,`Stand back up.`],mistakes:[`Heels lifting off the floor.`,`Knees caving in.`],stress:{knees:`high`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`zsN2WvklwDk`,channel:`Janice Liang`}},"glute-bridge":{id:`glute-bridge`,name:`Dumbbell Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[`dumbbells`,`mat`],setup:[`Lie on your back on a mat, knees bent, feet flat and hip-width apart.`,`Rest a dumbbell across your hips and hold it in place.`],steps:[`Squeeze your glutes and lift your hips until your body is straight from knees to shoulders.`,`Hold for a second, then lower slowly.`],mistakes:[`Arching your lower back at the top — the lift should come from your glutes.`],stress:{},video:{youtubeId:`PSMW7iSi2BU`,channel:`Holly Perkins`}},"dumbbell-romanian-deadlift":{id:`dumbbell-romanian-deadlift`,name:`Dumbbell Romanian Deadlift`,muscles:`Hamstrings, glutes`,equipment:[`dumbbells`],setup:[`Stand holding dumbbells in front of your thighs, knees slightly bent.`],steps:[`Push your hips back and lower the weights along your legs, back flat.`,`Stand back up by squeezing your glutes.`],mistakes:[`Rounding your back.`,`Turning it into a squat by bending your knees a lot.`],stress:{lowerBack:`high`},video:{youtubeId:`dNQucsVf90I`,channel:`Vivian Ngo`}},"seated-leg-curl":{id:`seated-leg-curl`,name:`Leg Curl`,muscles:`Hamstrings`,equipment:[`leg-curl`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit just above your heels.`],steps:[`Bend your knees to pull the pad down and back.`,`Return slowly to almost straight.`],mistakes:[`Letting the weight snap your legs straight.`,`Lifting your hips to cheat the weight.`],stress:{knees:`moderate`},video:{youtubeId:`_2Kd0d-JEUM`,channel:`NASM`}},"hip-abduction":{id:`hip-abduction`,name:`Hip Abduction Machine`,muscles:`Outer glutes`,equipment:[`hip-abduction`],setup:[`Sit with your back against the pad, pads on the outside of your knees.`],steps:[`Push your knees outward.`,`Return slowly without letting the weights touch.`],mistakes:[`Rocking your body to move the weight.`],stress:{},video:{youtubeId:`5O_Y9l__iao`,channel:`Hammer Fitness`}},"leg-extension":{id:`leg-extension`,name:`Leg Extension`,muscles:`Front of thighs`,equipment:[`leg-extension`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit on your lower shins.`],steps:[`Straighten your legs.`,`Lower slowly.`],mistakes:[`Kicking the weight up fast.`],stress:{knees:`high`},video:{youtubeId:`MXvSzXEBOTI`,channel:`Steev`}},"dead-bug":{id:`dead-bug`,name:`Dead Bug`,muscles:`Deep core`,equipment:[`mat`],setup:[`Lie on your back with arms pointing up and knees bent at 90° above your hips.`],steps:[`Press your lower back gently into the mat.`,`Slowly lower one arm and the opposite leg toward the floor, then return. Switch sides.`],mistakes:[`Letting your lower back lift off the mat — make the movement smaller if it does.`],stress:{},video:{youtubeId:`bxn9FBrt4-A`,channel:`NASM`},weightKind:`bodyweight`},"pallof-press":{id:`pallof-press`,name:`Cable Pallof Press`,muscles:`Core, obliques`,equipment:[`cable`],setup:[`Set a cable at chest height with a single handle.`,`Stand side-on to the machine, holding the handle at your chest with both hands.`],steps:[`Press the handle straight out in front of you without letting it pull you sideways.`,`Hold for 2 seconds, bring it back. Do both sides.`],mistakes:[`Twisting toward the machine.`],stress:{},video:{youtubeId:`SY5lRzBPtM4`,channel:`Fitness Lab`}},"cable-crunch":{id:`cable-crunch`,name:`Cable Crunch`,muscles:`Abs`,equipment:[`cable`],setup:[`Set the pulley high with a rope.`,`Kneel facing the machine, rope beside your head.`],steps:[`Crunch down, bringing your elbows toward your knees.`,`Rise back up slowly.`],mistakes:[`Pulling with your arms instead of your abs.`,`Yanking your neck forward.`],stress:{lowerBack:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`0KEP6A1deBE`,channel:`Travis Tarrant`}},"side-plank":{id:`side-plank`,name:`Side Plank`,muscles:`Obliques, core`,equipment:[`mat`],setup:[`Lie on your side, propped up on your forearm, elbow under your shoulder.`],steps:[`Lift your hips so your body is a straight line.`,`Hold for 20–30 seconds. Switch sides.`],mistakes:[`Hips sagging toward the floor.`],stress:{shoulders:`moderate`},video:{youtubeId:`0M-erHBl48U`,channel:`Heal Fit Physio`},weightKind:`bodyweight`,timedSeconds:{min:20,max:30}}},c={"home-dead-bug":{...s[`dead-bug`],id:`home-dead-bug`,name:`Dead Bug (at home)`,equipment:[]},"home-side-plank":{...s[`side-plank`],id:`home-side-plank`,name:`Side Plank (at home)`,equipment:[]},"bird-dog":{id:`bird-dog`,name:`Bird Dog`,muscles:`Deep core, lower back, glutes`,equipment:[],setup:[`Kneel on all fours on a mat, towel, or carpet, with your hands under your shoulders and your knees under your hips.`,`Keep your back flat and your neck long, eyes on the floor.`],steps:[`Tighten your belly and slowly reach one arm forward and the opposite leg straight back.`,`Hold for a second without letting your hips tilt or your back sag.`,`Bring them back with control, then switch sides.`],mistakes:[`Arching your lower back as the leg lifts: only raise it as high as your back stays flat.`,`Rushing and swinging the arm and leg.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`KA0ekfSePrQ`,channel:`Tone and Tighten`},weightKind:`bodyweight`},"forearm-plank":{id:`forearm-plank`,name:`Forearm Plank`,muscles:`Abs, shoulders, glutes`,equipment:[],setup:[`Lie face down, then prop yourself up on your forearms with your elbows right under your shoulders.`,`Tuck your toes and lift your hips so your body makes one straight line.`],steps:[`Squeeze your glutes and brace your abs, as if bracing for a light punch.`,`Breathe steadily and hold. Stop when your form starts to slip.`,`Lower your knees to rest.`],mistakes:[`Letting your hips sag so your lower back arches.`,`Piking your hips up, which takes the work off your abs.`,`Holding your breath or craning your neck up.`],stress:{lowerBack:`moderate`,shoulders:`moderate`},video:{youtubeId:`gSDNblPRh1U`,channel:`Masterpiece Training`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"home-glute-bridge":{id:`home-glute-bridge`,name:`Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[],setup:[`Lie on your back with your knees bent and your feet flat on the floor, hip-width apart.`,`Rest your arms at your sides, palms down.`],steps:[`Press your lower back gently toward the floor, then push through your heels to lift your hips.`,`Stop when your shoulders, hips and knees make a straight line, and squeeze your glutes.`,`Lower slowly.`],mistakes:[`Lifting so high that your lower back arches: the lift should come from your glutes.`,`Pushing through your toes instead of your heels.`],stress:{},video:{youtubeId:`evOnUDkq9f4`,channel:`Girls Gone Strong`},weightKind:`bodyweight`},"bicycle-crunch":{id:`bicycle-crunch`,name:`Bicycle Crunch`,muscles:`Abs, obliques`,equipment:[],setup:[`Lie on your back with your hands lightly behind your head and your knees lifted.`,`Press your lower back gently into the floor.`],steps:[`Bring one elbow toward the opposite knee while you straighten the other leg.`,`Switch sides slowly, like pedaling a bike.`,`Keep your shoulders lifted off the floor the whole time.`],mistakes:[`Pulling on your neck with your hands: keep them light.`,`Going fast, which uses momentum instead of your abs.`,`Letting your lower back arch off the floor.`],stress:{neckUpperBack:`high`,lowerBack:`moderate`},video:{youtubeId:`eqg47ZuGZXQ`,channel:`UCLA Health`},weightKind:`bodyweight`},"mountain-climber":{id:`mountain-climber`,name:`Mountain Climber`,muscles:`Abs, shoulders, hips`,equipment:[],setup:[`Start in a high plank with your hands under your shoulders and your body in one straight line.`],steps:[`Drive one knee toward your chest, then switch legs, like running in place on the floor.`,`Keep your hips level and your core tight. Start slowly and speed up only if your form holds.`],mistakes:[`Hips bouncing up and down.`,`Letting your lower back sag.`,`Shoulders drifting behind your hands.`],stress:{knees:`high`,wrists:`moderate`,shoulders:`moderate`},video:{youtubeId:`gW-q50V6Z_0`,channel:`Born Fitness`},weightKind:`bodyweight`}},l={"chin-tuck":{id:`chin-tuck`,name:`Chin Tuck`,muscles:`Deep neck muscles`,equipment:[],setup:[`Sit or stand tall with your shoulders relaxed and your eyes looking straight ahead.`],steps:[`Slide your head straight back, as if making a double chin. Keep your chin level, not nodding down.`,`Hold for about 3 seconds, then relax.`,`Repeat slowly.`],mistakes:[`Tipping your chin down or up instead of sliding straight back.`,`Shrugging your shoulders or holding your breath.`,`Pushing into pain: go only as far as a gentle stretch.`],stress:{},video:{youtubeId:`h_1-7H0eOfo`,channel:`PhysioExercise`},weightKind:`bodyweight`},"open-book":{id:`open-book`,name:`Open Book`,muscles:`Upper back, chest, shoulders`,equipment:[],setup:[`Lie on your side with your knees bent and stacked, and your arms straight out in front with palms together.`],steps:[`Keeping your knees together, lift the top arm and open it toward the ceiling and behind you, letting your eyes follow your hand.`,`Pause for a breath, then bring it back slowly.`,`Do all your reps, then switch sides.`],mistakes:[`Letting your knees and hips roll back: the turn should come from your upper back.`,`Forcing your arm to the floor: stop where it feels comfortable.`],stress:{},video:{youtubeId:`917w2gqZwZQ`,channel:`Petroski Physio`},weightKind:`bodyweight`},"wall-slide":{id:`wall-slide`,name:`Wall Slide`,muscles:`Upper back, shoulders`,equipment:[],setup:[`Stand with your heels a few inches from a wall and press your head, upper back and hips against it.`,`Bend your elbows and rest your forearms and the backs of your hands on the wall, like a goalpost.`],steps:[`Slowly slide your arms up the wall as far as you can keep contact.`,`Slide them back down with control.`],mistakes:[`Arching your lower back or flaring your ribs to reach higher.`,`Letting your forearms leave the wall: go only as high as you can keep contact.`],stress:{shoulders:`moderate`},video:{youtubeId:`Eaj_NG5_hIo`,channel:`British Elbow & Shoulder Society`},weightKind:`bodyweight`},"cat-cow":{id:`cat-cow`,name:`Cat-Cow`,muscles:`Spine, hips`,equipment:[],setup:[`Get on your hands and knees, with your hands under your shoulders and your knees under your hips.`,`Put a folded towel or mat under your knees if the floor is hard.`],steps:[`Breathe in and let your belly drop as you gently lift your chest and tailbone.`,`Breathe out and round your back toward the ceiling, tucking your chin and tailbone.`,`Move slowly, letting your breath lead.`],mistakes:[`Forcing a bigger arch than feels good.`,`Rushing: let each breath lead the movement.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`xyNwxiuERXc`,channel:`FIT.nl`},weightKind:`bodyweight`},"figure-four-stretch":{id:`figure-four-stretch`,name:`Figure-4 Stretch`,muscles:`Glutes, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat.`,`Cross one ankle over the opposite knee to make a 4.`],steps:[`Keep your head and shoulders relaxed on the floor.`,`For more stretch, hold behind the lower thigh and draw it gently toward your chest.`,`Hold, breathing slowly, then switch sides.`],mistakes:[`Forcing the knee down.`,`Lifting your head or tensing your shoulders.`,`Stretching into sharp pain or tingling down your leg: stop if that happens.`],stress:{},video:{youtubeId:`PiJ_5AXTLOw`,channel:`Rapid Fitness`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"supine-twist":{id:`supine-twist`,name:`Lying Twist`,muscles:`Lower back, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat, arms out to the sides.`],steps:[`Let both knees fall slowly to one side while your shoulders stay on the floor.`,`Hold, breathing slowly, then bring them back and switch sides.`],mistakes:[`Letting the opposite shoulder lift off the floor.`,`Twisting past where it feels good: a pillow under your knees helps.`],stress:{},video:{youtubeId:`mNdJti7ZwKI`,channel:`Vive Health`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}}},u={...s,...c,...l},d={push:{title:`Push — chest, shoulders, triceps`,slots:[{label:`Chest`,options:[`machine-chest-press`,`dumbbell-bench-press`]},{label:`Shoulders`,options:[`machine-shoulder-press`,`seated-dumbbell-shoulder-press`]},{label:`Upper chest`,options:[`incline-dumbbell-press`,`cable-fly`,`pec-deck-fly`]},{label:`Triceps`,options:[`cable-tricep-pushdown`,`overhead-cable-extension`,`assisted-dip`]},{label:`Side shoulders`,options:[`dumbbell-lateral-raise`]},{label:`Chest squeeze`,options:[`pec-deck-fly`,`cable-fly`]}]},pull:{title:`Pull — back, biceps`,slots:[{label:`Upper back`,options:[`lat-pulldown`,`assisted-pullup`]},{label:`Mid back`,options:[`chest-supported-row`,`seated-cable-row`]},{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]},{label:`Biceps`,options:[`dumbbell-curl`,`cable-curl`]},{label:`Second back`,options:[`seated-cable-row`,`assisted-pullup`,`chest-supported-row`]},{label:`Biceps & forearms`,options:[`hammer-curl`,`cable-curl`]}]},legs:{title:`Legs + Abs`,slots:[{label:`Thighs`,options:[`leg-press`,`barbell-back-squat`,`goblet-squat`]},{label:`Glutes`,options:[`glute-bridge`,`dumbbell-romanian-deadlift`]},{label:`Hamstrings`,options:[`seated-leg-curl`,`dumbbell-romanian-deadlift`]},{label:`Core`,options:[`dead-bug`,`pallof-press`]},{label:`Outer glutes`,options:[`hip-abduction`]},{label:`Abs`,options:[`pallof-press`,`side-plank`,`cable-crunch`]},{label:`Front thighs`,options:[`leg-extension`]}]},home:{title:`At-home abs — no equipment`,slots:[{label:`Deep core`,options:[`home-dead-bug`]},{label:`Back side`,options:[`bird-dog`]},{label:`Front core`,options:[`forearm-plank`,`home-dead-bug`]},{label:`Obliques`,options:[`home-side-plank`]},{label:`Hips`,options:[`home-glute-bridge`]},{label:`Lower abs`,options:[`bicycle-crunch`,`forearm-plank`]},{label:`Challenge`,options:[`mountain-climber`,`bicycle-crunch`]}]},mobility:{title:`Mobility reset — neck, upper back, hips`,slots:[{label:`Neck`,options:[`chin-tuck`]},{label:`Upper back`,options:[`open-book`]},{label:`Shoulders`,options:[`wall-slide`]},{label:`Spine`,options:[`cat-cow`,`supine-twist`]},{label:`Hips`,options:[`figure-four-stretch`]},{label:`Lower back`,options:[`supine-twist`,`cat-cow`]}]}},f={chest:{label:`Chest`,day:`push`,slotLabels:[`Chest`,`Upper chest`,`Chest squeeze`],extraSlots:[]},shoulders:{label:`Shoulders`,day:`push`,slotLabels:[`Shoulders`,`Side shoulders`],extraSlots:[{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]}]},triceps:{label:`Triceps`,day:`push`,slotLabels:[`Triceps`],extraSlots:[{label:`More triceps`,options:[`overhead-cable-extension`,`cable-tricep-pushdown`,`assisted-dip`]}]},back:{label:`Back`,day:`pull`,slotLabels:[`Upper back`,`Mid back`,`Second back`],extraSlots:[]},biceps:{label:`Biceps`,day:`pull`,slotLabels:[`Biceps`,`Biceps & forearms`],extraSlots:[{label:`More biceps`,options:[`dumbbell-curl`,`cable-curl`,`hammer-curl`]}]}};function p(e){return Object.keys(f).filter(t=>f[t].day===e)}var m=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],h=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];function g(e,t,n,r=0){let s=i(e),c=a(o(e),7*r),l=new Map;for(let e of n)l.set(i(new Date(e.date)),e.day);return Array.from({length:7},(e,n)=>{let r=a(c,n),o=i(r),u={key:o,date:r,weekdayIndex:n,isToday:o===s},d=l.get(o);if(d)return{...u,status:`done`,workout:d};let f=t[n];return f?o<s?{...u,status:`missed`,workout:f}:{...u,status:`planned`,workout:f}:{...u,status:`rest`,workout:null}})}var _=[`push`,`pull`,`legs`,`home`,`mobility`],v=[`push`,`pull`,`legs`,`home`],y=[`push`,`pull`,`legs`],b={new:4,some:5,experienced:7},x=`Pick a weight where the last 2 reps feel hard but your form stays clean.`,ee={"lean-muscle":{new:{sets:3,repMin:10,repMax:12,restSeconds:90,tip:x},some:{sets:3,repMin:8,repMax:12,restSeconds:90,tip:x},experienced:{sets:4,repMin:8,repMax:12,restSeconds:90,tip:`Take the last set close to failure with good form.`}},strength:{new:{sets:3,repMin:8,repMax:10,restSeconds:120,tip:`Learn the movement before going heavy.`},some:{sets:4,repMin:6,repMax:8,restSeconds:120,tip:x},experienced:{sets:4,repMin:5,repMax:6,restSeconds:150,tip:x}},general:{new:{sets:2,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},some:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},experienced:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Keep rests short.`}}};function S(e){return`${e.sets} sets of ${e.repMin}–${e.repMax} reps, resting about ${e.restSeconds} seconds between sets. ${e.tip}`}function C(e,t){return e.timedSeconds?{...e.timedSeconds,unit:`seconds`}:{min:t.repMin,max:t.repMax,unit:`reps`}}var w={new:{sets:2,repMin:10,repMax:12,restSeconds:45,tip:`Go slowly: quality matters more than speed.`},some:{sets:3,repMin:10,repMax:15,restSeconds:45,tip:`Go slowly and keep your lower back steady.`},experienced:{sets:3,repMin:12,repMax:20,restSeconds:30,tip:`Keep tension in your abs the whole time.`}},T={sets:2,repMin:8,repMax:10,restSeconds:15,tip:`Move slowly and stop short of any pain.`},E=(e,t)=>({text:e,video:t}),D=(e,t)=>({youtubeId:e,channel:t}),O=e=>u[e].video,te=E(`One light set of your first exercise at about half your usual weight.`),ne=E(`Arm circles: 10 forward, then 10 backward.`,D(`4TJv9YmECjc`,`Leap Fitness`)),re=E(`Cross-body arm swings: swing your arms wide open, then hug yourself, 10 times.`,D(`AsMMF3YWIIM`,`Live Lean TV`)),ie=E(`Walking knee hugs: step forward and hug one knee to your chest, then the other, 10 steps in all.`,D(`m9vsPdnG3JQ`,`Total Health Systems`)),ae=E(`Pelvic tilts: on your back with knees bent, gently flatten your lower back to the floor and release, 10 reps.`,D(`n8DU1desCy8`,`Rehab My Patient`)),k=E(`Open books: lie on your side, knees bent, and slowly rotate your top arm open, 8 per side.`,O(`open-book`)),A=E(`Child's pose: sit back on your heels with your arms reaching forward and breathe slowly for 20–30 seconds.`,D(`LEW-CfuMCbw`,`Zion Physical Therapy`)),j={mobility:[E(`Take 5 slow breaths: in through your nose, out through your mouth, shoulders relaxed.`)],home:[E(`Cat-cow on the floor: 10 slow reps, staying in a pain-free range.`,O(`cat-cow`)),ae],push:[ne,re,E(`Wall slides: stand with your back to a wall and slowly slide your arms up and down, 10 reps.`,O(`wall-slide`)),k,te],pull:[ne,E(`Shoulder rolls: 10 slow rolls backward.`,D(`X7NtgY9kCCM`,`Rehab My Patient`)),E(`Cat-cow: on hands and knees, slowly round and arch your back, 10 reps, staying in a pain-free range.`,O(`cat-cow`)),k,te],legs:[E(`Leg swings: hold onto something steady and swing each leg forward and back 10 times, then side to side 10 times.`,D(`difYoBtZi2s`,`PureGym`)),E(`Hip circles: hands on hips, 10 slow circles each way.`,D(`qkrJXGVj_OQ`,`Live to Move Physical Therapy & Wellness`)),ie,E(`Bodyweight glute bridges: 10 slow reps on a mat.`,O(`home-glute-bridge`)),te]},M=E(`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,D(`aIq0fLi8iak`,`React Physical Therapy`)),N={mobility:[E(`Lie on your back with your knees bent and take 5 slow, deep belly breaths.`)],home:[A,E(`Lying twist: on your back, let both knees fall to one side for 20–30 seconds. Each side.`,O(`supine-twist`)),E(`Slow breathing: lie on your back and take 5 slow, deep belly breaths.`)],push:[E(`Doorway chest stretch: forearm on a door frame or post, step through until you feel your chest stretch. Each side.`,D(`069o76BafTk`,`OMPT Specialists`)),M,E(`Overhead triceps stretch: reach one hand down your back and gently press the elbow with the other hand. Each side.`,D(`cPTrm13hSSo`,`PureGym`))],pull:[E(`Lat stretch: hold a post at chest height and sit your hips back until you feel it along your side.`,D(`vuUFADwPkXs`,`Nick Brattain`)),M,E(`Biceps stretch: palm flat on a wall behind you at shoulder height, then turn your body away. Each side.`,D(`BzPzDuIn1PA`,`LIVESTRONG`))],legs:[E(`Lying hamstring stretch: on your back, lift one straight leg and hold behind the thigh. Each side.`,D(`5P3E8Pec_L8`,`PureGym`)),E(`Figure-4 glute stretch: on your back, cross one ankle over the other knee and pull the bottom leg in. Each side.`,O(`figure-four-stretch`)),E(`Lying quad stretch: on your side, hold your top ankle and bring your heel toward you, only as far as is comfortable. Each side.`,D(`uRRwljV-Nlk`,`AskDoctorJo`))]},oe={neckUpperBack:[E(`Gentle neck stretch: tilt one ear toward your shoulder without pulling. Each side.`,D(`-r0eoFS7_5Q`,`AskDoctorJo`))],lowerBack:[E(`Knees to chest: on your back, hug both knees in gently and breathe slowly.`,D(`5R7eWaNWO3U`,`AskDoctorJo`))]},P={neckUpperBack:[E(`Chin tucks: sit tall and gently slide your chin straight back, 10 slow reps.`,O(`chin-tuck`)),k],lowerBack:[E(`Cat-cow on a mat: slowly round and arch your back, 10 reps, staying in a pain-free range.`,O(`cat-cow`))],knees:[E(`Keep the bike seat high enough that your knee is only slightly bent at the bottom.`)]},se={knees:`Go easy on your knees: use a shorter range and stop before any knee pain.`,lowerBack:`Go easy on your lower back: keep it pressed against the pad and lift lighter.`,neckUpperBack:`Go easy on your neck: keep your shoulders down and your head still.`,feet:`Go easy on your feet: keep your whole foot flat and wear supportive shoes.`,shoulders:`Go easy on your shoulders: use a smaller range and lighter weight.`,wrists:`Go easy on your wrists: keep them straight, not bent back.`};function ce(e,t){return e.equipment.every(e=>t.has(e))}function le(e,t){return t.filter(t=>e.stress[t]===`moderate`)}function ue(e,t){return t.some(t=>e.stress[t]===`high`)}function F(e,t,n,r){return e.options.map(e=>u[e]).filter(e=>!r.has(e.id)&&!t.avoidedExerciseIds.includes(e.id)).filter(e=>ce(e,n)).filter(e=>!ue(e,t.protectedAreas)).sort((e,n)=>le(e,t.protectedAreas).length-le(n,t.protectedAreas).length).map(n=>({exercise:n,slot:e,cautionAreas:le(n,t.protectedAreas)}))}function de(e,t,n,r){return F(e.slot,t,new Set(n),new Set([...r,e.exercise.id]))}function fe(e,t,n){if(e===`mobility`)return j.mobility;if(e===`home`){let e=t.protectedAreas.includes(`neckUpperBack`)?P.neckUpperBack??[]:[];return[E(`2 minutes of marching in place to warm up.`),...e,...j.home]}let r=[E(n?`2 minutes on the stationary bike at an easy pace, just to get warm.`:`2 minutes of brisk walking, just to get warm.`),...t.protectedAreas.flatMap(e=>P[e]??[]),...j[e]];return r.filter((e,t)=>!e.video||r.findIndex(t=>t.video?.youtubeId===e.video?.youtubeId)===t)}function pe(e,t){return e===`home`?w[t.experience]:e===`mobility`?T:ee[t.goal][t.experience]}function me(e,t){return e===`mobility`?N.mobility:[...N[e],...t.protectedAreas.flatMap(e=>oe[e]??[])]}var he={push:`Push`,pull:`Pull`};function ge(e,t){let n=d[e],r=t?f[t]:null;if(!r||r.day!==e)return n.slots;let i=n.slots.filter(e=>r.slotLabels.includes(e.label)),a=n.slots.filter(e=>!r.slotLabels.includes(e.label));return[...i,...r.extraSlots,...a]}function _e(e,t,n,r=null){let i=new Set(n),a=d[e],o=e===`mobility`?a.slots.length:b[t.experience],s=ge(e,r).slice(0,o),c=new Set,l=[];for(let e of s){let[n]=F(e,t,i,c);n&&(c.add(n.exercise.id),l.push(n))}let u=fe(e,t,i.has(`bike`)),p=me(e,t);return{day:e,title:r&&f[r].day===e?`${he[e]} — ${f[r].label.toLowerCase()} focus`:a.title,prescription:pe(e,t),warmUp:u,exercises:l,coolDown:p}}var I={push:`Push`,pull:`Pull`,legs:`Legs + Abs`,home:`At-home abs`,mobility:`Mobility reset`},ve={push:`Push`,pull:`Pull`,legs:`Legs`,home:`Home`,mobility:`Reset`};function ye(e,t,n){return`<h2 class="icon-title tone-${t}" data-icon="${e}">${n}</h2>`}function be(e){return I[e]}function xe(e,t,n=_){return`<nav class="day-tabs" aria-label="${t}">${n.map(t=>`
      <button type="button" class="day-tab${t===e?` active`:``}" data-day="${t}" aria-pressed="${t===e}">
        ${I[t]}
      </button>`).join(``)}</nav>`}function Se(e){return`https://www.youtube.com/watch?v=${e}`}function Ce(e,t=``){return`<ul class="${t}">${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function we(e,t=``){return`<ul class="${t}">${e.map(({text:e,video:t})=>{let n=e.split(`:`)[0];return`<li>${e}${t?` <a class="watch-link" href="${Se(t.youtubeId)}" target="_blank" rel="noopener noreferrer" aria-label="Watch a demo of ${L(n)}, by ${L(t.channel)}">Watch ↗</a>`:``}</li>`}).join(``)}</ul>`}function Te(e){return e.cautionAreas.map(e=>`<p class="caution">${se[e]}</p>`).join(``)}function Ee(e){let{exercise:t}=e,n=e=>`<ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol>`;return`
    <h3>Set up</h3>
    ${n(t.setup)}
    <h3>How to do it</h3>
    ${n(t.steps)}
    <h3>Avoid</h3>
    ${Ce(t.mistakes,`mistakes`)}
    <a class="demo-link" href="${Se(t.video.youtubeId)}" target="_blank" rel="noopener noreferrer">
      Watch the demo video ↗<small>by ${t.video.channel}</small>
    </a>
  `}function L(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function De(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}var Oe=`https://ashnasahni.github.io/gym-guide/`,ke={time:`18:00`,minutes:60},Ae=[30,45,60,90,120],je=[`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`];function R(e){return/^([01]\d|2[0-3]):[0-5]\d$/.test(e)}function Me(e){return{time:e?.time!==void 0&&R(e.time)?e.time:ke.time,minutes:e?.minutes!==void 0&&Ae.includes(e.minutes)?e.minutes:ke.minutes}}function z(e){return String(e).padStart(2,`0`)}function Ne(e){return`${`${e.getFullYear()}${z(e.getMonth()+1)}${z(e.getDate())}`}T${z(e.getHours())}${z(e.getMinutes())}00`}function Pe(e){return`${`${e.getUTCFullYear()}${z(e.getUTCMonth()+1)}${z(e.getUTCDate())}`}T${z(e.getUTCHours())}${z(e.getUTCMinutes())}${z(e.getUTCSeconds())}Z`}function B(e){return e.replace(/\\/g,`\\\\`).replace(/;/g,`\\;`).replace(/,/g,`\\,`).replace(/\r?\n/g,`\\n`)}function Fe(e){let t=new TextEncoder,n=[],r=``,i=0,a=75;for(let o of e){let e=t.encode(o).length;i+e>a&&(n.push(r),r=``,i=0,a=74),r+=o,i+=e}return n.push(r),n.join(`\r
 `)}function Ie(e){return y.includes(e)?`${I[e]} day`:I[e]}function Le(e){let[t,n]=e.split(`:`).map(Number);return`${t%12==0?12:t%12}:${String(n).padStart(2,`0`)} ${t<12?`AM`:`PM`}`}function Re(e,t){return e.flatMap((e,n)=>e?[`${Ie(e)} on ${h[n]} at ${Le(t.time)}`]:[])}function ze(e,t,n){let[r,i]=n.split(`:`).map(Number),o=a(e,(t-(e.getDay()+6)%7+7)%7);return o.setHours(r,i,0,0),o<=e?a(o,7):o}function Be(e,t,n){return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Gym Guide//Weekly plan//EN`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`X-WR-CALNAME:Gym Guide`,...e.flatMap((e,r)=>{if(!e)return[];let i=ze(n,r,t.time),a=new Date(i.getTime()+t.minutes*6e4);return[`BEGIN:VEVENT`,`UID:gym-guide-${r}@ashnasahni.github.io`,`DTSTAMP:${Pe(n)}`,`DTSTART:${Ne(i)}`,`DTEND:${Ne(a)}`,`RRULE:FREQ=WEEKLY;BYDAY=${je[r]}`,`SUMMARY:${B(Ie(e))}`,`DESCRIPTION:${B(`${d[e].title}\nOpen Gym Guide: ${Oe}`)}`,`END:VEVENT`]}),`END:VCALENDAR`].map(Fe).join(`\r
`)+`\r
`}var Ve=`20:30`,He=`Log your food in Gym Guide`,Ue=10;function We(e){return typeof e==`string`&&R(e)?e:Ve}function Ge(e){return`Every day at ${Le(e)}`}function Ke(e,t){let[n,r]=e.split(`:`).map(Number),i=new Date(t);i.setHours(n,r,0,0),i<=t&&(i=a(i,1));let o=new Date(i.getTime()+Ue*6e4);return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Gym Guide//Food reminder//EN`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`X-WR-CALNAME:Gym Guide`,`BEGIN:VEVENT`,`UID:gym-guide-food-reminder@ashnasahni.github.io`,`DTSTAMP:${Pe(t)}`,`DTSTART:${Ne(i)}`,`DTEND:${Ne(o)}`,`RRULE:FREQ=DAILY`,`SUMMARY:${B(He)}`,`DESCRIPTION:${B(`Open Gym Guide and fill in today's water, protein and calories: ${Oe}`)}`,`BEGIN:VALARM`,`ACTION:DISPLAY`,`TRIGGER:PT0S`,`DESCRIPTION:${B(He)}`,`END:VALARM`,`END:VEVENT`,`END:VCALENDAR`].map(Fe).join(`\r
`)+`\r
`}var qe=[{id:`dumbbells`,name:`Dumbbells`,hint:`Rack of free weights`},{id:`bench`,name:`Adjustable bench`,hint:`Flat or tilted bench`},{id:`mat`,name:`Floor mat`,hint:`Stretching / ab area`},{id:`cable`,name:`Cable machine`,hint:`Pulley tower with handles`},{id:`lat-pulldown`,name:`Lat pulldown`,hint:`Seated, pull a bar down`},{id:`seated-row`,name:`Seated cable row`,hint:`Seated, pull a handle in`},{id:`chest-press`,name:`Chest press machine`,hint:`Seated, push handles forward`},{id:`shoulder-press`,name:`Shoulder press machine`,hint:`Seated, push handles up`},{id:`pec-deck`,name:`Pec deck / rear delt fly`,hint:`Seated, arms swing together`},{id:`assisted-pullup`,name:`Assisted pull-up / dip`,hint:`Kneel on a pad that helps lift you`},{id:`leg-press`,name:`Leg press`,hint:`Seated, push a platform with your feet`},{id:`leg-curl`,name:`Leg curl machine`,hint:`Bend knees against a pad`},{id:`leg-extension`,name:`Leg extension machine`,hint:`Straighten knees against a pad`},{id:`hip-abduction`,name:`Hip abduction machine`,hint:`Seated, push knees outward`},{id:`squat-rack`,name:`Squat rack + barbell`,hint:`Barbell resting on hooks`},{id:`bike`,name:`Stationary bike`,hint:`For warm-ups`}],Je=qe.map(e=>e.id),Ye=[{title:`Free weights and floor`,ids:[`dumbbells`,`bench`,`mat`,`squat-rack`]},{title:`Upper body`,ids:[`cable`,`lat-pulldown`,`seated-row`,`chest-press`,`shoulder-press`,`pec-deck`,`assisted-pullup`]},{title:`Lower body`,ids:[`leg-press`,`leg-curl`,`leg-extension`,`hip-abduction`]},{title:`Warm-up`,ids:[`bike`]}];function Xe(e){return e.replace(/\s+/g,` `).trim().slice(0,120)}function Ze(e,t,n=!1){let r=`
      <div class="machine-note-row">
        <input id="note-${e}" type="text" maxlength="120" data-field="machine-note"
          data-exercise="${e}" value="${L(t)}" placeholder="Seat 4, pin at 60" autocomplete="off" />
        <button type="button" class="secondary" data-action="save-note" data-exercise="${e}">Save</button>
      </div>`;return n?`
    <details class="machine-note folded">
      <summary><span>My machine settings</span>${t?`<span class="hint">${L(t)}</span>`:``}</summary>${r}
    </details>`:`
    <div class="machine-note">
      <label for="note-${e}">My machine settings</label>${r}
    </div>`}var Qe={easyWeeks:[],dismissedWeek:null},$e=6048e5;function et(e){return i(o(e))}function tt(e){return o(new Date(e.getTime()-$e+432e5))}function nt(e,t){return e.easyWeeks.includes(et(t))}function rt(e,t,n){let r=new Map;for(let t of e){let e=et(new Date(t.date));r.set(e,(r.get(e)??0)+1)}let a=o(t);if(n.includes(i(a)))return 0;let s=0;for((r.get(i(a))??0)>=2&&(s+=1);;){a=tt(a);let e=i(a);if(n.includes(e)||(r.get(e)??0)<2)return s;s+=1}}function it(e,t,n){return nt(n,t)||n.dismissedWeek===et(t)?!1:rt(e,t,n.easyWeeks)>=6}function at(e,t){let n=et(t);return{...e,easyWeeks:e.easyWeeks.includes(n)?e.easyWeeks:[...e.easyWeeks,n]}}function ot(e,t){let n=et(t);return{...e,easyWeeks:e.easyWeeks.filter(e=>e!==n)}}function st(e,t){return{...e,dismissedWeek:et(t)}}var ct={waterGoal:8,proteinGoal:null,calorieGoal:null,days:{}},lt=6e3,ut=lt,dt=[{name:`2 eggs`,grams:12},{name:`Chicken breast (palm-size)`,grams:30},{name:`Greek yogurt (1 cup)`,grams:20},{name:`Protein shake (1 scoop)`,grams:25},{name:`Paneer (100 g)`,grams:18},{name:`Tofu (half block)`,grams:20},{name:`Dal / lentils (1 cup)`,grams:18},{name:`Milk (1 glass)`,grams:8}],ft=[{name:`2 eggs`,kcal:140},{name:`Roti (1)`,kcal:100},{name:`Rice (1 cup cooked)`,kcal:205},{name:`Dal / lentils (1 cup)`,kcal:230},{name:`Banana`,kcal:105},{name:`Greek yogurt (1 cup)`,kcal:130},{name:`Paneer (100 g)`,kcal:265},{name:`Chicken breast (palm-size)`,kcal:165},{name:`Protein shake (1 scoop)`,kcal:120},{name:`Peanut butter (2 tbsp)`,kcal:190},{name:`Oats (1 cup cooked)`,kcal:150},{name:`Milk (1 glass)`,kcal:150}];function V(e,t){let n=e.days[t]??{};return{glasses:n.glasses??0,protein:n.protein??[],calories:n.calories??[]}}function pt(e,t,n){return{...e,days:{...e.days,[t]:n}}}function mt(e,t,n){let r=V(e,t);return pt(e,t,{...r,glasses:Math.max(0,r.glasses+n)})}function ht(e,t,n){let r=V(e,t);return pt(e,t,{...r,protein:[...r.protein,n]})}function gt(e,t,n){let r=V(e,t);return pt(e,t,{...r,protein:r.protein.filter((e,t)=>t!==n)})}function _t(e,t,n){let r=V(e,t);return pt(e,t,{...r,calories:[...r.calories,n]})}function vt(e,t,n){let r=V(e,t);return pt(e,t,{...r,calories:r.calories.filter((e,t)=>t!==n)})}function yt(e){return e.calories.reduce((e,t)=>e+t.kcal,0)}function bt(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isInteger(n)||n<=0||n>6e3?`Enter the calories as a whole number, between 1 and ${ut}.`:null}function xt(e){let t=Number(e);return e.trim()===``||!Number.isInteger(t)||t<500||t>6e3?`Enter a calorie goal as a whole number, between 500 and ${lt}.`:null}function St(e){return e.protein.reduce((e,t)=>e+t.grams,0)}function Ct(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isFinite(n)||n<=0||n>300?`Enter the protein in grams, between 1 and 300.`:null}var wt=[{id:`lean-muscle`,label:`Build lean muscle`,detail:`Gain muscle for a toned look`},{id:`strength`,label:`Get stronger`,detail:`Lift heavier, fewer reps`},{id:`general`,label:`General fitness`,detail:`Lighter, steady routine`}],Tt=[{id:`new`,label:`New to lifting`},{id:`some`,label:`Some experience`},{id:`experienced`,label:`Experienced`}],Et=[{id:`knees`,label:`Knees`},{id:`lowerBack`,label:`Lower back`},{id:`neckUpperBack`,label:`Neck / upper back`},{id:`feet`,label:`Feet / ankles`},{id:`shoulders`,label:`Shoulders`},{id:`wrists`,label:`Wrists`}],H={goal:`lean-muscle`,experience:`new`,protectedAreas:[],avoidedExerciseIds:[],weekPlan:[`push`,null,`pull`,null,`legs`,null,null],focusPlan:[null,null,null,null,null,null,null]};function Dt(e){let t=[null,null,null,null,null,null,null];return[...e].filter(e=>Number.isInteger(e)&&e>=0&&e<=6).sort((e,t)=>e-t).forEach((e,n)=>{t[e]=y[n%y.length]}),t}function Ot(e){let{gymDays:t,...n}=e,r={...H,...n};if(!n.weekPlan&&Array.isArray(t)){let e=Dt(t);e.some(Boolean)&&(r.weekPlan=e)}return r}function kt(e){let t=wt.find(t=>t.id===e.goal)?.label.toLowerCase()??`general fitness`,n=e.weekPlan.filter(Boolean).length,r=[t,`${n} ${n===1?`day`:`days`} a week`],i=Et.filter(t=>e.protectedAreas.includes(t.id)).map(e=>e.label.toLowerCase());return i.length>0&&r.push(`protecting ${i.join(`, `)}`),`Planned for: ${r.join(` · `)}`}function At(e,t){let n=Array.isArray(e)?e:[];return t.map((e,t)=>{let r=n[t];return typeof r==`string`&&r in f&&f[r].day===e?r:null})}var jt=[`lb`,`kg`],Mt=2.2046226218;function U(e,t){return t===`kg`?Math.round(e/Mt*2)/2:e}function Nt(e,t){return t===`kg`?Math.round(e*Mt*100)/100:e}function W(e){return Number.isInteger(e)?String(e):e.toFixed(1)}function Pt(e,t){return`${W(U(e,t))} ${t}`}function Ft(e){return e===`kg`?2.5:5}function It(e){return e===`kg`?`kilograms`:`pounds`}var Lt=`gymGuide.v1`;function Rt(){return{profile:null,equipmentIds:[...Je],equipmentConfirmed:!1,history:{},session:null,nutrition:ct,workoutLog:[],calendar:ke,foodReminderTime:Ve,recovery:[],lastBackupAt:null,backupNudgeDismissedAt:null,weightUnit:`lb`,deload:{...Qe,easyWeeks:[]},machineNotes:{}}}var zt=5e3,Bt=50,Vt=60,Ht=/^[A-Za-z0-9][A-Za-z0-9_-]{0,59}$/,Ut=/^\d{4}-\d{2}-\d{2}$/;function G(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Wt(e){return typeof e==`string`&&Ht.test(e)}function K(e,t,n){return typeof e==`number`&&Number.isFinite(e)&&e>=t&&e<=n}function Gt(e,t,n){return K(e,t,n)&&Number.isInteger(e)}function Kt(e){return typeof e==`string`&&e.length<=40&&!Number.isNaN(Date.parse(e))}function qt(e){return typeof e==`string`&&Ut.test(e)&&!Number.isNaN(Date.parse(e))}function q(e){return Array.isArray(e)?e.slice(0,zt):[]}function Jt(e){if(!G(e))return null;let t=e.weight===null?null:K(e.weight,0,1e3)?e.weight:void 0;return t===void 0||!K(e.amount,0,1e4)?null:{weight:t,amount:e.amount}}function Yt(e){let t={};if(!G(e))return t;for(let[n,r]of Object.entries(e)){if(!Wt(n)||typeof r!=`string`)continue;let e=Xe(r);e&&(t[n]=e)}return t}function Xt(e){let t={};if(!G(e))return t;for(let[n,r]of Object.entries(e)){if(!Wt(n))continue;let e=[];for(let t of q(r)){if(!G(t)||!Kt(t.date))continue;let n=q(t.sets).slice(0,Bt).map(Jt).filter(e=>e!==null);e.push({date:t.date,sets:n})}e.length>0&&(t[n]=e)}return t}function Zt(e){let t=_;return q(e).flatMap(e=>G(e)&&Kt(e.date)&&typeof e.day==`string`&&t.includes(e.day)?[{date:e.date,day:e.day}]:[])}function Qt(e){return q(e).flatMap(e=>{if(!G(e)||!qt(e.date)||!Gt(e.feel,1,5))return[];let t=e.hours===null?null:K(e.hours,0,24)?e.hours:null,n=e.readiness===null?null:K(e.readiness,0,100)?e.readiness:null;return[{date:e.date,feel:e.feel,hours:t,readiness:n}]})}function $t(e){if(typeof e!=`string`)return null;let t=e.trim().slice(0,Vt);return t===``?null:t}function en(e){let t=G(e)?e:{},n=q(t.protein).flatMap(e=>{let t=G(e)?$t(e.name):null;return G(e)&&t&&K(e.grams,0,300)?[{name:t,grams:e.grams}]:[]}),r=q(t.calories).flatMap(e=>{let t=G(e)?$t(e.name):null;return G(e)&&t&&K(e.kcal,0,6e3)?[{name:t,kcal:e.kcal}]:[]});return{glasses:Gt(t.glasses,0,100)?t.glasses:0,protein:n,calories:r}}function tn(e){let t=G(e)?e:{},n={};if(G(t.days))for(let[e,r]of Object.entries(t.days))qt(e)&&(n[e]=en(r));return{waterGoal:Gt(t.waterGoal,1,20)?t.waterGoal:ct.waterGoal,proteinGoal:Gt(t.proteinGoal,1,400)?t.proteinGoal:null,calorieGoal:Gt(t.calorieGoal,500,6e3)?t.calorieGoal:null,days:n}}function nn(e){let t=_;return!Array.isArray(e)||e.length!==7?[...H.weekPlan]:e.map(e=>typeof e==`string`&&t.includes(e)?e:null)}function rn(e){if(!G(e))return null;let t=Ot(e),n=nn(t.weekPlan),r=wt.map(e=>e.id),i=Tt.map(e=>e.id),a=Et.map(e=>e.id);return{goal:r.includes(t.goal)?t.goal:H.goal,experience:i.includes(t.experience)?t.experience:H.experience,protectedAreas:q(t.protectedAreas).filter(e=>typeof e==`string`&&a.includes(e)),avoidedExerciseIds:q(t.avoidedExerciseIds).filter(Wt),weekPlan:n,focusPlan:At(t.focusPlan,n)}}function an(e){let t=G(e)?e:{};return{easyWeeks:q(t.easyWeeks).filter(qt).slice(-200),dismissedWeek:qt(t.dismissedWeek)?t.dismissedWeek:null}}function on(e,t={}){let n=Rt();if(!G(e))return n;let r=e;return{profile:rn(r.profile),equipmentIds:Array.isArray(r.equipmentIds)&&r.equipmentIds.every(e=>typeof e==`string`)?q(r.equipmentIds).filter(Wt):n.equipmentIds,equipmentConfirmed:r.equipmentConfirmed===!0,history:Xt(r.history),session:t.keepSession&&G(r.session)?r.session:null,nutrition:tn(r.nutrition),workoutLog:Zt(r.workoutLog),calendar:Me(G(r.calendar)?r.calendar:void 0),foodReminderTime:We(r.foodReminderTime),recovery:Qt(r.recovery),lastBackupAt:Kt(r.lastBackupAt)?r.lastBackupAt:null,backupNudgeDismissedAt:Kt(r.backupNudgeDismissedAt)?r.backupNudgeDismissedAt:null,weightUnit:jt.find(e=>e===r.weightUnit)??n.weightUnit,deload:an(r.deload),machineNotes:Yt(r.machineNotes)}}function sn(){try{let e=localStorage.getItem(Lt);return e?on(JSON.parse(e),{keepSession:!0}):Rt()}catch{return Rt()}}var cn=!1,ln=null;function un(){return cn}function dn(e){ln=e}function J(e){let t=!0;try{localStorage.setItem(Lt,JSON.stringify(e))}catch{t=!1}return cn===t&&(cn=!t,ln?.()),t}var fn=`gym-guide`,pn=1;function mn(e,t){let n={app:fn,format:pn,savedAt:t.toISOString(),state:{...e,session:null}};return{fileName:`gym-guide-backup-${i(t)}.json`,text:JSON.stringify(n,null,2)}}function hn(e){if(e.length>5e6)return{ok:!1,error:`That file is too big to be a Gym Guide backup.`};let t;try{t=JSON.parse(e)}catch{return{ok:!1,error:`That file isn't a Gym Guide backup. Pick the .json file you saved from this app.`}}let n=t;if(typeof n!=`object`||!n||n.app!==fn||typeof n.state!=`object`||n.state===null)return{ok:!1,error:`That file isn't a Gym Guide backup. Pick the .json file you saved from this app.`};if(n.format!==pn)return{ok:!1,error:`That backup is from a different version of the app, so it can't be restored here.`};let r=on(n.state);return{ok:!0,state:r,summary:{workouts:r.workoutLog.length,savedAt:typeof n.savedAt==`string`?n.savedAt:null}}}function gn(e){return new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function _n(e,t,n){let r=e?`Last backup: ${gn(e)}.`:`You haven't made a backup yet.`,i=``;if(t.kind===`error`)i=`<p class="form-error" role="alert">${L(t.message)}</p>`;else if(t.kind===`confirm`){let{workouts:e,savedAt:n}=t.summary;i=`
      <p class="notice">This backup ${n?`from ${gn(n)} `:``}has ${e} finished ${e===1?`workout`:`workouts`}. Restoring replaces everything on this phone right now.</p>
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
    </section>`}var vn=0;function yn(e,t){if(!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e);n.rate=1;let r=++vn;n.onstart=()=>t?.onStart();let i=()=>{r===vn&&t?.onEnd()};n.onend=i,n.onerror=i,window.speechSynthesis.speak(n)}function bn(e,t,n){let r=URL.createObjectURL(new Blob([n],{type:t})),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e4)}function xn(e){`vibrate`in navigator&&navigator.vibrate(e)}var Sn=null,Cn=!1;async function wn(){if(`wakeLock`in navigator&&document.visibilityState===`visible`)try{Sn=await navigator.wakeLock.request(`screen`)}catch{Sn=null}}document.addEventListener(`visibilitychange`,()=>{Cn&&document.visibilityState===`visible`&&wn()});function Tn(e){Cn=e,e?wn():(Sn?.release(),Sn=null)}function En(e){let{state:t}=e,n={kind:`none`},r=null;function i(){let n=new Date;t.lastBackupAt=n.toISOString();let{fileName:r,text:i}=mn(t,n);J(t),bn(r,`application/json`,i),e.render(),e.showToast(`Backup saved. Keep the file somewhere safe.`)}function a(t){let i=new FileReader;i.onload=()=>{let t=hn(String(i.result??``));t.ok?(r={state:t.state,summary:t.summary},n={kind:`confirm`,summary:t.summary}):(r=null,n={kind:`error`,message:t.error}),e.render()},i.onerror=()=>{n={kind:`error`,message:`Couldn't read that file. Try picking it again.`},e.render()},i.readAsText(t)}function o(){if(!r)return;e.music.stop(),Object.assign(t,r.state),r=null,n={kind:`none`},e.resetCalendarSelection();let i=J(t);e.go(t.profile&&t.equipmentConfirmed?`today`:`profile`),e.showToast(i?`Backup restored.`:`Restored, but couldn't save on this device — changes last until you close the page.`)}return{card:e=>_n(t.lastBackupAt,n,e),handleAction(t){if(t===`save-backup`)i();else if(t===`choose-backup`)n={kind:`none`},e.root.querySelector(`input[data-field="restore-file"]`)?.click();else if(t===`cancel-restore`)r=null,n={kind:`none`},e.render();else if(t===`confirm-restore`)o();else return!1;return!0},handleFileChosen:a}}function Dn(e){return`
    <details class="card switcher food-reminder">
      <summary>Remind me to log my food</summary>
      <p class="hint">Adds a daily event to your phone's calendar, with an alert, so your phone reminds you. Pick a time, tap the button, then open the file it downloads and add it.</p>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Time</span>
          <input type="time" data-field="food-reminder-time" value="${e}" />
        </label>
      </div>
      <button type="button" class="secondary" data-action="add-food-reminder">Add daily reminder</button>
      <p class="notice" role="status" data-reminder-status hidden></p>
      <p class="hint small">It repeats every day until you delete it from your calendar. How it alerts you depends on your calendar app's notification settings.</p>
    </details>`}function On(e){let{root:t,state:n}=e;function r(e){n.foodReminderTime=e,J(n)}function i(){let n=t.querySelector(`input[data-field="food-reminder-time"]`)?.value??``;if(!R(n)){e.showToast(`Pick a time first.`);return}r(n),bn(`gym-guide-food-reminder.ics`,`text/calendar;charset=utf-8`,Ke(n,new Date));let i=t.querySelector(`[data-reminder-status]`);i&&(i.textContent=`✓ File downloaded. Open it (from your downloads or the browser's download bar) and add it in your calendar app. ${Ge(n)}.`,i.hidden=!1)}return{handleChange(e){e.dataset.field===`food-reminder-time`&&R(e.value)&&r(e.value)},handleAction(e){return e===`add-food-reminder`&&(i(),!0)}}}var kn=`<div class="hold-timer" data-hold-slot></div>`;function An(e){return e===null?`<button type="button" class="secondary" data-action="hold-toggle">Time a 30-second hold</button>`:`
    <button type="button" class="secondary" data-action="hold-toggle">Stop</button>
    <span class="hold-clock" data-hold-clock aria-label="${e} seconds left">${De(e)}</span>`}var jn=250;function Mn(e){let t=null,n;function r(){return t===null?null:Math.max(0,Math.ceil((t-Date.now())/1e3))}function i(){for(let t of e.root.querySelectorAll(`[data-hold-slot]`))t.innerHTML=An(r())}function a(){window.clearInterval(n),t=null}function o(){let t=e.root.querySelector(`[data-hold-clock]`);if(!t){a();return}let n=r()??0;if(n>0){t.textContent=De(n);return}a(),yn(`Time.`),xn([200,100,200]),i(),e.showToast(`Time! Switch sides or move on.`)}return{fill:i,handleAction(r){return r===`hold-toggle`&&(t===null?(t=Date.now()+3e4,n=window.setInterval(o,jn)):a(),i(),e.root.querySelector(`[data-action="hold-toggle"]`)?.focus(),!0)}}}function Nn(){return typeof window.matchMedia==`function`&&window.matchMedia(`(display-mode: standalone)`).matches||navigator.standalone===!0}function Pn(e){return e?``:`
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
    </section>`}function Fn(e,t){let n=e[t];return n?.[n.length-1]}function Y(e,t,n=`lb`){let r=e.sets.map(e=>e.amount).join(`, `),i=e.sets[e.sets.length-1]?.weight,a=t===`seconds`?` sec`:` reps`;return i==null?`${r}${a}`:`${Pt(i,n)} × ${r}${a}`}function In(e,t,n,r={}){if(!e||e.sets.length===0)return{weight:null,message:n===`bodyweight`?`First time: aim for ${t.min}–${t.max} ${t.unit}.`:`First time: start light. Find a weight where the last 2 reps feel hard but your form stays clean.`};let i=e.sets.every(e=>e.amount>=t.max),a=e.sets.reduce((e,t)=>e+t.amount,0)/e.sets.length<t.min-2,o=e.sets[e.sets.length-1].weight;if(n===`bodyweight`||o===null)return{weight:null,message:i?`You hit ${t.max} on every set. Try a couple more ${t.unit} each set.`:`Aim for ${t.max} ${t.unit} on every set.`};let s=r.weightUnit??`lb`,c=U(o,s),l=Ft(s),u=e=>`${W(e)} ${s}`,d=n===`assist`?Math.max(0,c-l):c+l,f=n===`assist`?c+l:Math.max(0,c-l),p=Nt(d,s),m=Nt(f,s);return i?r.holdWeight?{weight:o,message:`Easy day: stay at ${u(c)} and keep the reps smooth.`}:{weight:p,message:n===`assist`?`You hit ${t.max} reps every set. Try ${u(d)} of help (a little less).`:`You hit ${t.max} reps every set. Try ${u(d)}.`}:a?{weight:m,message:`That was heavy. Try ${u(f)} and aim for ${t.min}–${t.max} reps.`}:{weight:o,message:`Stay at ${u(c)} and aim for ${t.max} reps on every set.`}}function Ln(e,t,n,r){let i=e[t]??[],a=i[i.length-1],o=a&&a.date===n?[...i.slice(0,-1),{...a,sets:[...a.sets,r]}]:[...i,{date:n,sets:[r]}];return{...e,[t]:o}}function Rn(e,t,n,r,i){let a=(e[t]??[]).map(e=>e.date===n&&r>=0&&r<e.sets.length?{...e,sets:e.sets.map((e,t)=>t===r?i:e)}:e);return{...e,[t]:a}}function zn(e){let t=new Map;for(let[n,r]of Object.entries(e))for(let e of r){if(e.sets.length===0)continue;let r=t.get(e.date)??{date:e.date,entries:[]};r.entries.push({exerciseId:n,session:e}),t.set(e.date,r)}return[...t.values()].sort((e,t)=>t.date.localeCompare(e.date))}function Bn(e,t){let n=o(t);return zn(e).filter(e=>new Date(e.date)>=n).length}function Vn(e,t){return e.filter(e=>e.sets.length>0).map(e=>{if(t===`bodyweight`)return Math.max(...e.sets.map(e=>e.amount));let n=e.sets.map(e=>e.weight??0);return t===`assist`?Math.min(...n):Math.max(...n)})}function Hn(e,t){let n=o(t),r=0;for(let t of Object.values(e))for(let e of t)new Date(e.date)>=n&&(r+=e.sets.length);return r}function Un(e,t,n){let r=[];for(let[i,a]of Object.entries(e)){let e=n(i),o=a.filter(e=>e.sets.length>0);if(e===null||o.length<2||o[o.length-1].date<t)continue;let s=Vn(o,e),c=s[s.length-1],l=s.slice(0,-1),u=e===`assist`?Math.min(...l):Math.max(...l);(e===`assist`?c<u:c>u)&&r.push({exerciseId:i,value:c,previous:u})}return r}var Wn={1:`Wrecked`,2:`Tired`,3:`Okay`,4:`Good`,5:`Great`},Gn=[1,2,3,4,5],Kn=2,qn=70,Jn=6,Yn=4,Xn=85,Zn=7;function Qn(e){return e.feel<=Kn||e.readiness!==null&&e.readiness<qn||e.hours!==null&&e.hours<Jn?`easy`:e.feel>=Yn&&(e.readiness===null||e.readiness>=Xn)&&(e.hours===null||e.hours>=Zn)?`push`:`normal`}function $n(e){return e===`easy`?`Take it easy today. If you work out, the workout drops a set from each exercise and keeps your weights where they were. Resting is fine too.`:e===`push`?`You're well recovered, so it's a good day to aim for the top of your rep range. Keep your form clean.`:`A normal day: train as planned.`}function er(e,t){return t===`easy`?{...e,sets:Math.max(1,e.sets-1)}:e}function tr(e){let t=[`Felt ${Wn[e.feel].toLowerCase()} (${e.feel}/5)`];return e.hours!==null&&t.push(`slept ${e.hours} h`),e.readiness!==null&&t.push(`readiness ${e.readiness}`),t.join(` · `)}function nr(e,t){return e.find(e=>e.date===t)}function rr(e,t){return[...e.filter(e=>e.date!==t.date),t].sort((e,t)=>e.date.localeCompare(t.date)).slice(-180)}function ir(e,t,n){if(e===null||!Gn.includes(e))return{ok:!1,error:`Tap a number for how rested you feel.`};let r=null;if(t.trim()!==``&&(r=Number(t),!Number.isFinite(r)||r<0||r>24))return{ok:!1,error:`Hours slept should be a number between 0 and 24, or leave it blank.`};let i=null;return n.trim()!==``&&(i=Number(n),!Number.isInteger(i)||i<0||i>100)?{ok:!1,error:`Readiness should be a whole number from 0 to 100, or leave it blank.`}:{ok:!0,feel:e,hours:r,readiness:i}}var ar=10;function or(e){let t=u[e];return t?t.weightKind??`load`:null}function sr(e){return Object.keys(d).find(t=>d[t].slots.some(t=>t.options.includes(e)))??null}function cr(e){return e.timedSeconds?`seconds`:`reps`}function lr(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function ur(e,t,n){return(e.weightKind??`load`)===`bodyweight`?t:U(t,n)}function dr(e,t,n){let r=e.weightKind??`load`;return r===`bodyweight`?`${t} ${e.timedSeconds?`sec`:`reps`}`:r===`assist`?`${W(t)} ${n} of help`:`${W(t)} ${n}`}function fr(e,t,n){let r=Un(e,o(t).toISOString(),or).filter(({exerciseId:e})=>u[e]);return r.length===0?``:`
    <section class="card highlights-card">
      <h2>🏆 New personal bests this week</h2>
      <ul class="summary">${r.map(({exerciseId:e,value:t,previous:r})=>{let i=u[e];return`<li><strong>${i.name}</strong>: ${dr(i,ur(i,t,n),n)} <span class="hint">(was ${dr(i,ur(i,r,n),n)})</span></li>`}).join(``)}</ul>
    </section>`}function pr(e,t,n,r){let i={top:22,right:20,bottom:22,left:20},a=Math.min(...n),o=Math.max(...n),s=o-a||1,c=e=>i.left+e*(300-i.left-i.right)/(n.length-1),l=e=>i.top+(o-e)*(110-i.top-i.bottom)/s,u=n.map((e,t)=>`${t===0?`M`:`L`}${c(t).toFixed(1)},${l(e).toFixed(1)}`).join(` `),d=n.map((e,n)=>{let i=`${lr(t[n])}: ${r(e)}`;return`
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
      <text x="${i.left}" y="106" class="axis-label">${lr(t[0])}</text>
      <text x="${300-i.right}" y="106" class="axis-label" text-anchor="end">${lr(t[t.length-1])}</text>
    </svg>
    <p class="chart-caption" aria-live="polite">Tap a dot to see that day.</p>
  `}function mr(e,t,n){let r=new Set(Un(e,o(t).toISOString(),or).map(({exerciseId:e})=>e));return Object.entries(e).filter(([e,t])=>u[e]&&t.some(e=>e.sets.length>0)).map(([e,t])=>{let i=u[e],a=t.filter(e=>e.sets.length>0),o=Vn(a,i.weightKind??`load`).map(e=>ur(i,e,n)),s=a[a.length-1],c=r.has(e),l=sr(e),d=(i.weightKind??`load`)===`assist`?Math.min(...o):Math.max(...o),f=o.length>=2?pr(i.name,a.map(e=>e.date),o,e=>dr(i,e,n)):`<p class="hint">Log it again to start a chart.</p>`;return`
        <section class="card progress-card ${l?`type-${l}`:``}">
          <h3 class="progress-name">${i.name}</h3>
          <p class="progress-stats">
            <span>Best: <strong>${dr(i,d,n)}</strong>${c?` <span class="new-best">New best!</span>`:``}</span>
            <span>Last: ${Y(s,cr(i),n)}</span>
          </p>
          ${f}
        </section>`}).join(``)}function hr(e,t){let n=zn(e).slice(0,ar);if(n.length===0)return``;let r=n.map(e=>{let n=e.entries.filter(({exerciseId:e})=>u[e]).map(({exerciseId:e,session:n})=>{let r=u[e];return`<li>${r.name}: <span class="hint">${Y(n,cr(r),t)}</span></li>`}).join(``);return`
        <h3 class="progress-name">${lr(e.date)}</h3>
        <ul class="summary">${n}</ul>`});return`
    <details class="card switcher recent-workouts">
      <summary>Recent workouts (${n.length})</summary>
      ${r.join(``)}
    </details>`}function gr(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r,12).toISOString()}function _r(e){if(e.length===0)return``;let t=e.slice(-14),n=t[t.length-1],r=[{name:`How rested you felt`,points:t.map(e=>({date:e.date,value:e.feel})),format:e=>`${Wn[e]??e} (${e}/5)`},{name:`Hours slept`,points:t.flatMap(e=>e.hours===null?[]:[{date:e.date,value:e.hours}]),format:e=>`${e} h`},{name:`Readiness`,points:t.flatMap(e=>e.readiness===null?[]:[{date:e.date,value:e.readiness}]),format:e=>String(e)}].filter(e=>e.points.length>=2).map(e=>`
        <section class="card progress-card">
          <h3 class="progress-name">${e.name}</h3>
          ${pr(e.name,e.points.map(e=>gr(e.date)),e.points.map(e=>e.value),e.format)}
        </section>`).join(``);return`
    <h2 class="section-title">Recovery</h2>
    <section class="card">
      <p class="progress-stats"><span>Last check-in (${lr(gr(n.date))}): ${tr(n)}</span></p>
      ${r?``:`<p class="hint">Check in on a few more mornings and your charts will appear here.</p>`}
    </section>
    ${r}`}var vr=[50,55,55,60,65];function yr(e,t){return`
    <div class="example-preview">
      <p class="example-label">Example</p>
      <h3 class="progress-name">Machine Chest Press</h3>
      ${pr(`Example: chest press weight over five weeks`,vr.map((t,n)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()-7*(vr.length-1-n)).toISOString()),vr.map(e=>U(e,t)),e=>`${W(e)} ${t}`)}
    </div>`}function br(e,t,n,r,i=`lb`){let a=`
    <header class="screen-header">
      <h1>Your progress</h1>
      <p class="lead">Everything here comes from the sets you log during a workout.</p>
    </header>`;if(zn(e).length===0)return`${a}
      <section class="card empty">
        <p>No workouts yet. Log your sets during a workout and your progress shows up here, like this:</p>
        ${yr(t,i)}
        <button type="button" class="secondary" data-nav="today">Go to today's workout</button>
      </section>
      ${_r(r)}`;let o=Bn(e,t),s=Hn(e,t);return`${a}
    <section class="card week-card">
      <p class="week-count"><strong>${o}</strong> of ${n}</p>
      <p>workouts this week${o>=n?` — goal reached!`:``}</p>
      <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${o}">
        <div class="meter-fill" style="width: ${Math.min(100,Math.round(o/Math.max(1,n)*100))}%"></div>
      </div>
      <p class="week-sets">${s} ${s===1?`set`:`sets`} logged</p>
      <button type="button" class="secondary" data-action="share-week">Share my week</button>
      <p class="hint small">Your goal is the workout days in your week plan. The week starts Monday.</p>
    </section>

    ${fr(e,t,i)}

    ${_r(r)}

    <h2 class="section-title">Exercises</h2>
    ${mr(e,t,i)}

    ${hr(e,i)}
  `}var xr=3;function Sr(e,t,n=xr){return(e[t]??[]).filter(e=>e.sets.length>0).slice(-n).reverse()}function Cr(e){return new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function wr(e,t,n,r){let i=Sr(e,t);if(i.length<2)return``;let a=i.map(e=>`<li><span class="recent-date">${Cr(e.date)}</span><span>${Y(e,n,r)}</span></li>`).join(``);return`
    <div class="recent-times">
      <h4>Your last ${i.length} times</h4>
      <ul>${a}</ul>
    </div>`}var Tr=[{id:`all`,label:`All`},{id:`push`,label:`Push`},{id:`pull`,label:`Pull`},{id:`legs`,label:`Legs`},{id:`home`,label:`Home`}];function Er(e){let t=sr(e.id);return t===`mobility`?`home`:t}function Dr(e,t){let n=t.toLowerCase().split(/\s+/).filter(Boolean),r=`${e.name} ${e.muscles}`.toLowerCase();return n.every(e=>r.includes(e))}function Or(e,t){return Object.values(u).filter(e=>t===`all`||Er(e)===t).filter(t=>Dr(t,e)).sort((e,t)=>e.name.localeCompare(t.name))}function kr(e){return Et.filter(t=>e.includes(t.id)).map(e=>e.label.toLowerCase()).join(`, `)}function Ar(e,t,n){let[r]=Sr(t,e.id,1);if(!r)return{last:``,details:``};let i=e.timedSeconds?`seconds`:`reps`,a=e.weightKind??`load`,o=Vn(Sr(t,e.id,2**53-1).reverse(),a),s=a===`assist`?Math.min(...o):Math.max(...o);return{last:`<small class="last-time">Last time: ${Y(r,i,n)}</small>`,details:`
        <p class="progress-stats"><span>Your best: <strong>${dr(e,ur(e,s,n),n)}</strong></span></p>
        ${wr(t,e.id,i,n)}`}}function jr(e,{equipmentIds:t,protectedAreas:n,history:r,weightUnit:i}){let a=Ar(e,r,i),o=e.equipment.filter(e=>!t.includes(e)).map(e=>qe.find(t=>t.id===e)?.name??e),s=n.filter(t=>e.stress[t]===`high`),c={exercise:e,slot:{label:``,options:[]},cautionAreas:n.filter(t=>e.stress[t]===`moderate`)},l=[o.length>0?`<p class="notice">Not on your equipment list: ${L(o.join(`, `))}.</p>`:``,s.length>0?`<p class="caution">Left out of your workouts: it loads your ${kr(s)} too hard.</p>`:``,Te(c)].join(``);return`
    <article class="exercise">
      <details>
        <summary>
          <span class="exercise-title">
            <strong>${e.name}</strong>
            <small>${e.muscles}</small>
            ${a.last}
            ${o.length>0?`<small class="library-missing">Not at your gym</small>`:``}
          </span>
          <span class="chevron" aria-hidden="true"></span>
        </summary>
        ${a.details}
        ${l}
        ${Ee(c)}
      </details>
    </article>`}function Mr(e,t,n){let r=Or(e,t);return r.length===0?`<p class="card empty" role="status">Nothing matches that. Try a muscle like "back", or a machine like "press".</p>`:`${`<p class="hint" role="status">${r.length} ${r.length===1?`exercise`:`exercises`}</p>`}<div class="exercise-list">${r.map(e=>jr(e,n)).join(``)}</div>`}function Nr(e,t,n){let r=Tr.map(({id:e,label:n})=>`<button type="button" class="chip${e===t?` active`:``}" data-action="library-group" data-value="${e}" aria-pressed="${e===t}">${n}</button>`).join(``);return`
    <header class="screen-header">
      <h1>Exercise library</h1>
      <p class="lead">Look up how any exercise works. Tap one to see the steps and a demo video.</p>
    </header>

    <label class="sr-only" for="library-search">Search exercises</label>
    <input id="library-search" type="search" class="library-search" data-field="library-search"
      placeholder="Search by name or muscle" autocomplete="off" value="${L(e)}" />

    <div class="chip-row library-groups" role="group" aria-label="Kind of exercise">${r}</div>

    <div class="library-list">${Mr(e,t,n)}</div>

  `}var Pr=`https://ashnasahni.github.io/gym-guide/`,Fr=3;function Ir(e,t){return`${e} ${t}${e===1?``:`s`}`}function Lr(e,t,n,r){let i=[`My week on Gym Guide`,`${Bn(e,t)} of ${Ir(n,`workout`)} · ${Ir(Hn(e,t),`set`)}`],a=Un(e,o(t).toISOString(),or).filter(({exerciseId:e})=>u[e]);if(a.length>0){let e=a.slice(0,Fr).map(({exerciseId:e,value:t})=>{let n=u[e];return`${n.name} ${dr(n,ur(n,t,r),r)}`}),t=a.length-e.length;i.push(`New bests: ${e.join(`, `)}${t>0?` and ${t} more`:``}`)}return i.push(``,`Try it: ${Pr}`),i.join(`
`)}function Rr(e){let{state:t}=e;async function n(t){try{await navigator.clipboard.writeText(t),e.showToast(`Copied. Paste it into a message.`)}catch{e.showToast(`Couldn't share from this phone.`)}}async function r(){let e=(t.profile??H).weekPlan.filter(Boolean).length,r=Lr(t.history,new Date,e,t.weightUnit);if(typeof navigator.share!=`function`){await n(r);return}try{await navigator.share({title:`My week on Gym Guide`,text:r})}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;await n(r)}}return{handleAction(e){return e===`share-week`&&(r(),!0)}}}function zr(e){let{root:t,state:n}=e,r=t.querySelector(`input[data-field="cal-time"]`)?.value??``;if(!R(r))return e.showToast(`Pick a start time first.`),null;let i=Number(t.querySelector(`select[data-field="cal-minutes"]`)?.value);n.calendar={time:r,minutes:Ae.includes(i)?i:n.calendar.minutes},J(n);let a=(n.profile??H).weekPlan;return bn(`gym-guide-week.ics`,`text/calendar;charset=utf-8`,Be(a,n.calendar,new Date)),Re(a,n.calendar)}function Br(e,t,n=null){let r=Ae.map(t=>`<option value="${t}"${t===e.minutes?` selected`:``}>${t} minutes</option>`).join(``);return`
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
      ${n&&!t?Vr(n):``}
      <button type="button" class="secondary" data-action="add-to-calendar"${t?` disabled`:``}>Add to calendar</button>
      <p class="hint small">This is a one-time copy. If you change your week later, delete the old events in your calendar and add it again. The events repeat every week until you delete them.</p>
    </section>
  `}function Vr(e){return`
    <div class="notice" role="status">
      <p><strong>✓ File downloaded.</strong> Next, open it (from your downloads or the browser's download bar) and tap Add all in your calendar app. It holds:</p>
      <ul>${e.map(e=>`<li>${e}</li>`).join(``)}</ul>
    </div>`}function Hr(e){return e.toLocaleDateString(void 0,{month:`long`,day:`numeric`})}function Ur(e){return e.isToday?`Today`:`${h[e.weekdayIndex]}, ${Hr(e.date)}`}function Wr(e){let t=e.status===`done`&&e.workout?`${I[e.workout]} workout, done`:e.status===`planned`&&e.workout?`${I[e.workout]} planned`:e.status===`missed`&&e.workout?`${I[e.workout]} planned, not logged`:`rest day`;return`${h[e.weekdayIndex]} ${Hr(e.date)}, ${t}${e.isToday?`, today`:``}`}function Gr(e){return e.toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function Kr(e,t){return t===0?`This week`:t===1?`Next week`:t===-1?`Last week`:`${Gr(e[0].date)} – ${Gr(e[6].date)}`}function qr(e,t,n=0){let r=e.map(e=>{let n=e.workout?ve[e.workout]:`Rest`,r=e.status===`done`?`✓`:e.status===`missed`?`○`:``;return`
        <button type="button" class="${[`cal-day`,e.workout?`type-${e.workout}`:``,`cal-${e.status}`,e.isToday?`today`:``,e.key===t?`selected`:``].filter(Boolean).join(` `)}" data-date="${e.key}"
                aria-pressed="${e.key===t}" aria-label="${Wr(e)}">
          <span class="cal-weekday">${m[e.weekdayIndex]}</span>
          <span class="cal-date">${e.date.getDate()}</span>
          <span class="cal-label">${n}</span>
          <span class="cal-mark" aria-hidden="true">${r}</span>
        </button>`}).join(``),i=Kr(e,n);return`
    <div class="week-nav">
      <button type="button" class="week-step" data-action="week-prev" aria-label="Previous week"${n<=-4?` disabled`:``}>‹</button>
      ${n===0?`<span class="week-title">${i}</span>`:`<button type="button" class="link-button week-title" data-action="week-today" aria-label="${i}. Tap to go back to this week">${i}</button>`}
      <button type="button" class="week-step" data-action="week-next" aria-label="Next week"${n>=12?` disabled`:``}>›</button>
    </div>
    <div class="calendar" role="group" aria-label="${i}">${r}</div>
  `}function Jr(e,t,n,r){return`
    <section class="card home-card">
      <h2>${e} <small>optional</small></h2>
      <p class="home-blurb">${t}</p>
      ${r?`<button type="button" class="secondary" data-day="${n}">Do ${I[n].toLowerCase()}</button>`:`<p class="hint">You can start it on the day.</p>`}
    </section>`}function Yr(e){return`
    <section class="card">
      <p>Rest day. Your muscles grow while you recover, so a walk or some stretching is plenty.</p>
    </section>

    ${e.isToday?`<section class="card train-anyway">
             <h2>Want to train anyway?</h2>
             <p class="picker-hint">Pick a gym workout for today. Your week plan stays as it is.</p>
             ${xe(null,`Pick a gym workout for today`,y)}
           </section>`:``}

    ${Jr(`At-home abs`,`About 10 minutes, no equipment, gentle on your back and knees. Same voice and timer as a gym workout.`,`home`,e.isToday)}

    ${Jr(`Mobility reset`,`About 8 minutes of slow stretches for your neck, upper back and hips. No equipment.`,`mobility`,e.isToday)}`}function Xr(e,t){return t.flatMap((t,n)=>t&&e[n]?[`${m[n]} ${f[t].label.toLowerCase()}`]:[]).join(` · `)}function Zr(e,t,n,r){let i=p(n);if(i.length===0)return``;let a=[null,...i].map(n=>{let i=n?f[n].label:`Balanced`;return`<button type="button" class="focus-chip${n===r?` active`:``}"
          data-focus-day="${t}" data-focus="${n??`balanced`}"
          aria-pressed="${n===r}" aria-label="${e} focus: ${i}">${i}</button>`}).join(``);return`<p class="plan-focus-day">${`${e} · ${n?ve[n]:``}`}</p><div class="plan-focus" role="group" aria-label="${e} focus">${a}</div>`}function Qr(e,t,n=!1){let r=[{value:`rest`,label:`Rest`,spoken:`Rest`},...v.map(e=>({value:e,label:ve[e],spoken:I[e]}))];return`<div class="plan-editor">${h.map((t,n)=>{let i=e[n]??`rest`,a=r.map(e=>`
          <button type="button" class="plan-option${e.value===i?` active`:``}"
                  data-plan-day="${n}" data-plan-workout="${e.value}"
                  aria-pressed="${e.value===i}" aria-label="${t}: ${e.spoken}">${e.label}</button>`).join(``);return`
      <div class="plan-row">
        <span class="plan-day"><span aria-hidden="true">${t.slice(0,3)}</span><span class="sr-only">${t}</span></span>
        <div class="plan-options">${a}</div>
      </div>`}).join(``)}</div>${$r(e,t,n)}`}function $r(e,t,n){let r=h.map((n,r)=>Zr(n,r,e[r],t[r]??null)).join(``);if(!r)return``;let i=Xr(e,t);return`
    <details class="focus-picker"${n?` open`:``}>
      <summary><span>Focus (optional)</span>${i?`<span class="hint">${i}</span>`:``}</summary>
      <p class="hint">Lean a Push or Pull day toward one muscle.</p>
      ${r}
    </details>`}function ei(){return`
    <section class="card row-card easy-week-card">
      <div>
        <h2>Easy week</h2>
        <p class="hint">Fewer sets, same weights, until Sunday.</p>
      </div>
      <button type="button" class="secondary" data-action="easy-week-end">Turn off</button>
    </section>`}function ti(e){return`
    <section class="card easy-week-card">
      <h2>Time for an easy week?</h2>
      <p>You've trained ${e} weeks in a row. An easier week (one fewer set, same weights) can help you recover and come back stronger. It's optional.</p>
      <div class="button-row">
        <button type="button" class="secondary" data-action="easy-week-dismiss">Not now</button>
        <button type="button" class="primary" data-action="easy-week-start">Make this week easier</button>
      </div>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function ni(e){return`data-${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}`}function ri(e){return`"${e.replace(/["\\]/g,`\\$&`)}"`}function ii(e,t){if(!(e instanceof HTMLElement)||e===t||!t.contains(e))return null;let n=Object.entries(e.dataset).map(([e,t])=>`[${ni(e)}=${ri(t??``)}]`);return n.length===0?null:`${e.tagName.toLowerCase()}${n.join(``)}`}function ai(e,t){e.querySelector(t)?.focus({preventScroll:!0})}function oi(e){let t=e.querySelector(`main h1`);t&&(t.tabIndex=-1,t.focus({preventScroll:!0}))}var si={name:``,grams:``,goal:``,error:``,calorieName:``,calories:``,calorieGoal:``,calorieError:``,proteinQuickOpen:!1,calorieQuickOpen:!1,proteinGoalOpen:!1,calorieGoalOpen:!1};function ci(e,t){return`<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e}">
    <div class="meter-fill" style="width: ${Math.min(100,Math.round(e/t*100))}%"></div>
  </div>`}function li(e,t){let n=e.waterGoal;return`
    <section class="card fuel-water">
      <h2>Water</h2>
      <p class="fuel-total"><strong>${t}</strong> of ${n} glasses${t>=n?` — goal reached!`:``}</p>
      ${ci(t,n)}
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
  `}function ui(e){return e.proteinGoalOpen?`
    <p class="hint">A common target for building muscle is about 0.7 g per pound of body weight. A doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 100" value="${L(e.goal)}" data-field="protein-goal" aria-label="Daily protein goal in grams" />
      <span>g</span>
      <button type="button" class="secondary" data-action="set-protein-goal">Set goal</button>
    </div>
  `:`<button type="button" class="link-button" data-action="show-protein-goal">Set a daily goal (optional)</button>`}function di(e,t,n){let r=V(e,t),i=St(r),a=e.proteinGoal,o=a===null?`<p class="fuel-total"><strong>${i}</strong> g today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} g${i>=a?` — goal reached!`:``}</p>${ci(i,a)}`,s=r.protein.length===0?`<p class="hint">Nothing logged yet today. Tap Add food.</p>`:`<ul class="entry-list">${r.protein.map((e,t)=>`
          <li>
            <span>${L(e.name)}</span>
            <span class="entry-grams">${e.grams} g</span>
            <button type="button" class="link-button" data-action="remove-protein" data-index="${t}" aria-label="Remove ${L(e.name)}">Remove</button>
          </li>`).join(``)}</ul>`,c=dt.map((e,t)=>`
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
          <input type="text" placeholder="What you ate" value="${L(n.name)}" data-field="protein-name" aria-label="Food name" maxlength="60" />
          <input type="number" inputmode="numeric" min="1" placeholder="g" value="${L(n.grams)}" data-field="protein-grams" aria-label="Protein in grams" class="grams-input" />
          <button type="button" class="secondary" data-action="add-protein">Add</button>
        </div>
        ${n.error&&!n.proteinGoalOpen?`<p class="form-error" role="alert">${n.error}</p>`:``}
      </details>
      ${n.error&&n.proteinGoalOpen?`<p class="form-error" role="alert">${n.error}</p>`:``}

      ${a===null?ui(n):`<button type="button" class="link-button" data-action="clear-protein-goal">Change protein goal (${a} g)</button>`}
    </section>
  `}function fi(e){return e.calorieGoalOpen?`
    <p class="hint">A doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 2400" value="${L(e.calorieGoal)}" data-field="calorie-goal" aria-label="Daily calorie goal" />
      <span>cal</span>
      <button type="button" class="secondary" data-action="set-calorie-goal">Set goal</button>
    </div>
  `:`<button type="button" class="link-button" data-action="show-calorie-goal">Set a daily goal (optional)</button>`}function pi(e,t,n){let r=V(e,t),i=yt(r),a=e.calorieGoal,o=a===null?`<p class="fuel-total"><strong>${i}</strong> cal today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} cal${i>=a?` — goal reached!`:``}</p>${ci(i,a)}`,s=r.calories.length===0?`<p class="hint">Nothing logged yet today. Tap Add food.</p>`:`<ul class="entry-list">${r.calories.map((e,t)=>`
          <li>
            <span>${L(e.name)}</span>
            <span class="entry-grams">${e.kcal} cal</span>
            <button type="button" class="link-button" data-action="remove-calories" data-index="${t}" aria-label="Remove ${L(e.name)} calories">Remove</button>
          </li>`).join(``)}</ul>`,c=ft.map((e,t)=>`
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
          <input type="text" placeholder="What you ate" value="${L(n.calorieName)}" data-field="calorie-name" aria-label="Food name for calories" maxlength="60" />
          <input type="number" inputmode="numeric" min="1" placeholder="cal" value="${L(n.calories)}" data-field="calorie-amount" aria-label="Calories" class="grams-input" />
          <button type="button" class="secondary" data-action="add-calories">Add</button>
        </div>
        ${n.calorieError&&!n.calorieGoalOpen?`<p class="form-error" role="alert">${n.calorieError}</p>`:``}
      </details>
      ${n.calorieError&&n.calorieGoalOpen?`<p class="form-error" role="alert">${n.calorieError}</p>`:``}

      ${a===null?fi(n):`<button type="button" class="link-button" data-action="clear-calorie-goal">Change calorie goal (${a} cal)</button>`}
    </section>
  `}function mi(e,t,n){return`
    <header class="screen-header">
      <h1>Fuel</h1>
      <p class="lead">Tap to log water, protein and calories. Today's log starts fresh at midnight.</p>
    </header>
    ${li(e,V(e,t).glasses)}
    ${di(e,t,n)}
    ${pi(e,t,n)}
  `}function hi(e){let{root:t,state:n}=e,r={...si};function a(e){return t.querySelector(`input[data-field="${e}"]`)?.value??``}function o(){r={name:a(`protein-name`),grams:a(`protein-grams`),goal:a(`protein-goal`),error:``,calorieName:a(`calorie-name`),calories:a(`calorie-amount`),calorieGoal:a(`calorie-goal`),calorieError:``,proteinQuickOpen:t.querySelector(`details[data-quick="protein"]`)?.open??r.proteinQuickOpen,calorieQuickOpen:t.querySelector(`details[data-quick="calories"]`)?.open??r.calorieQuickOpen,proteinGoalOpen:r.proteinGoalOpen,calorieGoalOpen:r.calorieGoalOpen}}function s(t,a,s){o();let c=i(new Date),l=n.nutrition;if(t===`water`)n.nutrition=mt(l,c,Number(a));else if(t===`water-goal`)n.nutrition={...l,waterGoal:Math.min(20,Math.max(1,l.waterGoal+Number(a)))};else if(t===`quick-protein`){let e=dt[Number(s)];e&&(n.nutrition=ht(l,c,e))}else if(t===`add-protein`){let e=Ct(r.name,r.grams);e?r.error=e:(n.nutrition=ht(l,c,{name:r.name.trim(),grams:Number(r.grams)}),r={...r,name:``,grams:``})}else if(t===`remove-protein`)n.nutrition=gt(l,c,Number(s));else if(t===`show-protein-goal`)r.proteinGoalOpen=!0;else if(t===`show-calorie-goal`)r.calorieGoalOpen=!0;else if(t===`set-protein-goal`){let e=Number(r.goal);!Number.isInteger(e)||e<1||e>400?r.error=`Enter a protein goal in whole grams, between 1 and 400.`:(n.nutrition={...l,proteinGoal:e},r.proteinGoalOpen=!1)}else if(t===`clear-protein-goal`)r.goal=String(l.proteinGoal??``),r.proteinGoalOpen=!0,n.nutrition={...l,proteinGoal:null};else if(t===`quick-calories`){let e=ft[Number(s)];e&&(n.nutrition=_t(l,c,e))}else if(t===`add-calories`){let e=bt(r.calorieName,r.calories);e?r.calorieError=e:(n.nutrition=_t(l,c,{name:r.calorieName.trim(),kcal:Number(r.calories)}),r={...r,calorieName:``,calories:``})}else if(t===`remove-calories`)n.nutrition=vt(l,c,Number(s));else if(t===`set-calorie-goal`){let e=xt(r.calorieGoal);e?r.calorieError=e:(n.nutrition={...l,calorieGoal:Number(r.calorieGoal)},r.calorieGoalOpen=!1)}else t===`clear-calorie-goal`&&(r.calorieGoal=String(l.calorieGoal??``),r.calorieGoalOpen=!0,n.nutrition={...l,calorieGoal:null});J(n)||(r.error=`Couldn't save on this device.`),e.render()}return{screen:()=>mi(n.nutrition,i(new Date),r),handleAction:s}}var gi=e=>`<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${e}</svg>`,_i={today:gi(`<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />`),library:gi(`<circle cx="11" cy="11" r="6" /><path d="M16 16l5 5" />`),progress:gi(`<path d="M4 4v16h16M8 15l4-5 3 3 5-7" />`),fuel:gi(`<path d="M12 3c3 4.2 6 7.2 6 11a6 6 0 0 1-12 0c0-3.8 3-6.8 6-11z" />`),profile:gi(`<circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />`)},X=[{title:`Your week`,text:`Tap a day to see its workout. Swipe sideways to look at other weeks.`,target:`.calendar`},{title:`Start workout`,text:`At the gym, tap this. It talks you through every set and times your rest.`,target:`[data-action="start-workout"]`},{title:`Exercises`,text:`Look up how to do any exercise, with a demo video.`,target:`[data-nav="library"]`},{title:`Progress`,text:`Your weights and charts show up here after you log sets.`,target:`[data-nav="progress"]`},{title:`Fuel`,text:`Log water, protein and calories with a tap.`,target:`[data-nav="fuel"]`},{title:`Profile`,text:`Change your goal, workout days and equipment, and back up your data here.`,target:`[data-nav="profile"]`}];function vi(e){let t=X[e];if(!t)return``;let n=e===X.length-1;return`
    <aside class="tour" role="region" aria-label="App tour, step ${e+1} of ${X.length}">
      <p class="tour-count">${e+1} of ${X.length}</p>
      <h2>${t.title}</h2>
      <p>${t.text}</p>
      <div class="tour-buttons">
        ${n?``:`<button type="button" class="link-button" data-action="tour-skip">Skip tour</button>`}
        <button type="button" class="primary" data-action="${n?`tour-skip`:`tour-next`}">${n?`Done`:`Next`}</button>
      </div>
    </aside>`}function yi(e,t){let n=X[t]?.target;n&&e.querySelector(n)?.classList.add(`tour-highlight`)}var bi={youtubeId:`zt8SEmJhFuY`,title:`How to pick the right weights`,channel:`Alloy Health`},xi={youtubeId:`oBs-PE34x7g`,title:`How to use basic gym equipment`,channel:`SELF`};function Si(e){return`
    <a class="demo-link" href="https://www.youtube.com/watch?v=${e.youtubeId}" target="_blank" rel="noopener noreferrer">
      Watch: ${e.title} ↗<small>by ${e.channel}</small>
    </a>`}function Ci(e){return`
    <header class="screen-header">
      <p class="eyebrow">New to working out?</p>
      <h1>Start here</h1>
      <p class="lead">No experience needed. This takes two minutes, and you can come back to it any time.</p>
    </header>

    <section class="card guide-card">
      <h2>The words</h2>
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
    </section>

    <section class="card guide-card">
      <h2>How much weight?</h2>
      <p>Start lighter than you think. Pick a weight where the last 2 reps feel hard but your form stays clean.</p>
      <ul>
        <li>If you could have done 5 or more extra reps, go heavier next time.</li>
        <li>If your form falls apart or you can't finish, go lighter.</li>
        <li>The app remembers what you did and suggests the next weight, so you don't have to work it out.</li>
      </ul>
      ${Si(bi)}
    </section>

    <section class="card guide-card">
      <h2>Using a machine</h2>
      <ul>
        <li>Look at the picture on the machine. It shows the move and which muscles it works.</li>
        <li>Adjust the seat and pads first so the handles line up with your body, then pick a light weight.</li>
        <li>Move slowly and smoothly. Don't jerk the weight.</li>
        <li>Not sure how a machine works? Tap the exercise in the app for steps and a demo, or ask the staff at the front desk.</li>
      </ul>
      ${Si(xi)}
    </section>

    <section class="card guide-card">
      <h2>At the gym</h2>
      <ul>
        <li>Do the warm-up first, then the exercises in order, then the cool-down.</li>
        <li>If a machine is taken, tap <strong>Swap</strong> for another option, or do the next exercise and come back.</li>
        <li>Wipe the machine when you finish, and put weights back where you found them.</li>
        <li>Everyone started at the beginning. Most people at the gym are focused on their own workout.</li>
      </ul>
    </section>

    <section class="card guide-card">
      <h2>Sore or hurt?</h2>
      <p>A dull, tired ache in your muscles for a day or two is normal. Sharp pain, pain in a joint, or pain that keeps coming back is not.</p>
      <ul>
        <li>If something hurts, stop, and tap <strong>This hurt</strong> so the app swaps in a gentler move.</li>
        <li>If it keeps happening, check with a doctor or physical therapist. This app isn't medical advice.</li>
      </ul>
    </section>

    <section class="card guide-card">
      <h2>How this app helps</h2>
      <ul>
        <li>It plans each workout day using only the machines your gym has.</li>
        <li>Every exercise has steps, common mistakes and a demo video.</li>
        <li>Workout mode talks you through each set and runs the rest timer.</li>
        <li>It saves what you lift, so you can see your progress.</li>
      </ul>
    </section>

    <button type="button" class="primary big" data-action="close-guide">${e}</button>
  `}var wi=[{title:`Tell us about you`,detail:`Your goal, and any injuries or sore spots to protect.`},{title:`Pick your gym's equipment`,detail:`You only get exercises that use machines your gym has.`},{title:`Follow today's workout`,detail:`Step-by-step form, a rest timer, and a voice that talks you through each set.`}];function Ti(e){return`
    <header class="screen-header">
      <h1>Welcome to Gym Guide</h1>
      <p class="lead">It tells you what to do at the gym today and shows exactly how to do each exercise. It takes about a minute to set up.</p>
    </header>

    <section class="card">
      <ol class="intro-steps">${wi.map((e,t)=>`
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
  `}var Ei=`CC BY 4.0`,Di=`https://creativecommons.org/licenses/by/4.0/`,Z=`https://freemusicarchive.org/music`,Oi={file:`punjabi-bhangra.mp3`,title:`Punjabi Bhangra Energy Short Burst`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/kids-comedy-holiday/punjabi-bhangra-energy-short-burst/`},ki={file:`boom-bap.mp3`,title:`Boom Bap Old School Hip-Hop Beat`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/trap-hip-hop-beats/boom-bap-old-school-hip-hop-beat/`},Ai={file:`electronic-dance.mp3`,title:`Energetic Upbeat Electronic Dance`,artist:`Music for Creators`,source:`${Z}/fretbound/single/energetic-upbeat-electronic-dance/`},ji={file:`energetic-pop.mp3`,title:`Energetic Pop Background`,artist:`AurosonMusic`,source:`${Z}/aurosonmusic/single/energetic-pop-background/`},Mi={file:`bright-pop.mp3`,title:`Bright Energetic Upbeat Pop`,artist:`Music for Creators`,source:`${Z}/fretbound/single/bright-energetic-upbeat-pop/`},Ni={file:`disco-funk.mp3`,title:`Mirrorglow (Upbeat & Energetic Disco Funk)`,artist:`Vlad Annenkov`,source:`${Z}/vlad-annenkov/single/upbeat-energetic-disco-funk-mirrorglowmp3/`},Pi={file:`pop-rock.mp3`,title:`Neon Pulse (Energetic Pop Rock)`,artist:`Vlad Annenkov`,source:`${Z}/vlad-annenkov/single/energetic-pop-rock-neon-pulsemp3/`},Fi={file:`hype-trap.mp3`,title:`Hard Hype Trap for Sports Intros`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/trap-hip-hop-beats/hard-hype-trap-for-sports-intros/`},Ii={file:`phonk-gym.mp3`,title:`Hard Phonk Gym Workout Track`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/phonk-drift/hard-phonk-gym-workout-track/`},Li={file:`workout-edm.mp3`,title:`Workout Songs`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/epic-action-sports/workout-songs/`},Ri={file:`masala-madness.mp3`,title:`Masala Madness`,artist:`Geoff Harvey - Purple Planet Music`,source:`${Z}/geoff-harvey-purple-planet-music/indian-life/masala-madness-1/`},zi={file:`mumbai-mood.mp3`,title:`Mumbai Mood`,artist:`Geoff Harvey - Purple Planet Music`,source:`${Z}/geoff-harvey-purple-planet-music/indian-life/mumbai-mood-1/`},Bi={file:`bollywood-flame.mp3`,title:`Bollywood Flame With Bright Festive Drive`,artist:`Alex Morgan`,source:`${Z}/alex-morgan/advertising-broadcast-vol-2/bollywood-flame-with-bright-festive-drive/`},Vi={file:`weekend-chill.mp3`,title:`Chill Hip Hop - Weekend Chill Beat`,artist:`AurosonMusic`,source:`${Z}/aurosonmusic/single/chill-hip-hop-weekend-chill-beat/`},Hi={push:{name:`Push day mix`,songs:[Fi,Oi,Ri,ki,Ai,Ni,Li]},pull:{name:`Pull day mix`,songs:[Ii,zi,Ai,Oi,Pi,Ri,ji]},legs:{name:`Legs day mix`,songs:[Fi,Ri,ki,Oi,Ii,Ni,Li]},home:{name:`At-home abs mix`,songs:[Mi,zi,ji,Bi,Ai,Li]},mobility:{name:`Mobility mix`,songs:[Vi]}};function Ui(){let e=new Map;for(let t of Object.values(Hi))for(let n of t.songs)e.set(n.file,n);return[...e.values()]}function Wi(e){return new URL(`music/${e.file}`,document.baseURI).href}var Gi=.3,Ki=8e3;function qi(e,t,n=()=>new Audio){let r=null,i=null,a=0,o=0,s=null,c;function l(e,t){if(!r)return;let n=Hi[e].songs;a=t%n.length,r.src=Wi(n[a]),r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`))}function u(e){i!==null&&(f(),t(e))}function d(){i!==null&&l(i,a+1)}function f(){window.clearTimeout(c),r&&=(r.pause(),null),i=null,s=null,o=0,e()}function p(){window.clearTimeout(c),r&&s!==null&&(r.volume=s,s=null)}function m(t){if(r&&i===t){r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`));return}r?.pause(),r=n(),r.addEventListener(`ended`,d),r.addEventListener(`playing`,()=>{o=0}),r.addEventListener(`error`,()=>{o+=1,o>=Hi[t].songs.length?u(`The music couldn't load. Check your connection and try again.`):d()}),i=t,o=0,s=null,l(t,0),e()}return{play:m,stop:f,current:()=>i,duck(){r&&s===null&&(s=r.volume,r.volume=s*Gi,c=window.setTimeout(p,Ki))},restore:p}}var Ji=`gym-guide-music`;function Yi(e){return{async savedCount(){let t=await e.open(Ji),n=0;for(let e of Ui())await t.match(Wi(e))&&(n+=1);return n},async save(t){navigator.storage?.persist?.().catch(()=>!1);let n=await e.open(Ji),r=0;for(let e of Ui()){let i=Wi(e);if(!await n.match(i)){let t=await fetch(i,{cache:`reload`});if(!t.ok)throw Error(`${e.file} could not be downloaded (${t.status})`);await n.put(i,t)}r+=1,t(r)}},async remove(){await e.delete(Ji)}}}var Xi=70;function Zi(e,t){if(e.kind===`checking`)return``;let n;return n=e.kind===`saved`?`
      <p class="music-status">✓ All ${t} songs are saved on this phone.</p>
      <button type="button" class="link-button" data-action="remove-music-offline">Remove saved music</button>`:e.kind===`saving`?`
      <p class="fuel-total" role="status">Saving song ${Math.min(e.done+1,t)} of ${t}…</p>
      <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e.done}">
        <div class="meter-fill" style="width: ${Math.round(e.done/t*100)}%"></div>
      </div>
      <p class="hint small">Keep this screen open until it finishes.</p>`:`
      ${e.saved>0?`<p class="hint">${e.saved} of ${t} songs are saved so far.</p>`:``}
      ${e.kind===`error`?`<p class="form-error" role="alert">${L(e.message)}</p>`:``}
      <button type="button" class="secondary" data-action="save-music-offline">${e.saved>0?`Finish saving the music`:`Save music for offline use`}</button>
      <p class="hint small">Uses about ${Xi} MB on this phone. Do it on Wi-Fi.</p>`,`
    <section class="card offline-music">
      <h2>Music offline</h2>
      <p class="hint">Songs play from the internet. Save them on this phone to listen at the gym without signal.</p>
      ${n}
    </section>`}function Qi(e){let t=`caches`in window?Yi(window.caches):null,n=Ui().length,r={kind:`checking`};function i(){t?.savedCount().catch(()=>0).then(t=>{r=t===n?{kind:`saved`}:{kind:`idle`,saved:t},e.redrawProfile()})}async function a(){if(t&&r.kind!==`saving`){r={kind:`saving`,done:0},e.redrawProfile();try{await t.save(t=>{r={kind:`saving`,done:t},e.redrawProfile()}),r={kind:`saved`},e.redrawProfile(),e.showToast(`Music saved on this phone.`)}catch{r={kind:`error`,message:`Couldn't save all the music. Check your connection and free space on this phone, then try again.`,saved:await t.savedCount().catch(()=>0)},e.redrawProfile()}}}async function o(){await t?.remove(),r={kind:`idle`,saved:0},e.redrawProfile(),e.showToast(`Saved music removed. Songs will play from the internet.`)}return{card:()=>t?Zi(r,n):``,check:i,handleAction(e){if(e===`save-music-offline`)a();else if(e===`remove-music-offline`)o();else return!1;return!0}}}function $i(e,t){let n=Hi[e],r=t===e,i=r?`<button type="button" class="secondary" data-action="stop-music" aria-label="Stop music">■ Stop</button>`:`<button type="button" class="secondary" data-action="play-music" data-workout="${e}" aria-label="Play ${n.name}">▶ Play</button>`;return`
    <section class="card music-card row-card">
      <p class="music-name">♪ ${r?`Playing now`:n.name}</p>
      ${i}
    </section>`}function ea(){return`
    <details class="card music-credits">
      <summary>Music credits</summary>
      <ul>${Ui().map(e=>`<li><a href="${e.source}" target="_blank" rel="noopener noreferrer">${L(e.title)}</a> by ${L(e.artist)}</li>`).join(``)}</ul>
      <p class="hint small">From the Free Music Archive, used under the <a href="${Di}" target="_blank" rel="noopener noreferrer">${Ei}</a> license. The songs by Alex Morgan are listed there as AI-generated.</p>
    </details>`}var ta={open:!1,feel:null,hours:``,readiness:``,error:``};function na(e){return`
    <section class="card recovery-card">
      <h2>Morning check-in</h2>
      <p class="feel-question" id="feel-question">How rested do you feel?</p>
      <div class="feel-row" role="group" aria-labelledby="feel-question">${Gn.map(t=>`
      <button type="button" class="feel-option${e.feel===t?` active`:``}" data-action="checkin-feel" data-value="${t}" aria-pressed="${e.feel===t}">
        <strong>${t}</strong><small>${Wn[t]}</small>
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
    </section>`}function ra(e,t){if(t.open)return na(t);if(!e)return`
      <section class="card recovery-card row-card">
        <div>
          <h2>Morning check-in</h2>
          <p class="hint">Ten seconds. Say how rested you feel, and a worn-out day gets an easier workout.</p>
        </div>
        <button type="button" class="secondary" data-action="checkin-open">Check in</button>
      </section>`;let n=Qn(e);return`
    <section class="card recovery-card level-${n}">
      <h2>Today's recovery</h2>
      <p class="recovery-summary">${tr(e)}</p>
      <p class="recovery-advice">${$n(n)}</p>
      <button type="button" class="link-button" data-action="checkin-open">Change check-in</button>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function ia(e){let{root:t,state:n}=e,r={...ta};function a(){return nr(n.recovery,i(new Date))}function o(){let e=t.querySelector(`input[data-field="checkin-hours"]`),n=t.querySelector(`input[data-field="checkin-readiness"]`);e&&(r.hours=e.value),n&&(r.readiness=n.value)}function s(t,s){if(o(),t===`checkin-open`){let e=a();r={open:!0,feel:e?.feel??null,hours:e?.hours===null||e===void 0?``:String(e.hours),readiness:e?.readiness===null||e===void 0?``:String(e.readiness),error:``}}else if(t===`checkin-feel`)r={...r,feel:Number(s),error:``};else if(t===`checkin-cancel`)r={...ta};else if(t===`checkin-save`){let t=ir(r.feel,r.hours,r.readiness);if(!t.ok)r={...r,error:t.error};else{n.recovery=rr(n.recovery,{date:i(new Date),feel:t.feel,hours:t.hours,readiness:t.readiness}),r={...ta},J(n),e.render(),e.showToast(`Check-in saved.`);return}}e.render()}return{today:a,card:()=>ra(a(),r),handleAction(e,t){return e.startsWith(`checkin-`)?(s(e,t),!0):!1}}}function aa(e,t,n=null){return{day:e.day,startedAt:t.toISOString(),exercises:e.exercises,prescription:er(e.prescription,n),index:0,setNumber:1,phase:e.exercises.length>0?`lift`:`done`,restEndsAt:null,recoveryLevel:n}}function Q(e){return e.exercises[e.index]}function oa(e){return e.setNumber>=e.prescription.sets}function sa(e){return e.index>=e.exercises.length-1}function ca(e){return{...e,phase:`log`}}function la(e,t){if(oa(e)&&sa(e))return{...e,phase:`done`,restEndsAt:null};let n=t+e.prescription.restSeconds*1e3;return oa(e)?{...e,index:e.index+1,setNumber:1,phase:`rest`,restEndsAt:n}:{...e,setNumber:e.setNumber+1,phase:`rest`,restEndsAt:n}}function ua(e){return{...e,phase:`lift`,restEndsAt:null}}function da(e,t,n){let r=Math.max(e.restEndsAt??n,n);return{...e,restEndsAt:r+t*1e3}}function fa(e){return sa(e)?{...e,phase:`done`,restEndsAt:null}:{...e,index:e.index+1,setNumber:1,phase:`lift`,restEndsAt:null}}function pa(e,t){let n=e.exercises.map((n,r)=>r===e.index?t:n);return{...e,exercises:n,setNumber:1,phase:`lift`,restEndsAt:null}}function ma(e,t){return e.restEndsAt===null?0:Math.max(0,Math.ceil((e.restEndsAt-t)/1e3))}function $(e,t,n){let r=Fn(e,n);return r&&r.date===t.startedAt?r.sets:[]}function ha(e,t,n){let r=(e[n]??[]).filter(e=>e.date!==t.startedAt);return r[r.length-1]}function ga(e,t,n,r=`lb`){let i=C(n.exercise,t.prescription);return In(ha(e,t,n.exercise.id),i,n.exercise.weightKind??`load`,{holdWeight:t.recoveryLevel===`easy`,weightUnit:r})}function _a(e,t){let n=C(t.exercise,e.prescription);return`${n.min}–${n.max} ${n.unit}`}function va(e){return`Exercise ${e.index+1} of ${e.exercises.length} · ${be(e.day)}`}function ya(e,t=!1){return`
    <div class="session-controls">
      <button type="button" class="link-button" data-action="toggle-voice" aria-pressed="${e}">Voice: ${e?`on`:`off`}</button>
      ${t?`<button type="button" class="link-button" data-action="skip-exercise">Skip exercise</button>`:``}
      <button type="button" class="link-button" data-action="end-workout">End workout</button>
    </div>
  `}function ba(e,t,n,r,i,a=`lb`,o=``){let s=Q(e);if(!s)return``;let c=ha(t,e,s.exercise.id),l=C(s.exercise,e.prescription),u=ga(t,e,s,a),d=$(t,e,s.exercise.id);return`
    <header class="screen-header">
      <p class="eyebrow">${va(e)}</p>
      <h1>${s.exercise.name}</h1>
    </header>

    ${r?`<p class="notice" role="status">${r}</p>`:``}
    ${e.recoveryLevel===`easy`?`<p class="notice">Easy day: fewer sets, and your weights stay where they were.</p>`:``}

    <section class="card set-card">
      <p class="set-label">Set ${e.setNumber} of ${e.prescription.sets}</p>
      <p class="set-target">${_a(e,s)}</p>
      ${c?`<p class="last-time">Last time: ${Y(c,l.unit,a)}</p>`:``}
      ${e.setNumber===1?`<p class="suggestion">${u.message}</p>`:``}
      ${d.length>0?`<p class="last-time">Today so far: ${Y({date:``,sets:d},l.unit,a)}</p>`:``}
    </section>

    ${Te(s)}

    <button type="button" class="primary big" data-action="set-done">Set done</button>

    ${Ze(s.exercise.id,o,!0)}

    <details class="card how-to">
      <summary>How to do it</summary>
      ${Ee(s)}
    </details>

    <div class="button-row">
      <button type="button" class="secondary" data-action="open-swap">Swap</button>
      <button type="button" class="secondary" data-action="hurt">This hurt</button>
    </div>
    ${$i(e.day,i)}
    ${ya(n,!0)}
  `}function xa(e,t){let n=e.exercises.reduce((n,r)=>n+$(t,e,r.exercise.id).length,0),r=n>0?`You've logged ${n} ${n===1?`set`:`sets`}. They're saved, and this workout will show as done on your calendar.`:`You haven't logged any sets yet, so nothing will be saved.`;return`
    <header class="screen-header">
      <p class="eyebrow">${va(e)}</p>
      <h1>End this workout?</h1>
      <p class="lead">${r}</p>
    </header>

    <button type="button" class="primary big" data-action="confirm-end">Yes, end workout</button>
    <button type="button" class="secondary" data-action="cancel-end">Keep going</button>
  `}function Sa(e,t){let n=Q(e);if(!n)return``;let r=t.length===0?`<section class="card empty"><p>There's no other exercise for this spot with your gym's equipment. You can skip it instead.</p></section>`:t.map((e,t)=>`
        <button type="button" class="swap-option" data-action="choose-swap" data-index="${t}">
          <strong>${e.exercise.name}</strong>
          <small>${e.exercise.muscles}</small>
          ${e.cautionAreas.length>0?`<small class="swap-caution">Go easy: has a caution for you</small>`:``}
        </button>`).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">${va(e)}</p>
      <h1>Swap ${n.exercise.name}</h1>
      <p class="lead">Pick another exercise that works the same muscles. ${n.exercise.name} stays in future workouts.</p>
    </header>

    <div class="swap-list">${r}</div>

    <button type="button" class="secondary" data-action="cancel-swap">Keep ${n.exercise.name}</button>
  `}function Ca(e,t,n,r=`lb`,i=!1){let a=Q(e);if(!a)return``;let o=a.exercise.weightKind??`load`,s=C(a.exercise,e.prescription),c=a.exercise.equipment.includes(`dumbbells`),l=o===`assist`?`Help from the machine (${r})`:c?`Weight (${r}, per dumbbell)`:`Weight (${r})`,u=(e,t,n,r)=>`
    <label class="stepper-label" for="log-${e}">${t}</label>
    <div class="stepper">
      <button type="button" class="step-button" data-step="${e}" data-delta="${-r}" aria-label="Less">−</button>
      <input id="log-${e}" type="number" inputmode="decimal" min="0" value="${n}" data-field="${e}" />
      <button type="button" class="step-button" data-step="${e}" data-delta="${r}" aria-label="More">+</button>
    </div>
  `;return`
    <header class="screen-header">
      <p class="eyebrow">${va(e)}</p>
      <h1>${i?`Fix set ${e.setNumber}`:`Set ${e.setNumber} done`}</h1>
      <p class="lead">${a.exercise.name}: ${i?`what should it say?`:`what did you do?`}</p>
    </header>

    <section class="card">
      ${o===`bodyweight`?``:u(`weight`,l,t.weight,Ft(r))}
      ${u(`amount`,s.unit===`seconds`?`Seconds held`:`Reps`,t.amount,1)}
      ${n?`<p class="form-error" role="alert">${n}</p>`:``}
    </section>

    ${i?`<button type="button" class="primary big" data-action="save-fix">Save change</button>
    <button type="button" class="secondary" data-action="cancel-fix">Cancel</button>`:`<button type="button" class="primary big" data-action="save-set">Save set</button>
    <button type="button" class="secondary" data-action="cancel-log">Back to the set</button>`}
  `}function wa(e,t){return e.exercises.flatMap(n=>$(t,e,n.exercise.id).map((e,t)=>({planned:n,setIndex:t,set:e})))}function Ta(e,t,n=`lb`){let r=e.phase===`rest`,i=wa(e,t).map(({planned:t,setIndex:r,set:i},a)=>{let o=C(t.exercise,e.prescription).unit===`seconds`?`sec`:`reps`,s=i.weight===null?``:`${Pt(i.weight,n)} × `;return`<button type="button" class="swap-option" data-action="choose-fix" data-index="${a}">
        <strong>${t.exercise.name}</strong>
        <small>Set ${r+1}: ${s}${i.amount} ${o}</small>
      </button>`});return`
    <header class="screen-header">
      <p class="eyebrow">${va(e)}</p>
      <h1>Fix a set</h1>
      <p class="lead">Tap the set you logged wrong.${r?` Your rest timer keeps going.`:``}</p>
    </header>

    <div class="swap-list">${i.join(``)}</div>

    <button type="button" class="secondary" data-action="cancel-fix">${r?`Back to rest`:`Back`}</button>
  `}function Ea(e,t,n,r,i=!1){let a=Q(e);if(!a)return``;let o=e.setNumber===1?`Next exercise: <strong>${a.exercise.name}</strong>`:`Next: set ${e.setNumber} of ${e.prescription.sets}, ${a.exercise.name}`;return`
    <header class="screen-header">
      <p class="eyebrow">${va(e)}</p>
      <h1>Rest</h1>
    </header>

    <section class="card rest-card">
      <p class="timer" data-timer aria-live="off">${De(ma(e,t))}</p>
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
        ${$i(e.day,r)}
        ${ya(n)}
      </div>
    </details>
  `}function Da(e,t,n){let r=Un(t,e.startedAt,e=>u[e]?u[e].weightKind??`load`:null);if(r.length===0)return``;let i=r.map(({exerciseId:e,value:t,previous:r})=>{let i=u[e],a=i.weightKind??`load`,o=a===`bodyweight`?i.timedSeconds?`sec`:`reps`:n,s=e=>W(a===`bodyweight`?e:U(e,n));return`<li><strong>${i.name}</strong>: ${s(t)} ${o} <span class="hint">(was ${s(r)} ${o})</span></li>`}).join(``);return`
    <section class="card highlights-card">
      <h2>🏆 New personal best${r.length===1?``:`s`}</h2>
      <ul class="summary">${i}</ul>
    </section>`}function Oa(e,t,n,r=`lb`){let i=e.exercises.map(n=>{let i=$(t,e,n.exercise.id),a=C(n.exercise,e.prescription).unit,o=i.length>0?Y({date:``,sets:i},a,r):`skipped`;return`<li><strong>${n.exercise.name}</strong><br /><span class="hint">${o}</span></li>`}).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">Workout done</p>
      <h1>Nice work!</h1>
      <p class="lead">Your sets are saved, so next time you'll see what you did today.</p>
    </header>

    ${Da(e,t,r)}

    <section class="card">
      <h2>Today</h2>
      <ul class="summary">${i}</ul>
    </section>

    <section class="card">
      <h2>Cool down</h2>
      <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
      ${kn}
      ${we(n,`warm-up`)}
    </section>

    <button type="button" class="secondary" data-action="fix-set">Fix a set</button>
    <button type="button" class="primary" data-action="close-session">Back to workouts</button>
  `}function ka(e,t){let n=C(t.exercise,e.prescription);return`${n.min} to ${n.max} ${n.unit}`}function Aa(e,t,n=`lb`){let r=Q(e);if(!r)return``;let i=[e.setNumber===1?`${r.exercise.name}.`:``,`Set ${e.setNumber} of ${e.prescription.sets}.`,`${ka(e,r)}.`],a=ga(t,e,r,n);return e.setNumber===1&&a.weight!==null&&i.push(`Try ${W(U(a.weight,n))} ${It(n)}.`),i.filter(Boolean).join(` `)}function ja(e){return`Rest ${e.prescription.restSeconds} seconds.`}function Ma(e){let t=Q(e);return t?e.setNumber===1?`10 seconds. Next up, ${t.exercise.name}.`:`10 seconds. Get ready for set ${e.setNumber}.`:``}var Na=10,Pa=900,Fa=30,Ia=`If the pain was sharp or keeps coming back, stop and get it checked.`;function La(e,t){let{root:n,state:r,music:i}=e,a=!0,o={weight:``,amount:``},s=``,c,l=!1,u=``,d=null,f=!1,p=null;function m(e){a&&e&&yn(e,{onStart:i.duck,onEnd:i.restore})}function h(){let n=r.session;if(!n)return``;if(f)return xa(n,r.history);if(p){let e=p.editing,t=e?n.exercises.findIndex(t=>t.exercise.id===e.exerciseId):-1;return e&&t>=0?Ca({...n,index:t,setNumber:e.setIndex+1},o,s,r.weightUnit,!0):Ta(n,r.history,r.weightUnit)}switch(n.phase){case`lift`:return d?Sa(n,d):ba(n,r.history,a,u,i.current(),r.weightUnit,r.machineNotes[Q(n)?.exercise.id??``]??``);case`log`:return Ca(n,o,s,r.weightUnit);case`rest`:return Ea(n,Date.now(),a,i.current(),e.root.querySelector(`details.rest-more`)?.open??!1);case`done`:return Oa(n,r.history,t.workoutFor(n.day).coolDown,r.weightUnit)}}function g(){let e=r.session,t=e&&Q(e);if(!e||!t)return;let n=$(r.history,e,t.exercise.id),i=n[n.length-1],a=ga(r.history,e,t,r.weightUnit),c=C(t.exercise,e.prescription),l=i?.weight??a.weight;o={weight:l==null?``:String(U(l,r.weightUnit)),amount:String(i?.amount??c.max)},s=``}function _(e){return n.querySelector(`input[data-field="${e}"]`)?.value.trim()??``}function v(t){let n=(t.exercise.weightKind??`load`)===`bodyweight`;o={weight:_(`weight`),amount:_(`amount`)};let i=Number(o.amount);if(!Number.isInteger(i)||i<1||i>300)return s=`Enter how many reps (or seconds) you did, as a whole number.`,e.render(),null;let a=null;if(!n){if(a=Number(o.weight),o.weight===``||!Number.isFinite(a)||a<0||a>1e3)return s=`Enter the weight in ${It(r.weightUnit)}. Use 0 if there was no added weight.`,e.render(),null;a=Nt(a,r.weightUnit)}return{weight:a,amount:i}}function y(t,n){let i=r.session,a=i&&$(r.history,i,t)[n];i&&a&&p&&(p={editing:{exerciseId:t,setIndex:n}},o={weight:a.weight===null?``:String(U(a.weight,r.weightUnit)),amount:String(a.amount)},s=``,e.render(),window.scrollTo(0,0))}function b(){p=null;let t=r.session;if(t?.phase===`rest`&&ma(t,Date.now())===0){r.session=ua(t),J(r),S();return}e.render(),window.scrollTo(0,0)}function x(){let e=r.session,t=p?.editing,n=e?.exercises.find(e=>e.exercise.id===t?.exerciseId);if(!e||!t||!n)return;let i=v(n);i&&(r.history=Rn(r.history,t.exerciseId,e.startedAt,t.setIndex,i),J(r),b())}function ee(){let e=r.session,t=e&&Q(e);if(!e||!t)return;let n=v(t);n&&(r.history=Ln(r.history,t.exercise.id,e.startedAt,n),r.session=la(e,Date.now()),J(r),S())}function S(n=!0){window.clearInterval(c);let i=r.session;i&&(i.phase===`rest`?(l=ma(i,Date.now())<=Na,m(ja(i)),c=window.setInterval(w,250)):i.phase===`lift`?n&&m(Aa(i,r.history,r.weightUnit)):i.phase===`done`&&(Tn(!1),t.completeWorkout(i.day),J(r),m(`Workout complete. Nice work!`),xn([200,100,200])),e.render(),window.scrollTo(0,0))}function w(){let e=r.session;if(!e||e.phase!==`rest`){window.clearInterval(c);return}let t=ma(e,Date.now()),i=n.querySelector(`[data-timer]`);i&&(i.textContent=De(t)),!l&&t<=Na&&t>0&&(l=!0,m(Ma(e))),t===0&&!p&&(xn([300]),r.session=ua(e),J(r),m(`Go.`),i&&(i.textContent=`Go!`,i.closest(`.rest-card`)?.classList.add(`rest-over`)),window.setTimeout(()=>{(!i||n.querySelector(`.rest-over`))&&S()},Pa),window.clearInterval(c))}function T(){window.clearInterval(c),p=null,d=null,f=!1,Tn(!1),r.session=null,e.resetCalendarSelection(),J(r),e.go(`today`)}function E(){let e=r.session,n=e&&Q(e);if(!e||!n||!r.profile)return;t.setAvoided(n.exercise.id,!0);let i=e.exercises.map(e=>e.exercise.id),[a]=de(n,r.profile,r.equipmentIds,i);a?(r.session=pa(e,a),u=`Switched from ${n.exercise.name} to ${a.exercise.name}, which works the same muscles. ${Ia}`,m(`Switched to ${a.exercise.name}.`)):(r.session=fa(e),u=`Skipped ${n.exercise.name}. There's no gentler option for it with your equipment. ${Ia}`),J(r),S(!a)}function D(o,s){let c=r.session;if(c){if(o!==`hurt`&&o!==`toggle-voice`&&(u=``),o===`open-swap`){let t=Q(c);if(!t||!r.profile)return;let n=c.exercises.map(e=>e.exercise.id);d=de(t,r.profile,r.equipmentIds,n),e.render(),window.scrollTo(0,0)}else if(o===`choose-swap`){let e=d?.[Number(s)];if(d=null,!e)return;r.session=pa(c,e),J(r),S()}else if(o===`cancel-swap`)d=null,e.render();else if(o===`hurt`)E();else if(o===`set-done`)r.session=ca(c),g(),e.render(),n.querySelector(`input[data-field="amount"]`)?.select();else if(o===`cancel-log`)r.session={...c,phase:`lift`},J(r),e.render(),window.scrollTo(0,0);else if(o===`save-set`)ee();else if(o===`fix-set`)p={editing:null},e.render(),window.scrollTo(0,0);else if(o===`choose-fix`){let e=wa(c,r.history)[Number(s)];e&&y(e.planned.exercise.id,e.setIndex)}else o===`save-fix`?x():o===`cancel-fix`?b():o===`add-rest`?(r.session=da(c,Fa,Date.now()),l=!1,J(r),w()):o===`skip-rest`?(r.session=ua(c),J(r),S()):o===`skip-exercise`?(r.session=fa(c),J(r),S()):o===`play-music`?i.play(c.day):o===`stop-music`?i.stop():o===`toggle-voice`?(a=!a,a||window.speechSynthesis?.cancel(),e.render()):o===`end-workout`?(f=!0,e.render(),window.scrollTo(0,0)):o===`cancel-end`?(f=!1,e.render()):o===`confirm-end`?(c.exercises.some(e=>$(r.history,c,e.exercise.id).length>0)&&t.completeWorkout(c.day),T()):o===`close-session`&&T()}}return{screen:h,handleAction:D,begin(e,t){r.session=aa(e,new Date,t),J(r),Tn(!0),S()},resume(){r.session&&(r.session.phase===`rest`&&ma(r.session,Date.now())===0&&(r.session=ua(r.session)),r.session.phase===`log`&&g(),Tn(r.session.phase!==`done`),r.session.phase===`rest`&&(c=window.setInterval(w,250)))}}}var Ra=`<p class="notice save-warning" role="alert">This phone isn't letting the app save right now, so what you log could be lost when you close this page. Free up some storage, or open the app outside a private tab.</p>`;function za(e){let t=sn(),a=t.profile?t.equipmentConfirmed?`today`:`equipment`:`intro`,o=i(new Date),s=null,c=0,l=null,d=t.profile?{...t.profile}:{...H},f,p=!1,m=!1,_=null,v=``,y=`all`,b=!1,x=`today`,ee=null;dn(()=>queueMicrotask(F));let w=qi(F,A),T={root:e,state:t,music:w,render:F,showToast:A,go:j,redrawProfile:oe,resetCalendarSelection:ce},E=En(T),D=Rr(T),O=Mn(T),te=On(T),ne=Qi(T),re=hi(T),ie=ia(T),ae=La(T,{workoutFor:je,completeWorkout:Ne,setAvoided:L});function k(e){A(J(t)?e:`Couldn't save on this device — changes last until you close the page.`)}function A(t){let n=e.querySelector(`.toast`);n&&(n.textContent=t,n.classList.add(`visible`),window.clearTimeout(f),f=window.setTimeout(()=>n.classList.remove(`visible`),2500))}function j(n){a=n,_=null,ee=null,n===`profile`&&(d=t.profile?{...t.profile}:{...H}),F(),oi(e),window.scrollTo(0,0)}function M(){return x===`profile`?`Back to your profile`:x===`today`?`Back to your workout`:`Back`}function N(){return`
      <section class="card row-card">
        <div>
          <h2>New to working out?</h2>
        </div>
        <button type="button" class="secondary" data-action="open-guide">Start here</button>
      </section>`}function oe(){a===`profile`&&!t.session&&F()}function P(){return t.workoutLog.length===0&&Object.keys(t.history).length===0}function se(n){let r=e.querySelector(`input[data-field="machine-note"][data-exercise="${n}"]`);if(!r||!u[n])return;let i=Xe(r.value),a={...t.machineNotes};i?a[n]=i:delete a[n],t.machineNotes=a,J(t),r.value=i,A(i?`Saved. It will show here next time.`:`Note cleared.`)}function ce(){o=i(new Date),c=0,l=null}function le(e){let n=Math.min(12,Math.max(-4,e));if(n===c)return;c=n,l=null;let r=g(new Date,(t.profile??H).weekPlan,t.workoutLog,c);o=(r.find(e=>e.isToday)??r[0]).key,F()}function ue(e){let n=e?t.session?.day:a===`today`?z().shown:null;return n?` type-${n}`:``}function F(){let n=e.querySelector(`details.profile-more`);n&&(p=n.open);let r=e.querySelector(`details.setup-options`);r&&(b=r.open);let i=e.querySelector(`details.focus-picker`);i&&(m=i.open);let a=t.profile!==null&&t.equipmentConfirmed,o=t.session!==null;document.body.classList.toggle(`has-nav`,a&&!o);let c=ii(document.activeElement,e);e.innerHTML=`
      <main class="screen${ue(o)}">${un()?Ra:``}${o?ae.screen():fe()}</main>
      ${a&&!o?Re():``}
      ${s!==null&&a&&!o?vi(s):``}
      <div class="toast" role="status" aria-live="polite"></div>
    `,s!==null&&a&&!o&&yi(e,s),O.fill(),c&&ai(e,c)}function de(){return{equipmentIds:t.equipmentIds,protectedAreas:t.profile?.protectedAreas??[],history:t.history,weightUnit:t.weightUnit}}function fe(){if(a===`intro`)return Ti(E.card(!0));if(a===`guide`)return Ci(M());if(a===`profile`)return I();if(a===`equipment`)return Oe();if(a===`library`)return Nr(v,y,de());if(a===`progress`){let e=(t.profile??H).weekPlan.filter(Boolean).length;return br(t.history,new Date,e,t.recovery,t.weightUnit)}return a===`fuel`?re.screen()+Dn(t.foodReminderTime):Le()}function pe(e,t,n,r,i=``){return`<button type="button" class="chip${r?` active`:``}" data-group="${e}" data-value="${t}" aria-pressed="${r}">
      <span>${n}</span>${i?`<small>${i}</small>`:``}
    </button>`}function me(){return`
      <details class="card switcher profile-more"${p?` open`:``}>
        <summary>More: calendar, backup, home screen</summary>
        <div class="more-body">
          ${Pn(Nn())}
          ${Br(t.calendar,Se(t.profile??H),ee)}
          ${ne.card()}
          ${E.card(!1)}
          ${ea()}
        </div>
      </details>`}function he(){return`
      <section class="card">
        ${ye(`⚖️`,`gold`,`Weight units`)}
        <div class="chip-row two">
          ${jt.map(e=>`<button type="button" class="chip${t.weightUnit===e?` active`:``}" data-action="set-weight-unit" data-value="${e}" aria-pressed="${t.weightUnit===e}">${e===`lb`?`Pounds (lb)`:`Kilograms (kg)`}</button>`).join(``)}
        </div>
        <p class="hint small">Only changes how weights are shown and typed. Your logged weights are kept.</p>
      </section>

      <section class="card">
        ${ye(`📅`,`purple`,`Your week`)}
        <p class="hint">Pick a workout for each day, or Rest. Push is chest, shoulders and triceps. Pull is back and biceps. Legs days include abs. Home is a short abs routine you can do anywhere.</p>
        ${Qr(d.weekPlan,d.focusPlan,m)}
      </section>`}function ge(e){return`
      <details class="card switcher setup-options"${b?` open`:``}>
        <summary>Optional: weight units and workout days</summary>
        <div class="more-body">${e}</div>
      </details>`}function I(){let e=t.profile===null,n=he();return`
      <header class="screen-header">
        ${e?`<p class="eyebrow">Step 1 of 2</p>`:``}
        <h1>${e?`Let's set up your workouts`:`Your profile`}</h1>
        <p class="lead">This shapes which exercises you get and how many sets and reps. It stays on this phone.</p>
      </header>

      ${be()}

      ${e?``:N()}

      <section class="card">
        ${ye(`🎯`,`teal`,`Your goal`)}
        <div class="chip-col">
          ${wt.map(e=>pe(`goal`,e.id,e.label,d.goal===e.id,e.detail)).join(``)}
        </div>
      </section>

      <section class="card">
        ${ye(`🏋️`,`blue`,`Lifting experience`)}
        <div class="chip-row three">
          ${Tt.map(e=>pe(`experience`,e.id,e.label,d.experience===e.id)).join(``)}
        </div>
      </section>

      ${e?``:n}

      <section class="card">
        ${ye(`🛡️`,`green`,`Areas to protect`)}
        <p class="hint">Tick anything that's injured, painful, or tight. Risky exercises for these areas are left out, and gentler ones are picked instead.</p>
        <div class="chip-row">
          ${Et.map(e=>pe(`area`,e.id,e.label,d.protectedAreas.includes(e.id))).join(``)}
        </div>
        <p class="disclaimer">This app isn't medical advice. If something hurts beyond normal muscle tiredness, stop, and check with a doctor or physical therapist about what's safe for you.</p>
      </section>

      ${e?ge(n):``}

      ${Ce()}

      ${e?``:me()}

      <button type="button" class="primary" data-action="save-profile">${e?`Next: your gym's equipment`:`Save profile`}</button>
      ${e?``:`<button type="button" class="secondary" data-nav="equipment">Edit gym equipment</button>`}
      ${e?``:`<button type="button" class="link-button center" data-action="start-tour">Take a quick tour of the app</button>`}
    `}function ve(){let e=t.profile;if(!e)return!1;let n=e=>[...e.protectedAreas].sort().join(`,`);return d.goal!==e.goal||d.experience!==e.experience||n(d)!==n(e)||Se(e)}function be(){return _===null?``:`
      <section class="notice" role="alert">
        <p><strong>You changed your profile but haven't saved it.</strong></p>
        <div class="button-row">
          <button type="button" class="primary" data-action="save-and-leave">Save and go</button>
          <button type="button" class="secondary" data-action="leave-profile">Leave without saving</button>
        </div>
      </section>`}function Se(e){return JSON.stringify(d.weekPlan)!==JSON.stringify(e.weekPlan)||JSON.stringify(d.focusPlan)!==JSON.stringify(e.focusPlan)}function Ce(){let e=t.profile?.avoidedExerciseIds??[];if(e.length===0)return``;let n=e.filter(e=>u[e]).map(e=>`
        <li class="avoided-item">
          <span>${u[e].name}</span>
          <button type="button" class="link-button" data-action="unavoid" data-exercise="${e}">Bring back</button>
        </li>`).join(``);return`
      <section class="card">
        ${ye(`⚠️`,`pink`,`Exercises that hurt`)}
        <p class="hint">You marked these as hurting, so they're left out of your workouts.</p>
        <ul class="avoided-list">${n}</ul>
      </section>
    `}function L(e,n){if(!t.profile)return;let r=t.profile.avoidedExerciseIds.filter(t=>t!==e);t.profile={...t.profile,avoidedExerciseIds:n?[...r,e]:r},d={...d,avoidedExerciseIds:t.profile.avoidedExerciseIds}}function De(e,t){let n=qe.filter(t=>e.ids.includes(t.id));return`
      <section class="card equipment-list">
        <h2>${e.title}</h2>
        ${n.map(e=>`
          <label class="equipment-item">
            <input type="checkbox" data-equipment="${e.id}" ${t.has(e.id)?`checked`:``} />
            <span><strong>${e.name}</strong><small>${e.hint}</small></span>
          </label>`).join(``)}
      </section>`}function Oe(){let e=!t.equipmentConfirmed,n=new Set(t.equipmentIds);return`
      <header class="screen-header">
        ${e?`<p class="eyebrow">Step 2 of 2</p>`:``}
        <h1>What does your gym have?</h1>
        <p class="lead">Untick anything your gym doesn't have. You'll only get exercises you can actually do there. Not sure what something is? Leave it ticked: you can change this any time in Profile.</p>
      </header>

      ${Ye.map(e=>De(e,n)).join(``)}

      <button type="button" class="primary" data-action="save-equipment">${e?`See today's workout`:`Save equipment`}</button>
    `}function ke(e,n,r){let{exercise:i}=e,a=Fn(t.history,i.id);return`
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
          ${wr(t.history,i.id,r,t.weightUnit)}
          ${Te(e)}
          ${Ee(e)}
          ${Ze(i.id,t.machineNotes[i.id]??``)}
          <button type="button" class="link-button hurt-link" data-action="avoid" data-exercise="${i.id}">This hurts me, replace it</button>
        </details>
      </article>
    `}function je(e,n=null){return _e(e,t.profile??H,t.equipmentIds,n)}function Me(e,n){let r=t.profile??H;return n!==null&&r.weekPlan[e]===n?r.focusPlan[e]??null:null}function z(){let e=g(new Date,(t.profile??H).weekPlan,t.workoutLog,c),n=e.find(e=>e.key===o)??e.find(e=>e.isToday)??e[0];return{week:e,selected:n,shown:(n.isToday&&n.status!==`done`?l:null)??n.workout}}function Ne(e){t.workoutLog=[...t.workoutLog,{date:new Date().toISOString(),day:e}],l=null}function Pe(e){return`
      <details class="card switcher">
        <summary>Switch today's workout</summary>
        <p class="hint">Want a different one today? Pick it here. Your week plan stays as it is.</p>
        ${xe(e,`Workout for today`)}
      </details>`}function B(e){if(!e)return``;let n=new Date;return nt(t.deload,n)?ei():it(t.workoutLog,n,t.deload)?ti(rt(t.workoutLog,n,t.deload.easyWeeks)):``}function Fe(e){return e&&n(t,new Date)?r():``}function Ie(e){return e?ie.card():``}function Le(){let{week:e,selected:n,shown:r}=z(),i=qr(e,n.key,c);if(r===null)return`
        <header class="screen-header">
          <p class="eyebrow">${Ur(n)}</p>
          <h1>Rest day</h1>
        </header>
        ${i}
        ${P()?N():``}
        ${Ie(n.isToday)}
        ${B(n.isToday)}
        ${Fe(n.isToday)}
        ${Yr(n)}
      `;let a=je(r,Me(n.weekdayIndex,r)),o=n.status===`done`,s=n.status===`missed`,l=n.isToday&&!o,u=e.some(e=>e.isToday&&e.status!==`done`),d=a.exercises.length>0,f=d?a.exercises.map((e,t)=>ke(e,t,C(e.exercise,a.prescription).unit)).join(``):`<section class="card empty">
           <p>None of your gym's equipment fits this day yet.</p>
           <button type="button" class="secondary" data-action="go-equipment">Check your equipment</button>
         </section>`,p=d?o?`<p class="notice done-note">✓ Done. Your sets from this workout are in the Progress tab.</p>`:l?`<button type="button" class="primary big" data-action="start-workout">Start workout</button>
             <p class="hint start-hint">Talks you through each set with a rest timer. Headphones recommended.</p>`:s?`<p class="notice">○ This one wasn't logged. It was planned for ${h[n.weekdayIndex]}.</p>
               ${u?`<button type="button" class="secondary" data-action="do-today" data-workout="${r}">Do it today instead</button>`:``}`:`<p class="hint start-hint">Coming up. You can start it on the day.</p>`:``;return`
      <header class="screen-header">
        <p class="eyebrow">${n.isToday?`Today's workout`:Ur(n)}</p>
        <h1>${a.title}</h1>
        ${t.profile?`<p class="hint plan-summary">${kt(t.profile)}</p>`:``}
      </header>

      ${i}

      ${p}

      ${P()?N():``}
      ${Ie(n.isToday)}
      ${B(n.isToday)}
      ${Fe(n.isToday)}

      <details class="card switcher">
        <summary>Warm up first</summary>
        ${we(a.warmUp,`warm-up`)}
      </details>

      <p class="tap-hint">Tap an exercise to see how to do it. ${S(a.prescription)}</p>
      <div class="exercise-list">${f}</div>

      <details class="card switcher">
        <summary>Cool down</summary>
        <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
        ${kn}
        ${we(a.coolDown,`warm-up`)}
      </details>

      ${$i(r,w.current())}
      ${l?Pe(r):``}

      ${d&&l?`<button type="button" class="link-button center" data-action="finish-workout">Mark done without the timer</button>`:``}
    `}function Re(){let e=a===`guide`?x:a,t=t=>e===t||t===`profile`&&e===`equipment`,n=(e,n)=>`<button type="button" class="nav-item${t(e)?` active`:``}"${t(e)?` aria-current="page"`:``} data-nav="${e}">${_i[e]??``}<span>${n}</span></button>`;return`<nav class="bottom-nav" aria-label="Main">${n(`today`,`Workout`)}${n(`library`,`Exercises`)}${n(`progress`,`Progress`)}${n(`fuel`,`Fuel`)}${n(`profile`,`Profile`)}</nav>`}e.addEventListener(`change`,e=>{let n=e.target;if(n.dataset.field===`restore-file`){let e=n.files?.[0];e&&E.handleFileChosen(e);return}te.handleChange(n),n.dataset.field===`cal-time`&&R(n.value)?(t.calendar={...t.calendar,time:n.value},J(t)):n.dataset.field===`cal-minutes`&&Ae.includes(Number(n.value))&&(t.calendar={...t.calendar,minutes:Number(n.value)},J(t))});let ze=null;e.addEventListener(`input`,t=>{let n=t.target;if(n.dataset.field!==`library-search`)return;v=n.value;let r=e.querySelector(`.library-list`);r&&(r.innerHTML=Mr(v,y,de()))}),e.addEventListener(`touchstart`,e=>{let t=e.touches[0];ze=e.target.closest(`.calendar, .week-nav`)&&t?{x:t.clientX,y:t.clientY}:null}),e.addEventListener(`touchend`,e=>{let n=e.changedTouches[0],r=ze;if(ze=null,!r||!n||t.session)return;let i=n.clientX-r.x,a=n.clientY-r.y;Math.abs(i)>=50&&Math.abs(i)>1.5*Math.abs(a)&&le(c+(i<0?1:-1))}),e.addEventListener(`click`,n=>{let r=n.target.closest(`[data-point]`);if(r){let e=r.closest(`.progress-card`)?.querySelector(`.chart-caption`);e&&(e.textContent=r.dataset.point??``);return}let f=n.target.closest(`button`);if(!f)return;let{group:p,value:m,action:h,day:g,date:v,nav:b,step:S,delta:C,exercise:M,index:N,planDay:oe,planWorkout:P,workout:ue,focusDay:de,focus:fe}=f.dataset;if(S&&C){let t=e.querySelector(`input[data-field="${S}"]`);t&&(t.value=String(Math.max(0,(Number(t.value)||0)+Number(C))));return}if(oe!==void 0&&P){let e=Number(oe),t=P===`rest`?null:P,n=d.weekPlan.map((n,r)=>r===e?t:n);if(!n.some(Boolean)){A(`Keep at least one workout day.`);return}d.weekPlan=n,d.focusPlan=d.focusPlan.map((t,n)=>n===e?null:t),F();return}if(de!==void 0&&fe){let e=Number(de),t=fe===`balanced`?null:fe;d.focusPlan=d.focusPlan.map((n,r)=>r===e?t:n),F();return}if(p&&m){if(p===`goal`&&(d.goal=m),p===`experience`&&(d.experience=m),p===`area`){let e=m,t=d.protectedAreas;d.protectedAreas=t.includes(e)?t.filter(t=>t!==e):[...t,e]}F();return}if(v){o=v,l=null,F();return}if(g){l=g,F();return}if(b){if(b!==`profile`&&a===`profile`&&ve()){_=b,F(),window.scrollTo(0,0);return}j(b);return}if(h){if(h===`library-group`&&m){y=m,F();return}if(h===`tour-next`||h===`tour-skip`){s=h===`tour-next`&&s!==null&&s+1<X.length?s+1:null,F();return}if(!t.session&&(h===`week-prev`||h===`week-next`||h===`week-today`)){le(h===`week-today`?0:c+(h===`week-next`?1:-1));return}if(h===`save-note`&&M){se(M);return}if(t.session){ae.handleAction(h,N);return}if(a===`fuel`){te.handleAction(h)||re.handleAction(h,C,N);return}if(!(ie.handleAction(h,m)||E.handleAction(h)||D.handleAction(h)||O.handleAction(h)||ne.handleAction(h))){if(h===`save-profile`){let e=t.profile===null;t.profile={...d},e?(J(t),j(`equipment`)):(j(`today`),k(`Profile saved — your workouts are updated.`))}else if(h===`save-and-leave`&&_!==null){let e=_;t.profile={...d},j(e),k(`Profile saved — your workouts are updated.`)}else if(h===`leave-profile`&&_!==null)j(_);else if(h===`save-equipment`){t.equipmentIds=[...e.querySelectorAll(`input[data-equipment]`)].filter(e=>e.checked).map(e=>e.dataset.equipment??``);let n=!t.equipmentConfirmed;t.equipmentConfirmed=!0,n&&(s=0),j(`today`),k(`Equipment saved.`)}else if(h===`avoid`&&M)L(M,!0),F(),k(`${u[M]?.name??`That exercise`} won't be planned again. Bring it back any time in Profile.`);else if(h===`unavoid`&&M)L(M,!1),F(),k(`${u[M]?.name??`That exercise`} is back in your workouts.`);else if(h===`start-tour`)s=0,ce(),j(`today`);else if(h===`go-equipment`)j(`equipment`);else if(h===`add-to-calendar`){let e=zr(T);e&&(ee=e,F(),A(`Calendar file downloaded. Open it to add your workouts.`))}else if(h===`easy-week-start`)t.deload=at(t.deload,new Date),J(t),F(),A(`Easy week is on. Every workout this week has one fewer set.`);else if(h===`easy-week-dismiss`)t.deload=st(t.deload,new Date),J(t),F();else if(h===`easy-week-end`)t.deload=ot(t.deload,new Date),J(t),F(),A(`Back to your normal sets.`);else if(h===`set-weight-unit`){let e=jt.find(e=>e===m);if(!e)return;t.weightUnit=e,J(t),F(),A(`Weights are now in ${It(e)}.`)}else if(h===`dismiss-backup-nudge`)t.backupNudgeDismissedAt=new Date().toISOString(),J(t),F();else if(h===`open-guide`)a!==`guide`&&(x=a),j(`guide`);else if(h===`close-guide`)a=x,F(),oi(e),window.scrollTo(0,0);else if(h===`start-setup`)j(`profile`);else if(h===`play-music`&&ue)w.play(ue);else if(h===`stop-music`)w.stop();else if(h===`do-today`&&ue)o=i(new Date),l=ue,F(),window.scrollTo(0,0);else if(h===`start-workout`){let{selected:e,shown:n}=z();if(!n)return;let r=ie.today(),i=nt(t.deload,new Date)?`easy`:r?Qn(r):null;ae.begin(je(n,Me(e.weekdayIndex,n)),i)}else if(h===`finish-workout`){let{shown:e}=z();if(!e)return;Ne(e),j(`today`),k(`Nice work! It's marked done on your calendar.`)}}}}),ne.check(),ae.resume(),F()}var Ba=document.querySelector(`#app`);Ba&&za(Ba),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});